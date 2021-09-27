import { LockClosedIcon } from "@heroicons/react/solid";
import { ImBlog } from "react-icons/im";
import { useState } from "react";
import Message from "../Components/Message/Message";
import axios from "axios";
import ErrorMessages from "../Components/ErrorMessages/ErrorMessages";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, set_confirmedPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorExist, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("New ver: ", email, password, confirmedPassword);
    try {
      const res = await axios.post("auth/signup", {
        email,
        password,
        confirmedPassword,
      });
    } catch (err) {
      setError(true);
      setErrorMessage(err.response.data.message);
      console.log("Err is: ", err.response.data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <ImBlog className="mx-auto h-12 w-auto text-indigo-600" />

          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Registration
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Log in with Google
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password (At least 6 characters)"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password_confirmed"
                name="password_confirmed"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                onChange={(e) => {
                  set_confirmedPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign up
            </button>
          </div>
        </form>

        {errorExist ? (
          // <div className="bg-red-300 p-1 text-red-900">{errorMessage}</div>
          <ErrorMessages messages={errorMessage} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
