importScripts("https://www.gstatic.com/firebasejs/12.17.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/12.17.1/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyC_vcm4r4gmX8Y9pfSJeq2YHLpH3XTXGM0",
  authDomain: "assitant-secteur.firebaseapp.com",
  projectId: "assitant-secteur",
  storageBucket: "assitant-secteur.firebasestorage.app",
  messagingSenderId: "578089666142",
  appId: "1:578089666142:web:30447a7997a036853616cf"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("FCM background :", payload);

  const title = payload.data?.title || "🚨 Assistant-Secteur";
  const body = payload.data?.body || "TEST SERVICE WORKER 123";

  return self.registration.showNotification(title, {
    body: body
  });
});
