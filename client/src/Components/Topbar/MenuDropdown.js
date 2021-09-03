import { Menu, Transition } from "@headlessui/react";
import MenuItem from "./MenuItem";
import { Fragment } from "react";

import {
  IoPencilOutline,
  IoLogOutOutline,
  IoLibraryOutline,
  IoPersonCircleOutline,
} from "react-icons/io5";

export default function MenuDropdown({ profilePicture }) {
  return (
    <Menu as="div">
      <Menu.Button as="div">{profilePicture}</Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          as="ul"
          className="fixed right-4 top-14 w-64 mt-2 origin-top-right bg-white divide-y
          divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <MenuItem icon={<IoPersonCircleOutline />} optionName="Profile" />
          <MenuItem icon={<IoPencilOutline />} optionName="Write" />
          <MenuItem icon={<IoLibraryOutline />} optionName="Your stories" />
          <MenuItem icon={<IoLogOutOutline />} optionName="Sign out" />
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
