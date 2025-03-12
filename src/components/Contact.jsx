const Contact = () => {
  return (
    <div 
      name="contact" 
      className="w-full h-screen bg-transparent flex justify-center rounded-5xl items-center p-4"
    >
      <form 
        method="POST" 
        action="https://getform.io/f/bdrywqeb" 
        className="flex flex-col w-full max-w-[900px] bg-white bg-opacity-20 backdrop-blur-md rounded-xl shadow-lg p-8"
      >
        <div className="pb-8 animate-slideIn">
          <p className="text-4xl font-bold inline border-b-4 text-[#202216] border-[#202216]">
            Contact
          </p>
        </div>
        <input 
          className="p-2 bg-white bg-opacity-70 animate-slideInFromRight text-[#202216] rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#202216]" 
          type="text" 
          placeholder="Name" 
          name="name" 
          required 
        />
        <input 
          className="p-2 bg-white bg-opacity-70 animate-slideIn text-[#202216] rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#202216]" 
          type="email" 
          placeholder="Email" 
          name="email" 
          required 
        />
        <textarea 
          className="p-2 bg-white bg-opacity-70 animate-slideInFromRight text-[#202216] rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-[#202216]" 
          rows="10" 
          placeholder="Message" 
          name="message" 
          required 
        />
        <button 
          className="text-[#202216] border-2 animate-slideIn border-[#202216] hover:bg-[#202216] hover:text-white px-4 py-3 my-8 mx-auto flex items-center transition duration-300 ease-in-out"
        >
          Lets Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;