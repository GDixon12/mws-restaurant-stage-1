if("serviceWorker" in navigator) {

navigator.serviceWorker.register("swreg.js" , {scope: "./"})
.then(function(registration){
	cosole.log("Service Worker Registered", registration);
})
	.catch(function(err) {
		console.log("Woo Service Worker Failed to Register", err);
	})
	}

	
	
	