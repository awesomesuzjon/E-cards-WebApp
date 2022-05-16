import { getAuth, GoogleAuthProvider, signInWithRedirect, signOut, getRedirectResult } from 'firebase/auth';

export const signInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
   
    await signInWithRedirect(auth, provider);
};

export const getUserWithGoogle = async () => {
    const auth = getAuth(app);
    const result = await getRedirectResult(auth)
    if (result) {
        const token = await result.user.getIdToken();
        const user = authenticate(token)
        return user;
    }
    return null
}
