"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { status } = useSession();
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl py-20 px-4 text-center mx-auto ">
        <h1 className="text-4xl font-extrabold mb-8">
          Sign in with credibility.
        </h1>
        <p className="text-lg font-normal mb-8">
          Never worry about lost passwords anymore.
        </p>
        {status === "unauthenticated" ? (
          <>
            <div className="px-10 mx-auto text-center flex justify-center items-center space-x-10">
              <button
                onClick={() => signIn("google")}
                type="button"
                className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-30 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
                </svg>
                Sign in with Google
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="px-10 mx-auto text-center flex justify-center items-center space-x-10">
              <h1>You are now signed in</h1>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
