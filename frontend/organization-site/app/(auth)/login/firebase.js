import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

let messaging;
let firebaseInitialized = false;

if (typeof window !== 'undefined') {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  };

  // Only initialize Firebase if projectId is configured
  if (firebaseConfig.projectId) {
    const firebase = initializeApp(firebaseConfig);
    messaging = getMessaging(firebase);
    firebaseInitialized = true;
  } else {
    console.warn('Firebase not configured - push notifications disabled');
  }
} else {
  console.error('Firebase Messaging initialization skipped in non-browser environment.');
}

export const generateToken = async () => {
  if (!firebaseInitialized) {
    console.warn('Firebase not initialized - skipping token generation');
    return null;
  }

  if (typeof window !== 'undefined') {
    const permission = await Notification.requestPermission();
    localStorage.setItem("Notification_permit", permission);

    if (permission !== "granted") {
      return null;
    }

    try {
      const fcmToken = await getToken(messaging, {
        vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY,
      });

      return fcmToken;
    } catch (error) {
      console.error("An error occurred while retrieving token. ", error);
      return null;
    }
  } else {
    console.error('Cannot request permission in non-browser context.');
    return null;
  }
}


// import { initializeApp } from "firebase/app";
// import { getMessaging, getToken } from "firebase/messaging";

// let messaging;

// if (typeof window !== 'undefined') {
//   const firebaseConfig = {
//     apiKey: "AIzaSyC0yF49OUpMV5ltulHQItK7WGe3MPmypoE",
//     authDomain: "epass-12a42.firebaseapp.com",
//     projectId: "epass-12a42",
//     storageBucket: "epass-12a42.appspot.com",
//     messagingSenderId: "634057872687",
//     appId: "1:634057872687:web:4b8d5e61f7fa53310afdda",
//   };

//   const firebase = initializeApp(firebaseConfig);
//   messaging = getMessaging(firebase);
// } else {
//   console.error('Firebase Messaging initialization skipped in non-browser environment.');
// }

// export const generateToken = async () => {
//   if (typeof window !== 'undefined') {
//     const permission = await Notification.requestPermission();
//     localStorage.setItem("Notification_permit", permission);
 
//     if (permission !== "granted") {
//       return null;
//     }

//     try {
//       const fcmToken = await getToken(messaging, {
//         vapidKey: "BCtx_Vg_4odNTFLrhkrFmT1Ej9MMQFkor7tv5LDlxkx0ywdUUydSf3cEdTSJ-acWG95e-TP85euq4Y63EXWmx-E",
//       });

//       return fcmToken;
//     } catch (error) {
//       console.error("An error occurred while retrieving token. ", error);
//       return null;
//     }
//   } else {
//     console.error('Cannot request permission in non-browser context.');
//     return null;
//   }
// }
