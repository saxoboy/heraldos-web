interface TitleProps {
  txtTitle: string;
  txtSubtitle: string;
  txtSubtitleTwo?: string;
}

const TitleHeader = ({ txtTitle, txtSubtitle, txtSubtitleTwo }: TitleProps) => {
  return (
    <div className="relative w-full">
      <h1
        className="leading-[162px] font-bold text-9xl text-transparent lowercase text-center"
        style={{ WebkitTextStroke: "1px #F0F4FC" }}
      >
        {txtTitle}
      </h1>
      <h2
        className="absolute text-3xl text-center text-blue-title tracking-widest font-bold uppercase transform -translate-x-1/2 -translate-y-1/2 w-full z-10 top-1/2 left-1/2 mt-2"
        style={{ WebkitTextStroke: "0px transparent" }}
      >
        <span className="w-14 border border-t border-orange-bg inline-block mr-4 mb-2" />
        {txtSubtitle} <span className="text-orange-bg">{txtSubtitleTwo}</span>
      </h2>
    </div>
  );
};

export default TitleHeader;
