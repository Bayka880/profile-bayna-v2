import React from "react";
import Typewriter from "typewriter-effect";
export default function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Fullstack Developer"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
