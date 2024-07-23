const Background = () => {
  return (
    <div className="flex flex-row w-full h-full absolute z-0 pointer-events-none">
      <span
        className="min-h-screen w-[25%] w-0 border-r border-[#222222] animate-clip slower pointer-events-none"
        style={{ animationDuration: ".5s" }}
      >
      </span>
      <span
        className="relative min-h-screen w-[25%] bottom-0 right-0 w-0 border-r border-[#222222] animate-clip slower pointer-events-none"
        style={{ animationDuration: "1s" }}
      >
      </span>
      <span
        className="relative min-h-screen w-[25%] bottom-0 right-0 w-0 border-r border-[#222222] animate-clip slower"
        style={{ animationDuration: "1.5s" }}
      >
      </span>
    </div>
  );
};
export default Background;
