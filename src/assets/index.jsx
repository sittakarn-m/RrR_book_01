import logoImg from "../assets/RR_4.png";

export const Logo = () => {
  return (
    <div className=" btn btn-ghost">
      <img src={logoImg} alt="picture" className="w-[80px] " />
    </div>
  );
};

export const MenuDropdown = () => {
  return (
    <div className="flex">
      <button className="btn btn-square btn-ghost pt-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block h-5 w-5 stroke-current"
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
      <label className="input flex items-center gap-2">
        <input type="text" className="grow"  />
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
