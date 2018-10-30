var cacheName = 'mws-restaurant-v3';
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
		const requestUrl = new URL(e.request.url);
	if (requestUrl.pathname == '/') {
		e.respondWith(caches.match('index.html'));
		return;
	console.log('[ServiceWorker] fetching', e.request.url);
	}
		if (requestUrl.pathname.startsWith('/restaurant.html')){
			e.respondWith(caches.match('restaurant.html'));
			return;
			}
		}
		e.respondWith(loadCacheOrNetwork(e.request));
		});
		
sefl.addEventListener('message', function (e) {
	if (e.data && e.data.updated) {
		self.skipWaiting();
	}
});






		
	