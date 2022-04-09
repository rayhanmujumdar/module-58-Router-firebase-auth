import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase.init/firebase.init";
import { useNavigate } from "react-router-dom";
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser({});
    });
  }, []);
  const handleSignOut = () => {
      signOut(auth)
      .then(() => {
        navigate('/login')
      })
  }
  return {
    user,
    error,
    signInWithGoogle,
    handleSignOut,
  };
};
export default useFirebase;
