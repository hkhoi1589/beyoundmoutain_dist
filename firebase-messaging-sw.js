// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
	apiKey: 'AIzaSyAkfHBzGYQcUZL0S76E3TukmzFuzCidge4',
	authDomain: 'koolyard-84a4a.firebaseapp.com',
	projectId: 'koolyard-84a4a',
	storageBucket: 'koolyard-84a4a.appspot.com',
	messagingSenderId: '669707854180',
	appId: '1:669707854180:web:8a5e8aa2dd09025df95a71',
	measurementId: 'G-PG9PCKGMHY',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(async (message) => {
	if (Notification.permission === 'granted') {
		if (navigator.serviceWorker)
			navigator.serviceWorker.getRegistration().then(async function (reg) {
				if (reg)
					await reg.showNotification(message.notification.title, {
						body: message.notification.body,
					});
			});
	}
});
