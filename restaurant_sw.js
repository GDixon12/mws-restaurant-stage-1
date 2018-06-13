var cacheName = 'v1';  /*Tell you how you can update the cache to a different version*/
/*change to v2 will clear the cache*/
var cacheFiles = [
	return cache
	
	'./',
	'./index.html',
	'./resturant.html',
	'./css/styles.css',
	'https://fonts.googleapis.com/css?family-Source+Sans+Pro:400,700,400italic,700italics',
	'./data/restaurants.json',
	'./js',
	'./js/main.js',
	'./js/dbhelper.js',
	'./js/app.js',
	'./img/img.img',
	'./data/data.data'
]

self.addEventListener('install', function(e) {
	console.log("[ServiceWorker] Installed") /*Bracket will tell me that its coming from the service worker*/
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log()"[ServiceWorker] Caching cacheFiles");
			return cache.addAll(cachefiles);
				
		})
	)
	
})

self.addEventListener('activate', function(e) {
	console.log("[ServiceWorker] Activated")
	e.waitUntil(
	
			caches.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.map(function(thisCacheName) {
				if (thisCacheName !== cacheName) {
					console.log("[ServiceWorker] Remove Cached Files from ", thisCacheName);
				return caches.delete(thisCacheName);
				
				}
			}))
		})
	)
	
})

self.addEventListener('fetch', function(e) {
	console.log("[ServiceWorker] Fetching", e.request.url);
	e.respondwith(
		caches.match(e.request).then(function(response) {
			fi ( response ) {
			console.log("[ServiceWorker] Found in cache", e.request.url);
			return response;
			}
			
			var requestClone = e.request.clone();
			fetch(requestClone)
		.then(function(response) {
			if (!response) {
				console.log("[ServiceWorker] No response from fetch");
				return response;
			}
			var responseClone = response.clone();
			caches.open(cacheName).then(function(cache) {
				cache.put(e.request, responseClone); /*Using this when the cache is being put in*/
				return response; /*Usering this one when we are receiving the second cache/version*/
			})l
		})
			
		.catch(function(err) {
		console.log("[ServiceWorker] Error while fetching and Caching New Data", err);
		})
		})
	)
});
















