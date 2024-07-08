import Wave from "./Components/Wave";

export default function Home() {
  return (
    <div className="z-10 w-full h-full flex items-center justify-center flex-col space-y-2 text-white">
      <div className="relative text-center">
        <Wave />
        <h1 className="text-6xl tracking-widest font-bold animate-fadeIn z-10 relative pointer-events-none">
          HUZAIFA JALIL
        </h1>
        <h3
          className="tracking-widest text-[#a3a3a3] opacity-0 animate-fadeIn z-10 relative pointer-events-none"
          style={{ animationDelay: ".1s" }}
        >
          FRONTEND DEVELOPER
        </h3>
      </div>
    </div>
  );
}
