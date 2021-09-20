import React, { useContext } from "react";
import { ImBlog, ImSearch } from "react-icons/im";
import MenuDropdown from "./MenuDropdown";
import { Link } from "react-router-dom";
import { isLoginContext } from "../../Context/LoginContext";

import testImg from "../Images/Me.jpg";
const myIcon = new Image();
myIcon.src = testImg;

export default function Topbar() {
  const avatar = (
    <img
      src={testImg}
      alt=""
      className="w-9 object-center rounded-full cursor-pointer"
    />
  );

  return (
    <div className="w-full h-12 bg-indigo-200 grid grid-cols-3 content-center fixed top-0 left-0 z-50">
      <Link to="/home">
        <div className=" text-2xl  col-span-1 pl-5 font-bold text-indigo-600 sm:text-xl">
          <div className="flex items-center w-max cursor-pointer">
            <ImBlog /> &nbsp; MyBlog
          </div>
        </div>
      </Link>

      <div className="col-span-2 grid grid-cols-2 content-center sm:flex sm:justify-end gap-2 sm:pr-3">
        <form action="" className="w-full flex items-center sm:w-max">
          <input
            type=""
            placeholder="Search tags here"
            className="p-3 rounded-md w-10/12 h-8 focus:outline-none sm:hidden"
          />
          <button className="flex items-center w-8 p-2">
            <ImSearch />
          </button>
        </form>

        <div className="flex justify-end gap-3 text-lg pr-3 sm:text-base sm:pr-1">
          <Link to="/signin">
            <div className="cursor-pointer p-1">Sign in</div>
          </Link>

          <Link to="/signup">
            <div className="cursor-pointer font-semibold text-white p-1 pl-3 pr-3  rounded-lg bg-indigo-500">
              Sign up
            </div>
          </Link>

          <isLoginContext.Consumer>
            {(value) =>
              value ? (
                <div>
                  <MenuDropdown profilePicture={avatar} />
                </div>
              ) : (
                ""
              )
            }
          </isLoginContext.Consumer>

          {/* <div>
            <MenuDropdown profilePicture={avatar} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
