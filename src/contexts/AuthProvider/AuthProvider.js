import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.init';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null);
  const [loading,setLoading]= useState(true);

  const providerLogin = (provider)=>{
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  const gitSignIn = (gitProvider)=>{
    setLoading(true);
    return signInWithPopup(auth,gitProvider);
  }

  const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const signIn = (email,password)=>{
   setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
  }

  const updateUserProfile = (profile)=>{
    return updateProfile(auth.currentUser,profile)
  }

  const providerLogOut =()=>{
    setLoading(true);
    return signOut(auth);
  }

  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth,(currentUser)=>{
      console.log('User State Change', currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return ()=>{
      unsubscribe();
    }
  },[])

  const authInfo ={user,providerLogin,providerLogOut,createUser,signIn,loading,updateUserProfile,gitSignIn};
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      
    </AuthContext.Provider>
  );
};
export default AuthProvider;