import Image from "next/image";
import { BreadcrumbMain } from "@/components/breadcrumb";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function SeccionLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="bg-gradient-to-b from-blue-bg to-[#932616] relative">
        <div className="relative p-0 overflow-hidden">
          <Image
            src="/images/junta-ejecutiva.jpeg"
            width={1440}
            height={520}
            alt="header"
            className="w-full z-[-1]"
          />
          <section className="bg-gradient-to-b from-blue-bg from-50% to-[#932616] to-99% w-full h-full absolute left-0 top-0 opacity-75" />
        </div>
        <div className="absolute z-10 top-2/3 sm:top-1/2 md:top-2/3 xl:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <BreadcrumbMain />
        </div>
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden hidden lg:block"
          style={{
            lineHeight: 0,
          }}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-[100px]"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
              fill="white"
            />
          </svg>
        </div>
      </div>
      {children}
    </>
  );
}
