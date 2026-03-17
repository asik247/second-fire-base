import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from '../../Firebase/firebase.init';

const googleProvider = new GoogleAuthProvider();

// github Provider;
const githubProvider = new GithubAuthProvider();

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

    // github handler code here now;
    const handleGithub = () => {
        console.log("hanlde github btn clicked");
        signInWithPopup(auth, githubProvider)
            .then(res => {
                // setUsers(res.user)
                const loggedUser = res.user;
                if (!loggedUser.email) {
                    if (loggedUser.providerData) {
                        const gitProvider = loggedUser.providerData.find(p => p.providerId === 'github.com');
                        if (gitProvider && gitProvider.email) {
                            loggedUser.email = gitProvider.email
                        }
                    }
                }
                /**
                 * fist a email null so if emial na thake tile providerData ar modde jaow and onek providerData thakete pare tumi find kore 1 ta providerData paba ter por cheack korba providerId === 'github.com' hole tahole providerData.emial ta niba and set kore diba null ar jaigai;
                 */
                console.log(res.user);
                setUsers(loggedUser)
            }).catch(error => {
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
                        <>
                            {/* Google Button */}
                            <button onClick={handleGoogle} className="btn bg-white mb-4 text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>

                            {/* GitHub Button */}
                            <button onClick={handleGithub} className="w-full flex items-center justify-center gap-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24">
                                    <path fill="white" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                </svg>
                                Login with GitHub
                            </button>
                        </>
                    )
                }

            </div>
        </div>
    );
};

export default Login;