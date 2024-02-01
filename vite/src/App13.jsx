import React, { useRef, useEffect } from "react";
import { useState } from "react";

const App13 = () => {
  const bottomRef = useRef(null);

  const handleScroll = (e) => {
    const bottomElement = bottomRef.current;
    if (bottomElement && e.deltaY > 0) {
      const bottomOffset = bottomElement.getBoundingClientRect().bottom - window.innerHeight;
      const scrollThreshold = window.innerHeight;
      if (bottomOffset < scrollThreshold) {
        // User has scrolled to 20% height from the bottom
        console.log("Scrolled to 20% from the bottom of the website");
        // You can perform any action when the user reaches that point
      }
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Content of your website */}
      <div ref={bottomRef}>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
        <p>aaa</p>
      </div>
    </div>
  );
};

export default App13;
