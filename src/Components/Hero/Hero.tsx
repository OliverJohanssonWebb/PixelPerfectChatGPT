
const Hero = () => {
  return (
    <header className="h-16 bg-black text-white flex items-center justify-between px-6 border-b border-[#222]">
      <div className="flex items-center gap-3 cursor-pointer">{/* Left */}
        <span className="text-[18px] font-medium">
          ChatGPT
        </span>
      </div>

      <div className="flex items-center gap-3">{/* Right */}
        <button className="px-4 py-2 text-sm rounded-full hover:bg-[#1a1a1a] transition">
          Logga in
        </button>
        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
          Registrera dig
        </button>
      </div>
    </header>
  );
};

export default Hero