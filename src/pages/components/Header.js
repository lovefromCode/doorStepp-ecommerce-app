import React, { useState, useEffect } from 'react';
import { auth } from '../../../firebase-setup';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useRouter } from 'next/router';
import { Dropdown, Avatar } from "flowbite-react";
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';


function Header() {
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
    <div>

      <nav class="bg-gray-50 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div class="container flex justify-between">
          <a href="https://flowbite.com/" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Deliveroo</span>
          </a>
          <div>
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
                class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full text-sm px-6 py-2 mr-2 mb-2"
              >
                Sign in
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
            <button
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
            </button>
          </div>
        </div>
      </nav>


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