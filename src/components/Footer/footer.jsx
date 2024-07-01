import {
  DiscordLogo,
  FacebookLogo,
  GithubLogo,
  LinkedinLogo,
  XLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-primary mt-4 text-white">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 md:grid-cols-5 w-full text-sm">
          <div>
            <h2 className="mb-6 font-bold uppercase text-black text-base">
              Contact info
            </h2>
            <ul className="space-y-4 font-normal">
              <li>
                address: Suryakencana St No. 179 - 181, RT.01/RW.2, Babakan
              </li>
              <li>Phone: 08779287214</li>
              <li>Faq: 089924234279</li>
              <li>Email: sinsenju537@gmail.com</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 font-bold uppercase text-black text-base">
              Information
            </h2>
            <ul className="space-y-4 font-normal">
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy policy</li>
              <li>Trems & Conditions</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 font-bold uppercase text-black text-base ">
              Help center
            </h2>
            <ul className="space-y-4 font-normal">
              <li>Discord Server</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h2 className="mb-6 font-bold uppercase text-black text-base">
              Download
            </h2>
            <ul className="space-y-4 font-normal">
              <li>iOS</li>
              <li>Android</li>
              <li>Windows</li>
              <li>MacOS</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 font-bold uppercase text-black text-base">
              NewsLetter
            </h2>
            <div className="space-y-4 font-normal">
              <p className="w-full">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                nostrum dolorem, ipsa modi nisi inventore!
              </p>
              <input
                type="text"
                className="bg-transparent border-b text-white placeholder:text-black border-white border-opacity-50 focus:outline-none"
                placeholder="enter email here"
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-6 bg-primary border-t border-black border-opacity-50 md:flex md:items-center md:justify-between text-black">
          <span className="text-black sm:text-cente">
            © 2023 <a href="https://flowbite.com/">Aroma Caffe™</a>. All
            Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#">
              <FacebookLogo
                size={32}
                className="hover:bg-[#1873EB] hover:text-white rounded-full"
              />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#">
              <DiscordLogo
                size={32}
                className="hover:bg-[#5562EA] hover:text-black rounded-full"
              />
              <span className="sr-only">Discord community</span>
            </a>
            <a href="#" className="hover:bg-black ">
              <XLogo size={32} className="hover:text-white" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#">
              <GithubLogo size={32} className="hover:" />
              <span className="sr-only">GitHub account</span>
            </a>
            <a href="#">
              <LinkedinLogo size={32} className="hover:" />
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
