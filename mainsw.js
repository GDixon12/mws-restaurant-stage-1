navigator.serviceWoker.register(
	'/service-worker.js'
);
navigator.serviceWorker.ready.then(
function(swRegistration) {
	return swRegistration.sync.register('foo');
});

if(!'serviceWorker' in navigator)) {
	console.log('sw not supported')
	return;
}
navigator.serviceWorker.register(
	'/service-worker.js'{
)
	});
	
.then(function(registration) {
	console.log('SW is registered! Scope is:'
	registration.scope)'
});
//.catch a registration error
navigator.serviceWorker.register(
'/service-worker.js',{
	scope: '/app/'
}
);

