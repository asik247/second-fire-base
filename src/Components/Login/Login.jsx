import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

const Login = () => {
    const [users, setUsers] = useState(null);

    const handleGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => {
                setUsers(res.user)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUsers(null)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center px-4">

            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">

                <h1 className="text-3xl font-bold text-green-600 mb-6">
                    Login Page
                </h1>

                {/* User Info */}
                {
                    users && (
                        <div className="border rounded-xl p-4 mb-6 bg-gray-50">
                            <img
                                src={users.photoURL}
                                alt="user"
                                className="w-20 h-20 rounded-full mx-auto mb-3 border"
                            />
                            <h2 className="text-xl font-semibold">
                                {users.displayName}
                            </h2>
                            <p className="text-gray-600 text-sm">
                                {users.email}
                            </p>
                        </div>
                    )
                }

                {/* Button */}
                {
                    users ? (
                        <button
                            onClick={handleSignOut}
                            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition duration-300"
                        >
                            Sign Out
                        </button>
                    ) : (
                        <button
                            onClick={handleGoogle}
                            className="w-full flex items-center justify-center  border py-2 rounded-lg hover:bg-gray-100 transition duration-300"
                        >
                            <svg width="30" height="20" viewBox="0 0 48 48">
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.2 3.6l6.85-6.85C35.9 2.33 30.4 0 24 0 14.6 0 6.48 5.8 2.56 14.2l7.98 6.2C12.2 13.2 17.6 9.5 24 9.5z" />
                                <path fill="#4285F4" d="M46.1 24.5c0-1.6-.14-3.1-.4-4.5H24v9h12.4c-.54 2.9-2.2 5.4-4.7 7l7.3 5.7c4.3-4 6.8-9.9 6.8-17.2z" />
                                <path fill="#FBBC05" d="M10.5 28.4a14.5 14.5 0 010-8.8l-7.98-6.2A24 24 0 000 24c0 3.9.94 7.6 2.52 10.6l7.98-6.2z" />
                                <path fill="#34A853" d="M24 48c6.4 0 11.8-2.1 15.7-5.7l-7.3-5.7c-2 1.4-4.6 2.2-8.4 2.2-6.4 0-11.8-3.7-13.7-8.9l-7.98 6.2C6.48 42.2 14.6 48 24 48z" />
                            </svg>
                            <span className="font-medium">
                                Sign up with Google
                            </span>
                        </button>
                    )
                }

            </div>
        </div>
    );
};

export default Login;