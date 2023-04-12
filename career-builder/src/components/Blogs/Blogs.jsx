import React from "react";
import SubHeader from "../SubHeader/SubHeader";

const Blogs = ({ children }) => {
  return (
    <div>
      <SubHeader data={children}></SubHeader>
      <section className="w-9/12 md:w-10/12 mx-auto my-5">
        <h1 className="text-center my-10 text-2xl md:text-4xl font-bold">
          Some <span className="text-green-600">Important</span> Question
        </h1>
        <div>
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-bold">
              (1) When should you use Context API?
            </h3>
            <div className="text-sm md:text-xl py-3">
              <p className="py-2">
              The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent. 
              </p>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-bold">
              (2) What is Custom Hooks?
            </h3>
            <div className="text-sm md:text-xl py-3">
              <p className="py-2">
              A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. such as : (useState, useEffect, useContext, etc.)
              </p>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-bold">
              (3) What is useRef?
            </h3>
            <div className="text-sm md:text-xl py-3">
              <p className="py-2">
              useRef is a built-in React hook that accepts one argument as the initial value and returns a reference.
              </p>
            </div>
          </div>
          <div className="mb-10">
            <h3 className="text-xl md:text-2xl font-bold">
              (4) What is useMemo?
            </h3>
            <div className="text-sm md:text-xl py-3">
              <p className="py-2">
              React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can avoid calling them on every render. You simple pass in a function and an array of inputs and useMemo will only recompute the memoized value when one of the inputs has changed.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
