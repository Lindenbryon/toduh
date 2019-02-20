import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBM9Ri8908VvDYRmIXVxq95A0Md7O3dJ0w",
    authDomain: "idkapp-dfa0d.firebaseapp.com",
    databaseURL: "https://idkapp-dfa0d.firebaseio.com",
    projectId: "idkapp-dfa0d",
    storageBucket: "idkapp-dfa0d.appspot.com",
    messagingSenderId: "41304171678"
};
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos")
