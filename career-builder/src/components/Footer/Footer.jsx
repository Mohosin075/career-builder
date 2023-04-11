import React from "react";
import SetFooterData from "../SetFooterData/SetFooterData";

const Footer = () => {
  const footerData = [
    ["Company", "About Us", "Work", "Latest News", "Careers"],
    ["Product", "Prototype", "Plans & Pricing", "Customers", "Integrations"],
    ["Support", "Help Desk", "Sales", "Become a Partner", "Developers"],
    ["Contact", "524 Broadway , NYC", "+1 777 - 978 - 5570"],
  ];

  return (
    <div className="px-4 2xl:px-72 xl:px-20 py-28 bg-[#1A1919]">
      <div className=" flex flex-col md:flex-row w-full gap-3 justify-between  text-white ">
        <div className="md:w-3/12 mb-12 md:mb-0">
          <h2 className="text-3xl xl:text-5xl font-bold">Career<span className="text-[#273fda]">Builder</span></h2>
          <p className="text-gray-400 my-5 text-sm lg:text-lg">
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex">
            <a
              className="p-3 text-center w-8 h-8 lg:w-10 w-8 h-8 lg:h-10 flex justify-center items-center mr-4 rounded-full bg-zinc-400"
              href=""
            >
              F
            </a>
            <a
              className="p-3 text-center w-8 h-8 lg:w-10 w-8 h-8 lg:h-10 flex justify-center items-center mr-4 rounded-full bg-zinc-400"
              href=""
            >
              T
            </a>
            <a
              className="p-3 text-center w-8 h-8 lg:w-10 w-8 h-8 lg:h-10 flex justify-center items-center mr-4 rounded-full bg-zinc-400"
              href=""
            >
              I
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 w-full justify-between md:w-8/12">
          {footerData.map((ftd, idx) => (
            <SetFooterData ftd={ftd} key={idx}></SetFooterData>
          ))}
        </div>
      </div>
      <hr className="my-10 border-gray-700 " />
      <div className="text-gray-600 flex justify-between text-sm">
        <p>@2023 CareerHub. All Rights Reserved</p>
        <p>Powered by CareerHub</p>
      </div>
    </div>
  );
};

export default Footer;
