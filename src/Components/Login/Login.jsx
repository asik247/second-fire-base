import React, { useState } from 'react';
// Google Provider code here now;
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';
const googleProvider = new GoogleAuthProvider();


const Login = () => {
    const [users, setUsers] = useState(null);
    // handle sing up with google code here now;
    const handleGoogle = () => {
        console.log("handle google btn clicked");
        signInWithPopup(auth, googleProvider)
            .then(res => {
                console.log(res.user);
                setUsers(res.user)
            }).catch(error => {
                console.log(error);
            })
    }

    // sing out code here now;
    const handleSignOut = ()=>{
        console.log("handle singout btn clicked");
        signOut(auth)
        .then(()=>{
            console.log("sing out done");
            setUsers(null)
        }).catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            <h1 className='text-2xl font-bold text-green-600 text-center mb-10'>Login Page</h1>
            <button onClick={handleGoogle} className="btn bg-white text-black border-[#e5e5e5] mb-4">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Sign up with Google
            </button>
            <br />
            <button onClick={handleSignOut} className="btn btn-active btn-warning">Sign Out</button>
            {users &&
                <div className='border-2 border-gray-400 p-4 mt-10'>
                    <h1 className='font-bold text-2xl'>Name: {users.displayName}</h1>
                    <p>E-mail: {users.email}</p>
                    <img src={users.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;