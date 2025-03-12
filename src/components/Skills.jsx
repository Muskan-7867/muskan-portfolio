const Skills = () => {
    return (
      <div name="skills" className="w-full min-h-screen bg-[#F2DE9B] text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          {/* Skills Title Section */}
          <div>
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold inline text-[#202216] border-b-4 border-[#202216] animate-slideIn">
              Skills
            </p>
            <p className="py-4 sm:py-6 text-[#6F5A4B] text-lg sm:text-xl md:text-2xl animate-slideInFromRight">
              These are the technologies I have worked with.
            </p>
          </div>
  
          {/* Skills Grid Section */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 text-center py-8">
            {[
              { src: "/images/skills/js.png", name: "JavaScript" },
              { src: "/images/skills/react.svg", name: "React.js" },
              { src: "/images/skills/node.png", name: "Node.js" },
              { src: "/images/skills/express.jpeg", name: "Express.js" },
              { src: "/images/skills/socket.png", name: "Socket.io" },
              { src: "/images/skills/native.png", name: "React Native" },
              { src: "/images/skills/ts.png", name: "TypeScript" },
              { src: "/images/skills/mongodb.png", name: "MongoDB" },
              { src: "/images/skills/sql.png", name: "SQL" },
              { src: "/images/skills/tailwind.png", name: "Tailwind CSS" },
              { src: "/images/skills/html.png", name: "HTML" },
              { src: "/images/skills/css.png", name: "CSS" },
            ].map((skill, index) => (
              <div
                key={index}
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 p-4 rounded-lg bg-white"
              >
                <img
                  className="w-16 sm:w-20 md:w-24 mx-auto mt-2"
                  src={skill.src}
                  alt={skill.name}
                />
                <p className="my-4 text-[#202216] text-sm sm:text-base md:text-lg">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;