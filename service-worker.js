self.addEventListener('install',
function(event) {
	/*Will start doig stuff*/
});
self.addEventListener('activate',
function(event) {
});

self.addEventListener('fetch',
function(event) {
	event.respondWith(
	caches.match(event.request)
	);
});
self.addEventListener('sync',
function(event) {
	if (event.tag ==='foo') {
		event.waitUntil(doSomething()); /* Will return a promise*/
	}
});
/*Where the service worker look for push events*/
self.addEventListener('push',
function(event) {
	event.waitUntil(self.registration.showNotification(
	'You Got It'
	options /*This is your to show customization from the data that push from the server*/
	);
	);
})




