import Image from "next/image";
import Hero from "@/components/hero.tsx";

export default function Home() {
  return (
    <section className="bg-white max-w-screen-xl py-10">
      <div className="max-w-screen-xl py-8 px-4 text-center">
        <h1 className="text-4xl font-extrabold mb-8">
          Sign in with credibility.
        </h1>
        <p className="text-lg font-normal mb-8">
          Never worry about lost passwords anymore.
        </p>
      </div>
    </section>
  );
}
