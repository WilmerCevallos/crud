import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCq4VhY_3NwLsS99CME1Xe6oMHmr6CpJGg",
    authDomain: "crud-82ba3.firebaseapp.com",
    projectId: "crud-82ba3",
    storageBucket: "crud-82ba3.appspot.com",
    messagingSenderId: "759204480324",
    appId: "1:759204480324:web:171c7c48ce54ddd3924311"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)
