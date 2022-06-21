<script lang="ts">
	import firebase from 'firebase/compat/app';
	import 'firebase/compat/auth';
	// import {auth,googleProvider} from "./firebase"
	import { authState } from 'rxfire/auth';
	// import authStore from '../stores/authStore';

	// import firebase from "firebase/app"
	import { getAuth, getIdToken } from 'firebase/auth';
	import 'firebase/firestore';
	import { getFirestore } from 'firebase/firestore';
	import Button from '$lib/reusable/button.svelte';

	const firebaseConfig = {
		apiKey: 'AIzaSyDlU6xFnGxWJICj7pvyrfju-5y4rSSBZiU',
		authDomain: 'ecards-6bb1e.firebaseapp.com',
		projectId: 'ecards-6bb1e',
		storageBucket: 'ecards-6bb1e.appspot.com',
		messagingSenderId: '658024761124',
		appId: '1:658024761124:web:e926eaa7fb3811383395b1',
		measurementId: 'G-09NY2M1FT6'
	};

	firebase.initializeApp(firebaseConfig);

	const auth = firebase.auth();
	const googleProvider = new firebase.auth.GoogleAuthProvider();
	//  const db = firebase.firestore();
	const db = getFirestore();

	let user;
	let expired;

	const unsubscribe = authState(auth).subscribe((usr) => (user = usr));

	async function login() {
		let userCredential = await auth.signInWithPopup(googleProvider);
		let token = await userCredential.user.getIdToken(true);
		let user = getAuth().currentUser;
		let { isExpired, refreshToken, accessToken, refresh, getToken, expirationTime } =
			user.stsTokenManager;
		expired = isExpired;

		// console.log(isExpired, refreshToken, accessToken, refresh, getToken, expirationTime);
		if (isExpired) token = getIdToken(userCredential.user, true);
	}

	function logout() {
		auth.signOut();
	}
	console.log(expired);
</script>

<div>
	<h1 class="mt-5 text-lg dark:text-white">Login With Google</h1>
</div>

{#if user}
	{{ expired }}
	<!-- Successfully Logged in as {user.uid} -->
	<a on:click={logout}><Button>logOut</Button></a>
{:else}
	<a on:click={login}><Button>logIn</Button></a>
{/if}
