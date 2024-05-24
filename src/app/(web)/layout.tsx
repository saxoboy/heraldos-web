import Image from "next/image";
import Navbar from "@/components/navbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function SeccionLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full z-50">
        <Navbar />
      </div>
      <div className="bg-gradient-to-b from-blue-bg to-[#932616]">
        <div className="relative p-0">
          <Image
            src="/images/bg-header.jpeg"
            width={1440}
            height={987}
            alt="header"
            className="w-full object-cover z-[-1]"
          />
          <section className="bg-gradient-to-b from-blue-bg to-[#932616] w-full h-full absolute left-0 top-0 opacity-50" />
        </div>
      </div>

      {children}
    </>
  );
}
