import React from 'react'
import Button from '@mui/material/Button';

//mui
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import HttpsIcon from '@mui/icons-material/Https';

const ariaLabel = { 'aria-label': 'description' };

const Login = (props) => {

    const {
      email, 
       setEmail,
        password, 
         setPassword,
          handleLogin,
            handleSignup,
             hasAccount, 
              setHasAccount, 
               emailError, 
                passwordError
            } = props;
    
      const icons = "mb-2"

    return (

        <selection>
          
        <div className="flex mt-10 ml-20">

          <p className='p-3 '><AccountCircleIcon className={icons} sx={{ fontSize: 30 }}/>User name:
          </p>

          <Input 
            className="h-10 mt-3 text-xl"
            placeholder="Noname@gmail.com"
            type="text" 
            autoFocus 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            inputProps={ariaLabel} 

            />
           
        </div>

        <p className="bg-red-500 mt-2 ml-20 ">{emailError}</p>


          <div className="flex mt-10 ml-20 m-auto">
            <label className="text-2xl p-2 ml-2 mr-3 "><HttpsIcon className={icons} sx={{ fontSize: 30 }}/>Password: </label>
           
            <Input
            className="h-10 mt-2 text-xl"
            placeholder="Password"
            type="password" 
            required 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            inputProps={ariaLabel} 
            />  
          </div>
          
          <p className="bg-red ml-20 mt-2 bg-red-500">{passwordError}</p>

          <div  className="text-center w-full mt-1 ">
               {hasAccount ? (    // on click switch on sign in and sign up
                   <> 
                   <Button variant="outlined" onClick={handleSignup}>Sign Up</Button>
                   <p className="p-2">Have an account ?<Button onClick={() => setHasAccount(!hasAccount)} variant="outlined"> Sign in </Button></p> 
                   </>
                 ) : ( 
                   <>
                 <Button variant="outlined" onClick={handleLogin}>Sign In</Button>
                 {/* Sign up removed */}
                 {/* <p>Don't have an account ? <Button variant="outlined" onClick={() => setHasAccount(!hasAccount)}>Sign Up</Button></p> */}
                  </>
               )}
            </div>

        </selection>   
    )
}

export default Login
