import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

function Footer() {
  return (
    <div className="bg-gray-300 dark:bg-dark mt-14 rounded-t-3xl  flex justify-center">
      <section className="container             ">
        <div className="grid md:grid-cols-3 py-5 md:px-10 ">
          <div className="py-8 px-4   ">
            <h1 className="small-text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex  items-center gap-3 font-serif">
              Car Rent
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              corrupti accusantium suscipit harum dicta necessitatibus atque
              corporis, repudiandae tempora dignissimos fugiat odit quasi
              soluta! Unde perspiciatis sint repellat nobis. Nulla!
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow />
              <p>Noida, UP</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
          
            <div className="flex items-center gap-3 mt-6">
            <a href="#">
              <FaInstagram className="text-3xl hover:text-primary duration-300 " />
            </a>

            <a href="#">
              <FaFacebook className="text-3xl hover:text-primary duration-300 " />
            </a>

            <a>
              <FaLinkedin className="text-3xl hover:text-primary duration-300 " />
            </a>
          </div>
          </div>

         

          {/* links */}

          <div className="grid grid-cols-3 sm:grid-cols-3  col-span-2 sm:pl-10 ">
            <div className="md:pl-10">
              <div className="py-8 px-4 ">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li key={link.id} className="cursor-pointer hover:translate-x-1 duration-300  text-gray-500 dark:text-gray-200  ">
                     
                     
                     <span className="space-x-1 hover:!text-primary cursor-pointer">
                      <span>&#11162;</span>
                   
                      <span>{link.title}</span>
                   </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className=" md:pl-10">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col sm:text-left gap-3">
                  {FooterLinks.map((link) => (
                    <li key={link.id} className=" text-gray-500 hover:translate-x-1 duration-300 dark:text-gray-200">
                      <span className="space-x-1 hover:!text-primary cursor-pointer">
                      <span>&#11162;</span>
                   
                      <span>{link.title}</span>
                   </span >
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="md:pl-10">
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold sm:text-left text-justify mb-3">
                  Location
                </h1>

                {/* <ul className="list-disc list-inside "> */}
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li key={link.id} className="cursor-pointer hover:translate-x-1 duration-300   text-gray-500  dark:text-gray-200">
                     
                 <span className="space-x-1 hover:!text-primary cursor-pointer"> 
                      <span>&#11162;</span>
                      <span>{link.title}</span>

                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
