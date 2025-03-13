import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Work = () => {
  const projects = [
    {
      id: 1,
      image: "/images/works/chat.webp",
      title: "QuickTalk",
      demoLink: "https://quicktalk-nine.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/QuickTalk",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
      description:
        "A real-time chat application that allows users to communicate instantly with others. Features include user authentication, chat rooms, and message history.",
    },
    {
      id: 2,
      image: "/images/works/schedulrr.webp",
      title: "Schedulrr",
      demoLink: "https://schdulrr.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Schdulrr.git",
      techStack: ["React", "Firebase", "Material-UI"],
      description:
        "A scheduling tool that helps users manage their tasks and appointments efficiently. It includes features like calendar integration, reminders, and task prioritization.",
    },
    {
      id: 3,
      image: "/images/works/netflix.jpg",
      title: "Netflix Clone",
      demoLink: "https://netflix-clone-xi-ruddy.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Netflix-Clone.git",
      techStack: ["React", "Firebase", "TMDB API"],
      description:
        "A clone of the popular streaming service Netflix. It includes features like user authentication, movie browsing, and video playback.",
    },
    {
      id: 4,
      image: "/images/works/yt.avif",
      title: "YouTube Clone",
      demoLink: "https://my-youtube-8f5j.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/MY-youtube.git",
      techStack: ["React", "YouTube API", "Material-UI"],
      description:
        "A clone of YouTube that allows users to search for videos, watch them, and view related content. It includes features like video playback and search functionality.",
    },
    {
      id: 5,
      image: "/images/works/tictac.jpg",
      title: "Tic Tac Toe",
      demoLink: "https://dragable-tic-tac-toe-game.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Dragable-tic-tac-game.git",
      techStack: ["React", "CSS"],
      description:
        "A classic Tic Tac Toe game with a modern twist. It includes features like drag-and-drop functionality and responsive design.",
    },
    {
      id: 6,
      image: "/images/works/weather.jpg",
      title: "Weather App",
      demoLink: "https://weather-app-ten-ecru-45.vercel.app/",
      codeLink: "https://github.com/Muskan-7867/Weather-app.git",
      techStack: ["React", "OpenWeatherMap API", "CSS"],
      description:
        "A weather application that provides real-time weather information for any location. It includes features like temperature, humidity, and wind speed.",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div  name="work"  >
       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
       <div >
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold inline text-[#202216] border-b-4 border-[#202216] animate-slideIn">
              Work
            </p>
            <p className="py-4 sm:py-6 text-[#6F5A4B] text-lg sm:text-xl md:text-2xl animate-slideInFromRight">
            Check out some of my recent work
            </p>
          </div>
      <div >
        <div className="py-16 min-h-screen text-gray-800 flex justify-center items-center">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-4xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {projects.map(({ id, image, title, demoLink, codeLink, techStack, description }) => (
                <CarouselItem key={id}>
                  <div className="p-4">
                    <Card>
                      <CardContent className="flex flex-col items-center p-6">
                        <img
                          src={image}
                          alt={title}
                          className="w-full max-w-md h-56 object-cover rounded-md"
                        />
                        <h3 className="text-2xl font-bold text-gray-900 mt-4">{title}</h3>
                        <p className="text-sm text-gray-600 mt-2 text-center">{description}</p>
                        <div className="flex gap-2 mt-3 flex-wrap justify-center">
                          {techStack.map((tech, index) => (
                            <span
                              key={index}
                              className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="mt-4 flex gap-4">
                          <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                          >
                            Demo
                          </a>
                          <a
                            href={codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                          >
                            Code
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Work;