
if("serviceWorker" in navigator)) {

navigator.serviceWorker
.register('.service-worker.ja' , {scope: './'})
.then.(function(registration){
	console.log("Service Worker Registered", registration);
})
	.catch(function(err) {
		console.log("Woo Service Worker Failed to Register", err);
	})
	}
	
