import firebase from 'firebase'

if (!firebase.apps.length) {
    firebase.initializeApp(
        {
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