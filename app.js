if ('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('./service_worker.js', {scope: './'})
	.then(function(registration) {
		console.log("Service Worker Registered", registration;
		});
		.catch(function(err) {
			console.log("Service Worker Failed", err)'
		})
}

