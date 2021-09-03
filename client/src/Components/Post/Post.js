//Testing purpose
import testImg2 from "../Images/Nature.jpg";

export default function Post() {
  return (
    <div className="rounded-md shadow-md p-3 flex items-center">
      <div className="p-2 h-full flex flex-col justify-between">
        <div className="text-indigo-500 text-xl font-bold flex text-justify sm:text-lg ">
          This is a fake title This is a fake title
        </div>
        <div className="text-indigo-500 text-opacity-70 text-justify">
          <i>Music</i>, <i>Life</i>
        </div>
        <p className="text-left h-30 overflow-hidden sm:hidden">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis
          vitae qui distinctio ex soluta? Voluptates, ea! Esse, natus. Quas
          possimus laboriosam consectetur deserunt ea sapiente. Dicta ipsam
          atque voluptatem provident!
        </p>
        <div className="flex justify-start mt-3">
          <a
            href=""
            className="py-2 px-6 text-white bg-indigo-500 inline-block rounded hover:bg-indigo-400 focus:ring focus:ring-offset-2 focus:ring-indigo-500"
          >
            Read
          </a>
        </div>
      </div>
      <img src={testImg2} className="rounded-md w-60 h-60 sm:w-36 sm:h-36" />
    </div>
  );
}
