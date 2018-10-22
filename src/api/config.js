// Initialize Firebase
import Firebase from 'firebase';
let config = {
  apiKey: 'AIzaSyANHT7991oMIBa74Y33CAAD4aRg3kO_gyE',
  authDomain: 'vue-firebase-12783.firebaseapp.com',
  databaseURL: 'https://vue-firebase-12783.firebaseio.com',
  projectId: 'vue-firebase-12783',
  storageBucket: 'vue-firebase-12783.appspot.com',
  messagingSenderId: '565538891891'
};

let app = Firebase.initializeApp(config);
const db = app.database();


export default db;