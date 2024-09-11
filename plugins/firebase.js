import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp(
        {
            // apiKey: "sampleDnGtkVa-frvtI3r7SOaFc7PKxAoANKPxA",
            // authDomain: "sample-nuxt-firebase-introduction.firebaseapp.com",
            // projectId: "sample-nuxt-firebase-introduction",
            // storageBucket: "sample-nuxt-firebase-introduction.appspot.com",
            // messagingSenderId: "sample-779950847276",
            // appId: "sample-1:750847276:web:dbf3b5a8bc3c4d641a6889",
            // measurementId: "sample-EKJ1X2XH3"
            apiKey: "AIzaSyAV3VCuxLbaG0Bhzlv1Mj8C_kyXkWtYuO8",
            authDomain: "hdd-rental.firebaseapp.com",
            projectId: "hdd-rental",
            storageBucket: "hdd-rental.appspot.com",
            messagingSenderId: "854432557545",
            appId: "1:854432557545:web:a07f150b886f71e1bcc378"
        }
    )
}

export default firebase