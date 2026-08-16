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
  console.log("Message reçu en arrière-plan :", payload);

  const title = payload.notification?.title || "Assistant Secteur";
  const options = {
    body: payload.notification?.body || "Nouvelle notification"
  };

  self.registration.showNotification(title, options);
});
