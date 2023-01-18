import firebase from 'firebase/app'
import 'firebase/firebase-database';
import 'firebase/storage'

const oFirebase = firebase.initializeApp({
    databaseURL: "https://play-dish-default-rtdb.asia-southeast1.firebasedatabase.app"
    storage
})

const oDB = firebase.initializeApp({
    databaseURL : "https://play-dish-default-rtdb.asia-southeast1.firebasedatabase.app/"
}).database();

export const oPlayDishDB = oDB.ref();