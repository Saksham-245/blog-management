import { signup, useAuthDispatch } from '@blog-management/shared-logic';
import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';

const SignUp = () => {
  const dispatch = useAuthDispatch();

  const [message, setMessage] = useState('');

  const onSubmit = async ({firstName,lastName,email,password}) => {
    let payload = {firstName,lastName,email,password};

    try {
      let response = await signup(dispatch, payload);
      setMessage(response?.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://source.unsplash.com/random"
            alt="random"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white w-full md:w-1/2 xl:w-1/3 p-6 sm:p-12">
          <h1 className="text-2xl font-bold text-center">SignUp</h1>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, values }) => (
              <form className="mt-6" onSubmit={handleSubmit}>
                <Field name="firstName">
                  {({ input, meta }) => (
                    <div>
                      <label className="block text-gray-700">First Name</label>
                      <input
                        {...input}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        placeholder="Enter First Name"
                      />
                    </div>
                  )}
                </Field>
                <Field name="lastName">
                  {({ input, meta }) => (
                    <div>
                      <label className="block text-gray-700">Last Name</label>
                      <input
                        {...input}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        placeholder="Enter Last Name"
                      />
                    </div>
                  )}
                </Field>
                <Field name="email">
                  {({ input, meta }) => (
                    <div>
                      <label className="block text-gray-700">
                        Email Address
                      </label>
                      <input
                        {...input}
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        placeholder="Enter Email"
                      />
                    </div>
                  )}
                </Field>
                <Field name="password">
                  {({ input, meta }) => (
                    <div className="mt-4">
                      <label className="block text-gray-700">Password</label>
                      <input
                        {...input}
                        type="password"
                        className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                        placeholder="Enter Password"
                      />
                    </div>
                  )}
                </Field>
                <button
                  type="submit"
                  className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                >
                  Sign Up
                </button>
              </form>
            )}
          />
          {
            <div className="text-blue-500 text-center mt-4">
              {message ? message : ''}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default SignUp;
