import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"
import toast from "react-hot-toast";
import { userHandle } from "utils";

const firebaseConfig = {
	apiKey: "AIzaSyBtILosp-Fpsss4QSW00ccKOlWRtxcTInY",
	authDomain: "instagram-clone-8d876.firebaseapp.com",
	projectId: "instagram-clone-8d876",
	storageBucket: "instagram-clone-8d876.appspot.com",
	messagingSenderId: "87290869313",
	appId: "1:87290869313:web:05b6a3282ca5b4718db8c0"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)

onAuthStateChanged(auth,async user => {
	if (user) {
		const dbUser = await getDoc(doc(db, "users", user.uid))
		let data = {
			uid: user.uid,
			fullName: user.displayName,
			email: user.email,
			emailVerified: user.emailVerified,
			...dbUser.data()
		}
		userHandle(data)
	} else {
		userHandle(false)
	}

})

export const login = async (email, password) => {
	try {
		const response = await signInWithEmailAndPassword(auth, email, password)
		return response
	} catch (err) {
		toast.error(err.code)
	}
}

export const getUserInfo = async uname => {
	const username = await getDoc(doc(db, "usernames", uname))
	if (username.exists()) {
		return (await getDoc(doc(db, "users", username.data().user_id))).data()
	} else {
		toast.error("Kullanıcı bulunamadı!")
		throw new Error("Kullanıcı bulunamadı!")
	}
}

export const register = async ({ email, password, full_name, username }) => {
	try {
		const user = await getDoc(doc(db, "usernames", username))
		if (user.exists()) {
			toast.error(`${username} kullanıcı adı başkası tarafından kullanılıyor.`)
		} else {
			const response = await createUserWithEmailAndPassword(auth, email, password)

			if (response.user) {
				await setDoc(doc(db, "usernames", username), {
					user_id: response.user.uid
				})

				await setDoc(doc(db, "users", response.user.uid), {
					full_name: full_name,
					username: username,
					followers: [],
					following: [],
					notification: [],
					website: '',
					bio: '',
					phoneNumber: '',
					gender: '',
					posts: 0
				})
				await updateProfile(auth.currentUser, {
					displayName: full_name
				})
				return true
			}
		}



	} catch (err) {
		toast.error(err.code)
	}
}

export const logout = async () => {
	try {
		await signOut(auth)
	} catch (err) {
		toast.error(err.code)
	}
}