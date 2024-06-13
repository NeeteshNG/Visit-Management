importScripts(
  "https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js"
);

let messaging;

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "FIREBASE_CONFIG") {
    const firebaseConfig = event.data.config;

    firebase.initializeApp(firebaseConfig);

    messaging = firebase.messaging();

    messaging.onBackgroundMessage((payload) => {
      console.log("Received background message: ", payload);

      const notificationTitle =
        payload.notification.title || "Background Message Title";
      const notificationOptions = {
        body: payload.notification.body,
      };

      self.registration.showNotification(
        notificationTitle,
        notificationOptions
      );
    });
  }
});

if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/firebase-messaging-sw.js")
    .then((registration) => {
      console.log("Service Worker Registered", registration);

      if (registration.active) {
        registration.active.postMessage({
          type: "FIREBASE_CONFIG",
          config: firebaseConfig,
        });
      }
    })
    .catch((err) => {
      console.error("Service Worker Registration Failed", err);
    });
}
