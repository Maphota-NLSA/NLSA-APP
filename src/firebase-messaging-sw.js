importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.6.1/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyBklOBwfiSURtNgRlOHDQVC9xLHTxhsBq8",
    authDomain: "nlsa-app.firebaseapp.com",
    projectId: "nlsa-app",
    storageBucket: "nlsa-app.firebasestorage.app",
    messagingSenderId: "692680829717",
    appId: "1:692680829717:web:88c9901f07bf990026171c",
    measurementId: "G-2ZX5RGPVYN"
});

const messaging = firebase.messaging();