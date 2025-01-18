import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import Auth from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [loading,setLoading] = useState(true)
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(Auth, email, password);
  };
  const logOut = () => {
    setLoading(true)
    return signOut(Auth);
    
  };
  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(Auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(Auth, (currentUser) => {
      console.log('🚀 ~ useEffect ~ currentUser:', currentUser);
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    logOut,
    signIn,
    loading
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
