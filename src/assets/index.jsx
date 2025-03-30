import logoImg from "../assets/RR_4.png";
import coverBook from "../assets/coverBooks02.webp";

export const Logo = () => {
  return (
    <div className=" btn btn-ghost w-[150px] ">
      <img src={logoImg} alt="picture" className="h-[120px] absolute p-5" />
    </div>
  );
};

export const HeroPic = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-20">
      <img src={coverBook} alt="hero" className="w-full h-full object-cover" />
    </div>
  );
};


export const MenuDropdown = () => {
  return (
    <div className="flex">
      <button className="btn btn-square btn-ghost pt-1 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current ab"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export const SearchIcon = () => {
  return (
    <div className="flex">
      <label className="input flex items-center gap-2 bg-white">
        <input type="text" className="grow" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
    </div>
  );
};
