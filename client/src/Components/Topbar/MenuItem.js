import { Menu } from "@headlessui/react";
export default function MenuItem({ icon, optionName }) {
  return (
    <Menu.Item as="li" className="p-1">
      <button className="group flex rounded-md items-center w-full px-2 py-2 text-sm hover:bg-indigo-500 group">
        <span className="text-2xl text-indigo-500 group-hover:text-gray-200">
          {icon}
        </span>{" "}
        <span className="ml-3 text-base group-hover:text-white">
          {optionName}
        </span>
      </button>
    </Menu.Item>
  );
}
