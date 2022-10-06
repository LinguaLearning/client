import React from "react";

const Resources = () => {
  return (
    <div>
      <div className="mb-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi ad itaque
        odit consequatur optio sed illum accusamus eum reprehenderit obcaecati,
        consequuntur perspiciatis soluta ab odio!
      </div>
      <div className="flex flex-col sm:grid grid-cols-6 grid-flow-row w-full">
        <div className="flex relative justify-center cursor-pointer transition-all hover:scale-[.985] duration-300 border col-span-2 border-sky-100 bg-secondary">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1462965326201-d02e4f455804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <div className="absolute bottom-[5%] font-semibold text-lg md:text-xl lg:text-2xl text-white">
            Music
          </div>
        </div>
        <div className="flex relative justify-center cursor-pointer transition-all hover:scale-[.985] duration-300 border col-span-2 border-sky-100 bg-secondary">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1456953180671-730de08edaa7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80"
            alt=""
          />
          <div className="absolute bottom-[5%] font-semibold text-lg md:text-xl lg:text-2xl text-white">
            E-Books
          </div>
        </div>
        <div className="flex relative justify-center cursor-pointer transition-all hover:scale-[.985] duration-300 border col-span-2 border-sky-100 bg-secondary">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1568876694728-451bbf694b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
            alt=""
          />
          <div className="absolute bottom-[5%] font-semibold text-lg md:text-xl lg:text-2xl text-white">
            Movies
          </div>
        </div>
        <div className="flex relative justify-center cursor-pointer transition-all hover:scale-[.985] duration-300 border col-span-3 border-sky-100 bg-secondary">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <div className="absolute bottom-[5%] font-semibold text-lg md:text-xl lg:text-2xl text-white">
            Podcasts
          </div>
        </div>
        <div className="flex relative justify-center cursor-pointer transition-all hover:scale-[.985] duration-300 border col-span-3 border-sky-100 bg-secondary">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <div className="absolute bottom-[5%] font-semibold text-lg md:text-xl lg:text-2xl text-white">
            Other
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
