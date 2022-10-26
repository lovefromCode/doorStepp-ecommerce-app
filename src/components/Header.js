import React, { useState, useEffect, useContext } from 'react';
import { auth } from '../../firebase-setup';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { Dropdown, Avatar } from "flowbite-react";
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { GlobalContextObj } from "../pages/context/globalContext";

function Header() {
  const { cartItems, globalChangeState } = useContext(GlobalContextObj);
  const [showPassword, setShowPassword] = useState(false);
  const [isloggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState({
    email: '',
    password: '',
    username: ''
  });
  const [userDetail, setUserDetail] = useState({
    email: '',
    password: '',
    username: '',
  });
  const [authModal, setAuthModal] = useState({
    show: false,
    authType: "",
    spin: false,
  })
  const [userCredentials, setUserCredentials] = useState({
    email: ""
  })

  const router = useRouter()

  //* validate the input fields
  const validate = inputs => {
    const errors = {};
    if (!inputs.email || inputs.email === '') {
      errors.email = 'Email cannot be empty';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)) {
      errors.email = 'Invalid email address';
    }
    if (!inputs.password || inputs.password === '') {
      errors.password = 'Password cannot be empty';
    }
    if (authModal.authType === 'signup') {
      if (!inputs.username || inputs.username === '') {
        errors.username = 'Username cannot be empty';
      }
    }
    return errors
  };

  //* show password feature
  useEffect(() => {
    if (document.getElementById('password')) {
      if (showPassword) {
        document.getElementById('password').type = 'text';
      } else {
        document.getElementById('password').type = 'password';
      }
    }
  }, [showPassword]);

  //* handle login functionality
  const handleAuth = () => {
    const validationErrors = validate(userDetail);
    const errorPresent = Object.keys(validationErrors).length > 0;
    if (errorPresent) {
      setError(validationErrors);
      return false;
    }
    console.log(authModal.authType);
    if (authModal.authType === 'login') {
      setAuthModal(prevState => {
        return {
          ...prevState,
          spin: true
        }
      })
      signInWithEmailAndPassword(auth, userDetail.email, userDetail.password)
        .then((res) => {
          setUserCredentials(prevState => {
            return {
              ...prevState,
              email: res.user.email,
            }
          })
          setAuthModal(prevState => {
            return {
              ...prevState,
              show: false,
              authType: "",
              spin: false,
            }
          })
          setUserDetail(prevState => {
            return {
              ...prevState,
              email: '',
              password: '',
              username: '',
            }
          })
          setError(prevState => {
            return {
              ...prevState,
              email: '',
              password: '',
              username: '',
            }
          })
          setShowPassword(false)
          setLoggedIn(true)
          router.push("/food-dashboard")
        })
        .catch((error) => {
          setAuthModal(prevState => {
            return {
              ...prevState,
              spin: false
            }
          })
          console.log({ error });
        });
    }
    else if (authModal.authType === 'signup') {
      createUserWithEmailAndPassword(auth, userDetail.email, userDetail.password)
        .then((res) => {
          // console.log("signup", { res });
        })
        .catch((error) => {
          console.log({ error });
        });
    }
  }

  return (
    <div className='bg-gray-900 flex justify-between'>
      <div className='flex items-center text-3xl text-white mx-10 cursor-pointer' onClick={() => router.push("/")}>
        DoorStepp
      </div>
      <div className='w-[10rem] flex justify-between items-center mx-10'>

        {!isloggedIn ?
          <button
            type="button"
            onClick={() => {
              setAuthModal(prevState => {
                return {
                  ...prevState,
                  showModal: true,
                  authType: "login"
                }
              })
            }}
            class="text-white bg-emerald-800 hover:bg-emerald-900 rounded-full text-sm px-6 py-2"
          >
            Login
          </button>
          :
          <Dropdown
            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
            arrowIcon={false}
            inline={true}
          >
            <Dropdown.Header>
              <span className="block truncate text-sm font-medium">
                {userCredentials.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item>
              <button
                onClick={() => {
                  signOut(auth).then(() => {
                    // console.log("sign out successful");
                    setLoggedIn(false)
                    router.push("/")
                  }).catch((error) => {
                    console.log({ error });
                  });
                }}> Sign out </button>
            </Dropdown.Item>
          </Dropdown>}

        <div className='relative cursor-pointer' onClick={() => router.push("/checkout")}>
          <ShoppingCartIcon className='h-14 w-14 text-white' />
          <div className='absolute top-[3px] right-[-3px] flex justify-center items-center text-sm bg-yellow-400 font-bold h-6 w-6 rounded-full'>{cartItems.length}</div>
        </div>
      </div>


      {
        authModal.showModal === true
        && authModal.authType === 'login'
        && <Login
          {...{
            userDetail,
            setUserDetail,
            authModal,
            setAuthModal,
            showPassword,
            setShowPassword,
            error,
            setError,
            handleAuth,
          }}
        />
      }

      {
        authModal.showModal === true
        && authModal.authType === 'signup'
        && <SignUp
          {...{
            userDetail,
            setUserDetail,
            authModal,
            setAuthModal,
            showPassword,
            setShowPassword,
            error,
            setError,
            handleAuth,
          }}
        />
      }

    </div>
  )
}

export default Header


{/* <button
              type="button"
              onClick={() => {
                setAuthModal(prevState => {
                  return {
                    ...prevState,
                    showModal: true,
                    authType: "signup"
                  }
                })
              }}
              class="text-blue-700 hover:text-blue-800 font-medium text-sm px-5 py-2 mr-2 mb-2"
            >
              {!isloggedIn ? 'Sign up' : null}
            </button> */}