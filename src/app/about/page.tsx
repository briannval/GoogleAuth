"use client";
import Image from "next/image";
import googleImage from "./google.png";

const Home = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="max-w-screen-2xl flex">
          <div className="bg-gray-100 w-1/2 px-5">
            <div className="py-20">
              <h1 className="text-2xl font-bold py-5">About us</h1>
              <p className="text-lg font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Curabitur pretium tincidunt lacus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              </p>
            </div>
          </div>
          <div className="bg-gray-100 w-1/2 flex justify-center items-center">
            <Image
              src={googleImage}
              width={350}
              height={350}
              alt="Google AUTH"
            />
          </div>
        </div>
        <div className="flex justify-center items-center pb-20">
          <button className="animate-bounce bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
