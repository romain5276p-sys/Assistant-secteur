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

  const title =
    payload.notification?.title ||
    payload.data?.title ||
    "🚨 Assistant-Secteur";

  const body =
    payload.notification?.body ||
    payload.data?.body ||
    "Nouvelle notification";

  const options = {
    body: body,
    icon: "./icon-192.png",
    badge: "./icon-192.png",
    vibrate: [300, 100, 300],
    tag: "assistant-secteur",
    renotify: true,
    data: {
      url: "./"
    }
  };

  return self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(
    clients.matchAll({
      type: "window",
      includeUncontrolled: true
    }).then((clientList) => {
      for (const client of clientList) {
        if ("focus" in client) {
          return client.focus();
        }
      }

      if (clients.openWindow) {
        return clients.openWindow("./");
      }
    })
  );
});
