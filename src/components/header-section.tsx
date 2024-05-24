import TitleHeader from "./title-header";

const HeaderSection = () => {
  return (
    <div>
      <h1 className="hidden sm:block text-4xl md:text-5xl font-bold sm:py-4 text-center text-white">
        <TitleHeader />
      </h1>
    </div>
  );
};

export default HeaderSection;
