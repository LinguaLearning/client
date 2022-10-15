import React from "react";

const Audio = () => {
  return (
    <article className="group relative flex h-[12rem] w-[50rem] overflow-hidden rounded-2xl bg-[#3a4448]">
      <aside className="absolute right-0 flex h-full flex-col justify-center space-y-8 p-3">
        <svg
          className="invisible h-7 w-7 text-stone-200 opacity-0 transition-all duration-200 hover:scale-[120%] hover:text-white group-hover:visible group-hover:opacity-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          ></path>
        </svg>

        <svg
          className="invisible h-7 w-7 text-stone-200 opacity-0 transition-all duration-200 hover:scale-[120%] hover:text-white group-hover:visible group-hover:opacity-100"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          ></path>
        </svg>
      </aside>

      <div className="absolute inset-y-0 left-0 w-48">
        <img
          src="https://images.unsplash.com/photo-1557457898-61da8848d599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80"
          alt=""
          className="h-full w-full object-cover object-center opacity-95"
        />

        <div className="invisible absolute inset-0 flex h-full w-full items-center justify-center bg-[#0c0c0c]/70 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
          <svg
            className="h-w-14 w-14 cursor-pointer text-white transition-all duration-200 hover:text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>

      <div className="absolute inset-y-0 left-44 w-[39rem] overflow-hidden rounded-2xl transition-all duration-200 group-hover:w-[36rem]">
        <div
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1557457898-61da8848d599?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80')",
          }}
          className="h-full w-full bg-cover bg-center"
        >
          <div className="h-full w-full bg-[#455055]/80 transition-all duration-200 group-hover:bg-[#31383b]/80"></div>
        </div>

        <section className="absolute inset-0 flex flex-col justify-between p-4 text-white">
          <header className="space-y-1">
            <div className="text-3xl font-medium">Bonjour</div>
          </header>

          <div className="invisible flex space-x-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100"></div>

          <div className="flex space-x-2">
            <span className="rounded-full bg-[#86ff5f] px-2 font-medium text-stone-900">
              New Word
            </span>
            <div className="flex items-center space-x-1">
              <span className="h-5 w-2 rounded-full bg-blue-500"></span>
              <span className="h-5 w-2 rounded-full bg-white"></span>
              <span className="h-5 w-2 rounded-full bg-red-500"></span>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
};

export default Audio;
