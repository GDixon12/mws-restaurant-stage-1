var cacheName = 'mws-restaurant-v5';
var cacheFiles = [
'/',
'/index.html',
'/restaurant.html',
'/css/styles.css',
'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,400italic,700italic',
'/js/dbhelper.js',
'/js/main.js',
'/img',
'/js/restaurant_info.js',
'/js/swreg.js',
'/data/restaurants.json',
'/package.json',
'/manifest.json'
];
self.addEventListener('install', function(e) {
	console.log('[ServiceWorker] install');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('[ServiceWorker] Caching cacheFiles');
			return cache.addAll(cacheFiles);
		})
	)
});

self.addEventListener('activate', function(e) {
	console.log('[ServiceWorker] Activate');
	
	e.waitUntil(
		cache.keys().then(function(cacheName) {
			return Promise.all(cacheName.map(function(thisCacheName) {
				if (thisCacheName !== cacheName) {
					console.log('[ServiceWorker] Removing Cached Files from ', thisCacheName);
					return caches.delete(thisCacheName);
				}
			}))
		})
	)
});

self.addEventListener('fetch', function(e) {
	console.log('[ServiceWorker] fetching', e.request.url);
	e.respondWith(
		caches.match(e.request).then(function(response) {
			if ( response ) {
			console.log('[ServiceWorker] Found in cache', e.request.url);
			return response;
		}
		
		return fetch(e.request);
		}
		)
		);
});






		
	