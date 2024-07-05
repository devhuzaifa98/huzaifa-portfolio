import Image from "next/image";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="relative text-6xl tracking-widest font-bold animate-fadeIn">
        HUZAIFA JALIL
        <Image
          className="absolute right-0 bottom-0 translate translate-x-[36%] translate-y-[40%] -z-10"
          src={"/waves.svg"}
          width={400}
          height={400}
          alt="waves"
        />
      </h1>
      <h3
        className="tracking-widest text-[#a3a3a3] opacity-0 animate-fadeIn"
        style={{ animationDelay: ".1s" }}
      >
        FRONTEND DEVELOPER
      </h3>
    </div>
  );
}
