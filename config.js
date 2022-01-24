import firebase from 'firebase';
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBlWeWh0faFBBFualWPcQACgfhkdXj4EsE",
  authDomain: "my-family-health.firebaseapp.com",
  databaseURL: "https://my-family-health-default-rtdb.firebaseio.com",
  projectId: "my-family-health",
  storageBucket: "my-family-health.appspot.com",
  messagingSenderId: "1014022179169",
  appId: "1:1014022179169:web:78388c63890bb2c4c61d20"
};
  
  if (firebase.apps.length === 0){
firebase.initializeApp(firebaseConfig);
  }
  
  export default firebase.firestore();