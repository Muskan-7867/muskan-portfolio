const Work = () => {
  const projects = [
    {
      id: 1,
      image: "/images/works/chat.webp",
      title: "QuickTalk",
      demoLink: "https://quicktalk-nine.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/QuickTalk",
    },
    {
      id: 2,
      image: "/images/works/schedulrr.webp",
      title: "Schedulrr",
      demoLink: "https://schdulrr.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Schdulrr.git",
    },
    {
      id: 3,
      image: "/images/works/netflix.jpg",
      title: "Netflix Clone",
      demoLink: "https://netflix-clone-xi-ruddy.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Netflix-Clone.git",
    },
    {
      id: 4,
      image: "/images/works/yt.avif",
      title: "YouTube Clone",
      demoLink: "https://my-youtube-8f5j.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/MY-youtube.git",
    },
    {
      id: 5,
      image: "/images/works/tictac.jpg",
      title: "Tic Tac Toe",
      demoLink: "https://dragable-tic-tac-toe-game.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Dragable-tic-tac-game.git",
    },
    {
      id: 6,
      image: "/images/works/weather.jpg",
      title: "Weather App",
      demoLink: "https://weather-app-ten-ecru-45.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Weather-app.git",
    },
  ];

  return (
    <div
      name="work"
      className="bg-[#F2DE9B] py-16  w-full min-h-screen text-gray-300"
    >
      <div className="flex flex-col  justify-center mx-auto p-4 w-full max-w-[1000px] h-full">
        {/* Work Title Section */}
        <div className="pb-8 animate-slideIn">
          <p className="inline text-[#202216] border-[#202216] border-b-4 font-bold text-3xl sm:text-4xl">
            Work
          </p>
          <p className="py-4 sm:py-6 text-[#6F5A4B]">
            Check out some of my recent work
          </p>
        </div>

        {/* Grid Container for Projects */}
        <div className="gap-4 sm:gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ id, image, title, demoLink, codeLink }) => (
            <div
              key={id}
              className="relative flex justify-center items-center shadow-[#040c16] shadow-md mx-auto rounded-md overflow-hidden container group"
            >
              <img
                src={image}
                alt={title}
                className="group-hover:opacity-20 w-full h-full transition-opacity duration-300 ease-in-out object-cover"
              />
              {/* Overlay with Buttons */}
              <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <span className="font-bold text-lg text-[#202216] tracking-wider">
                  {title}
                </span>
                <div className="pt-4">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white m-2 px-4 py-2 rounded-lg font-bold text-center text-gray-700 text-sm sm:text-lg">
                      Demo
                    </button>
                  </a>
                  <a href={codeLink} target="_blank" rel="noopener noreferrer">
                    <button className="bg-white m-2 px-4 py-2 rounded-lg font-bold text-center text-gray-700 text-sm sm:text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;