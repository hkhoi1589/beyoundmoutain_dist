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

// if ('serviceWorker' in navigator) {
// 	navigator.serviceWorker
// 		.register('/firebase-messaging-sw.js')
// 		.then(async (registration) => {
// 			console.log('registration is successfully', registration.scope);
// 			const currentToken = await messaging.getToken({
// 				vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
// 			});
// 			if (currentToken) {
// 				console.log('current token for client: ', currentToken);
// 				// Perform any other neccessary action with the token
// 			} else {
// 				// Show permission request UI
// 				console.log('No registration token available. Request permission to generate one.');
// 			}
// 		})
// 		.catch((err) => {
// 			console.log('An error occurred while retrieving token. ', err);
// 		});
// }

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
