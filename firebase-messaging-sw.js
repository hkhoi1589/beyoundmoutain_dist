// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
	apiKey: 'AIzaSyBPv5xdqnMIpKr0JdqjetA2aoENywQ2h3E',
	authDomain: 'react-push-notification-ecffb.firebaseapp.com',
	projectId: 'react-push-notification-ecffb',
	storageBucket: 'react-push-notification-ecffb.appspot.com',
	messagingSenderId: '911170895171',
	appId: '1:911170895171:web:34a1ecbdeaa1b54ce743f6',
	measurementId: 'G-4V86PBRCFY',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

// Retrieve firebase messaging
const messaging = firebase.messaging();

// Background notifications will be received here
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
