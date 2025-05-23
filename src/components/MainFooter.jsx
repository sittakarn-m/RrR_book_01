import React from "react";

function MainFooter() {
  return (
    <footer className="sticky bottom-0 z-50 bg-gray-700 text-white py-6 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} RrR Book. Rent Read Return Book store.</p>
        <nav className="flex space-x-4 mt-4 md:mt-0">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </nav>
      </div>
    </footer>
  );
}

export default MainFooter;
