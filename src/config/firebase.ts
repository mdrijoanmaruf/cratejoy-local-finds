
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdzdjMC2m-yAUvpU7JXR9077tza07uYlA",
  authDomain: "boxsupscription.firebaseapp.com",
  projectId: "boxsupscription",
  storageBucket: "boxsupscription.firebasestorage.app",
  messagingSenderId: "684629630406",
  appId: "1:684629630406:web:29ac1e207ad6ade913a6c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
