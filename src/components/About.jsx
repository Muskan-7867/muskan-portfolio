const About = () => {
  return (
    <div name="about" className="bg-[#F2DE9B] w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full px-4">
        {/* About Title Section */}
        <div className="w-full max-w-[1000px]">
          <div className="sm:text-right pb-8">
            <p className="inline border-[#202216] text-[#202216] border-b-4 font-bold text-3xl sm:text-4xl">
              About
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full max-w-[1000px]">
          <div className="grid sm:grid-cols-2 gap-8">
            {/* Left Column (Greeting) */}
            <div className="sm:text-right font-bold text-2xl sm:text-4xl  text-[#6F5A4B]">
              <p>
                Hi, I am Muskan. Nice to meet you. Please take a look around.
              </p>
            </div>

            {/* Right Column (Description) */}
            <div>
              <p className="text-[#202216] text-sm sm:text-base">
                I am a Full-Stack Developer with a strong focus on frontend
                development and a growing expertise in backend technologies. I
                specialize in React, React Native, TypeScript, JavaScript, HTML,
                and CSS, crafting dynamic and user-friendly web applications. My
                experience includes state management, performance optimization,
                API integration, and real-time applications. On the backend, I
                have worked with Node.js, Express.js, MongoDB, PostgreSQL,
                Firebase, and MySQL, with a foundational understanding of
                authentication (JWT, OAuth), WebSockets, and REST APIs. While my
                expertise lies in frontend development, I am constantly improving
                my backend skills to build scalable and efficient applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;