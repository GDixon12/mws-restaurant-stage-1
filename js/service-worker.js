var cacheName = "v1";
var cacheFiles = [
"/",
"/index.html",
"/restaurant.html"
"/css/styles.css",
"https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,400italic,700italic",
"/js/dbhelper.js",
"/js/main.js",
"/img/img.jpg",
"/restaurant_info.js",
"/swreg.js",
"/js/service-worker.js",
"/data.restaurant.json",
"/js/"
]
self.addEventListener("install", function(e) {
	console.log("[ServiceWorker] installed")
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log("[ServiceWorker] Caching cacheFiles");
			return cache.addAll(cacheFiles);
		})
	)
});

self.addEventListener("activate", function(e) {
	console.log("[ServiceWorker] Activated")
	
	e.waitUntil(
		cache.keys().then(function(cacheNames) {
			return Promise.all(cacheNames.map(function(thisCacheName) {
				if (thisCacheName !== cacheName) {
					console.log([ServiceWorker]" Removing Cached Files from ", thisCacheName);
					return caches.delete(thisCacheName);
				}
			}))
		})
	)
});

self.addEventListener("fetch",function(e) {
	console.log("[ServiceWorker] fetching", e.request.url);
	e.respondWith(
		caches.match(e.request).then(function(response) {
			console.log("[ServiceWorker] Found in cache" e.request.url);
			return response;
		}
		
		fetch(e.request);
		})
	)
});





