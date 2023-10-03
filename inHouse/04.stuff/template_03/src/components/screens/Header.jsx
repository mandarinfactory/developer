export default function Header() {
  return (
    <header className="text-white bg-white body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-10 text-black text-xl hover:text-teal-700 cursor-pointer  ">
            모두
          </a>
          <a className="mr-10 text-black text-xl hover:text-teal-700 cursor-pointer  ">
            음식점/카페
          </a>
          <a className="mr-10 text-black text-xl hover:text-teal-700 cursor-pointer  ">
            편의점
          </a>
          <a className="mr-10 text-black text-xl hover:text-teal-700 cursor-pointer  ">
            헬스장
          </a>
          <a className="mr-10 text-black text-xl hover:text-teal-700 cursor-pointer  ">
            미용실
          </a>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            className="w-10 h-10 fill-white p-2 bg-teal-700 rounded-full"
          >
            <path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
          </svg>
          <span className="ml-3 text-3xl">동네지도</span>
        </a>
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <input className="w-[200px] px-3 py-1 bg-slate-300 rounded-lg text-black text-lg" />
        </div>
      </div>
    </header>
  );
}
