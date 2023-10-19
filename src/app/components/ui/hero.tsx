export const Hero = () => {
  return (
    <div className="relative">
      <img
        src="https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg?w=826&t=st=1697700489~exp=1697701089~hmac=51302f611b57170c6a516a165105e4461186dd2c67869c91d77ab1281465338d"
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Explore the World with Traverse
              </h1>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="dc223fcc-6d72-4ebc-b4ef-abe121034d6e"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#dc223fcc-6d72-4ebc-b4ef-abe121034d6e)"
                    width="52"
                    height="24"
                  />
                </svg>
              </span>{" "}
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mt-4">
              Find the best deals on hotels and plan your dream vacation.
            </p>
           
          </div>
          <div className="flex items-center sm:justify-center">
          <div className="mt-10">
              <a
                href="/search"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full text-xl md:text-2xl"
              >
                Get Started
              </a>
            </div>
    
          </div>
        </div>
      </div>
    </div>
  );
};
