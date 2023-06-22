// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

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

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

//background notifications will be received here
messaging.setBackgroundMessageHandler(function (payload) {
	console.log('Received background message ', payload);
	// Customize notification here
	const notificationTitle = 'Background Message Title';
	const notificationOptions = {
		body: 'Background Message body.',
		icon: '/firebase-logo.png',
	};

	return self.registration.showNotification(notificationTitle, notificationOptions);
});

messaging.onBackgroundMessage(function (payload) {
	console.log('Received background message ', payload);
	const notificationTitle = 'Background Message Title';
	const notificationOptions = {
		body: 'Background Message body.',
		icon: '/firebase-logo.png',
	};

	return self.registration.showNotification(notificationTitle, notificationOptions);
});
