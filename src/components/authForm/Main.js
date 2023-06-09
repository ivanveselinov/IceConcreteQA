import React from 'react'
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useContextProvider } from '../../context/StateProvider';
import { fire } from '../../firebase/Firebase';
import MainDashBoard from '../dashBoard/MainDashBoard';
import Hero from './Hero';
import Login from './Login';

const Main = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState('');
    const [{appUser}, dispatch] = useContextProvider()
    const navigate = useNavigate();

    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        

        fire.auth().signInWithEmailAndPassword(email, password).catch((err) => {
            switch(err.code) {
                case "auth/invalid-email":
                    case "auth/user-disabled":
                        case "aith/user-not-found":
                            setEmailError(err.message);
                              break;
                            case "auth/wrong-password":
                                setPasswordError(err.message);
                                    break;
            }
        
        
        });
    }

    const handleSignUp = () => {
        clearErrors();

        fire.auth().createUserWithEmailAndPassword(email,password).catch((err) => {
            switch (err.code) {
                case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                            break;
                        case "auth/weak password":
                            setPasswordError(err.message);
                                break;
            }
        });
    }
    
    const handleLogout = () => {
        fire.auth().signOut();
    }

    const authListener = () => {
        fire.auth().onAuthStateChanged( user => {
            if(user){
                clearInputs(); // set User(user)
            }else
                setUser("");
        })
    }

    useEffect(() => {
        const unsubscribe = fire.auth().onAuthStateChanged((user) => {
          if (user) {
            // user is logged in, navigate to '/'
            navigate('/');
          } else {
            // user is not logged in, navigate to '/admin'
            navigate('/admin');
          }
        });
        return unsubscribe;
      }, [navigate]);


  return (
    
    <div className="w-full h-screen text-center m-auto text-2xl" >
        <div className=" w-full h-[30%]"></div>
      <p className="mb-3 text-lime-400 font-bold underline text-center xs:text-xl xs:font-bold  sm:text-2xl sm:font-bold lg:text-2xl lg:font-bold lg:text-6xl">Welcome to Ice Concreting </p>
      <div className="w-full border-2 text-center m-auto mb-10 rounded-xl bg-blue-200 p-4 xs:w-full  sm:w-4/5 md:w-4/5 lg:w-1/3">

      {user ? (
          <Hero handleLogout={handleLogout}/>
      ) :  ( 
      <Login 
      email={email}
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleLogin={handleLogin}
      handleSignup={handleSignUp}
      hasAccount={hasAccount} 
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      />
      
      )}
      </div>
    </div>

    )
}

export default Main