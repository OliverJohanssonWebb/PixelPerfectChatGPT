
const Hero = () => {
  return (
    <>
      <div className="w-3/4 h-20 flex items-center justify-between bg-amber-700"> {/*MainContainer*/}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
          ChatGPT
        </button>

        <div className="flex gap-4">
          <button className="bg-white text-black px-4 py-2 rounded-full">
            Logga in
          </button>
          
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
            Registrera dig gratis!
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero