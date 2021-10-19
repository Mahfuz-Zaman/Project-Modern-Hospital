import firebaseInitialization from "../firebase/firebase.init";
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInitialization();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
    //google SignIn
    function signInWithGoogle() {
        return signInWithPopup(auth, googleProvider)

    }
    //github SignIn
    function signInWithGithub() {
        return signInWithPopup(auth, githubProvider)

    }
    // Email sign in
    function signInWithEmail() {

        return signInWithEmailAndPassword(auth, email, password);
    }
    // set name and profile image url
    function setNameAndImage() {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
            .then(() => { })
            .catch((error) => {
                setError(error.message);
            });
    }


    //Get the currently signedIn user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            }
        });
        return () => unsubscribe;

    }, [])

    //Sign Out
    function logOut() {
        signOut(auth)
            .then((() => {
                setUser({})
            })).catch((error => {
                setError(error.message)
            }))
    }

    // sign up with email password
    function singUp(e) {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setNameAndImage();
                alert("user has been created");
            })
            .catch((err) => {
                setError(err.message);
            });
    }
    // get name
    function getName(e) {
        setName(e?.target?.value);
    }

    // get Email
    function getEmail(e) {
        setEmail(e?.target?.value);
    }
    // Get password
    function getPassword(e) {
        setPassword(e?.target?.value);
    }
    // Get photoUrl
    function getPhoto(e) {
        setPhoto(e?.target?.value);
    }

    return {
        signInWithEmail,
        getPassword,
        getEmail,
        singUp,
        getName,
        getPhoto,
        signInWithGoogle,
        signInWithGithub,
        user,
        setUser,
        setError,
        error,
        logOut
    };
};

export default useFirebase;