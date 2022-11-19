import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDljiyBV4YoVjnVe8HTqUj7730_jUETXjs",
	authDomain: "gyc-convention.firebaseapp.com",
	projectId: "gyc-convention",
	storageBucket: "gyc-convention.appspot.com",
	messagingSenderId: "86860290435",
	appId: "1:86860290435:web:e5f2bfaf92aa031a14beb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
// export const db = getFirestore(app);
// export const auth = getAuth();
// export const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
