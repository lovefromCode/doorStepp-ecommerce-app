import React, { useState, useEffect } from 'react';
import { Modal, TextInput, Label, Checkbox, Button } from "flowbite-react";

function Header() {
  const [showModal, setShowModal] = useState(false);
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
              onClick={() => setShowModal(true)}
              class="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full text-sm px-6 py-2 mr-2 mb-2">Sign in</button>
            <button type="button" class="text-blue-700 hover:text-blue-800 font-medium text-sm px-5 py-2 mr-2 mb-2">Sign up</button>
          </div>
        </div>
      </nav>


      {showModal ? (
      <Modal
      show={true}
      size="md"
      popup={true}
      onClose={() => setShowModal(false)}
    >
      <Modal.Header />
      <Modal.Body>
        <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            Sign in to our platform
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
              placeholder="name@company.com"
              required={true}
            />
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
              required={true}
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">
                Remember me
              </Label>
            </div>
            <a
              href="/modal"
              className="text-sm text-blue-700 hover:underline dark:text-blue-500"
            >
              Lost Password?
            </a>
          </div>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered?{' '}
            <a
              href="/modal"
              className="text-blue-700 hover:underline dark:text-blue-500"
            >
              Create account
            </a>
          </div>
        </div>
      </Modal.Body>
    </Modal>
      ) : null}
    </div>
  )
}

export default Header