import React from "react";

function Greeting({ text }: { text: string }) {
  return (
    <div className="text-2xl md:text-xl font-medium text-gray-500">{text}</div>
  );
}

export default Greeting;
