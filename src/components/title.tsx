import React from "react";

interface TitleProps {
  txtTitle: string;
  txtSubtitle: string;
}

const Title = ({ txtTitle, txtSubtitle }: TitleProps) => {
  return (
    <div className="relative w-full">
      <h1 className="leading-[162px] font-bold text-9xl text-transparent lowercase titleStroke overflow-hidden">
        {txtTitle}
      </h1>
      <h2
        className="absolute text-3xl text-left text-blue-title dark:text-gray-txt tracking-widest font-normal uppercase transform -translate-x-1/2 -translate-y-1/2 w-full z-10 top-1/2 left-1/2 mt-2"
        style={{ WebkitTextStroke: "0px transparent" }}
      >
        <span className="w-14 border border-t border-orange-bg inline-block mr-4 mb-2" />
        {txtSubtitle}
      </h2>
    </div>
  );
};

export default Title;
