import React, { useState } from 'react';
import { Modal, TextInput, Label, Checkbox, Button, Spinner } from "flowbite-react";

function Login({
    userDetail,
    setUserDetail,
    authModal,
    setAuthModal,
    showPassword,
    setShowPassword,
    error,
    setError,
    handleAuth,
}) {
    return (
        <>
            <Modal
                show={true}
                size="md"
                popup={true}
                onClose={() => {
                    setAuthModal(prevState => {
                        return {
                            ...prevState,
                            showModal: false,
                            authType: ""
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
                }}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-4 px-6">
                        <h3 className="text-xl font-medium text-gray-900">
                            Login to Deliveroo
                        </h3>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email"
                                value={userDetail.email}
                                placeholder="Email"
                                required={true}
                                onChange={(e) => {
                                    setUserDetail(prevState => {
                                        return {
                                            ...prevState,
                                            email: e.target.value
                                        }
                                    })
                                }}
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        handleAuth();
                                    }
                                }}
                            />
                            {<p className='text-red-600 text-xs'>{error.email !== '' ? error.email : ''}</p>}
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password"
                                    value="Your password"
                                />
                            </div>
                            <TextInput
                                id="password"
                                type="password"
                                placeholder='Password'
                                value={userDetail.password}
                                required={true}
                                onChange={(e) => {
                                    setUserDetail(prevState => {
                                        return {
                                            ...prevState,
                                            password: e.target.value
                                        }
                                    })
                                }}
                                onKeyPress={e => {
                                    if (e.key === 'Enter') {
                                        handleAuth();
                                    }
                                }}
                            />
                            {<p className='text-red-600 text-xs'>{error.password !== '' ? error.password : ''}</p>}
                        </div>
                        <div className="flex justify-between">
                            <div className="flex items-center gap-2">
                                <Checkbox id="remember"
                                    checked={showPassword}
                                    onChange={e => {
                                        setShowPassword(checked => !checked);
                                    }} />
                                <Label htmlFor="remember">
                                    show password
                                </Label>
                            </div>
                        </div>
                        <div className="w-full">
                            <Button onClick={handleAuth}>
                                <span className='px-2'> Click here to Login </span>
                                { authModal.spin ? <Spinner /> : null }
                            </Button>
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                            Not registered?{' '}
                            <span
                                className="text-blue-700 hover:underline cursor-pointer"
                                onClick={() => {
                                    setAuthModal(prevState => {
                                        return {
                                            ...prevState,
                                            showModal: true,
                                            authType: "signup"
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
                                }}
                            >
                                Create account
                            </span>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login