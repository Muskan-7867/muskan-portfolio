import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#F2DE9B]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#202216] animate-slideIn text-lg sm:text-xl">Hi, my Name is</p>
        
        <h1 className="text-4xl sm:text-7xl font-bold text-[#6F5A4B] animate-slideInFromRight">
          Muskan
        </h1>
        
        <h2 className="text-4xl sm:text-7xl font-bold text-[#202216] animate-slideIn">
          I am a Web Developer
        </h2>
        
        <p className="text-[#6F5A4B] py-4 max-w-[700px] animate-slideInFromRight text-sm sm:text-base">
          I am a Full-Stack Developer with a strong focus on frontend development...
        </p>
        
        <div>
          <button
            className="text-[#6F5A4B] group border-2 border-[#202216] px-6 py-3 my-2 flex items-center hover:bg-[#202216] hover:text-white text-sm sm:text-base"
            type="submit"
          >
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <FaArrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;