export const About = () => {
  return (
    <div className="w-full">
      <h1 className="mt-8 mb-6 text-4xl md:text-5xl font-bold text-[#A4907C] border-b border-[#A4907C] inline-block text-center md:ms-[43%]">ABOUT US</h1>
      <div className="w-full px-4 flex flex-col md:flex-row mx-auto justify-center items-center mt-2">
        <div className="container px-4 flex flex-col md:flex-row md:gap-4 w-full pt-4">
          <img src="./asset/img-about.jpg" className="w-4/5  rounded-md mx-auto mb-4 md:w-1/2" alt="" id="gambar" />
          <div className="w-full">
            <h1 className="mt-2 mb-4 text-2xl md:text-5xl font-bold text-white text-center md:text-start">Best Coffee House In Your Town</h1>
            <p className="mt-3 mb-4 font-semibold text-sm md:text-base text-center md:text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis deserunt, totam ea, autem voluptate quam, dignissimos sunt et qui quos placeat porro assumenda debitis?
            </p>
            <p className="mt-3 mb-4 font-semibold text-sm md:text-base text-center md:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint veniam, repellat unde saepe corporis ducimus excepturi doloribus doloremque quasi beatae quisquam maxime assumenda fuga voluptatum nisi libero nemo quaerat
              eveniet.
            </p>
            <button type="button" className="inline-flex items-center gap-x-2 text-sm font-medium mt-4 bg-transparent text-white shadow-sm hover:px-4 transition disabled:opacity-50 disabled:pointer-events-none mx-auto">
              Learn More
              <svg className="flex-shrink-0 w-4 h-4 md:w-6 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
