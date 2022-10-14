import React, { useState, useEffect } from 'react';
import Login from '../auth/Login';
import SignUp from '../auth/SignUp';

function Header() {
  const [showPassword, setShowPassword] = useState(false);
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
    authType: ""
  })

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
    if (authModal.authType === 'signup' && !inputs.username || inputs.username === '') {
      errors.username = 'Username cannot be empty';
    }
    return errors;
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
    console.log("handle login ....");
    const validationErrors = validate(userDetail);
    const errorPresent = Object.keys(validationErrors).length > 0;
    // console.log({ errorPresent });
    if (errorPresent) {
      setError(validationErrors);
      return false;
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
              Sign up
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