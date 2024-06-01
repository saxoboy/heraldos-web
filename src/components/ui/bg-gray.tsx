import ShapeTop from "./shape-top";
import ShapeBottom from "./shape-bottom";

type BgGrayProps = {
  children: React.ReactNode;
};

const BgGray = ({ children }: BgGrayProps) => {
  return (
    <section className="bg-[#F7F9FA] relative my-12">
      <ShapeTop />
      {children}
      <ShapeBottom />
    </section>
  );
};

export default BgGray;
