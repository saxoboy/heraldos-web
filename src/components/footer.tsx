import Link from "next/link";
import Image from "next/image";
import { MapPin, Smartphone, Mail } from "lucide-react";
import { RiFacebookCircleFill, RiYoutubeFill } from "react-icons/ri";
import Logo from "~/images/logo-heraldos-de-cristo.png";

const Footer = () => {
  return (
    <footer className="font-body">
      <div className="bg-blue-bg py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="w-36 mx-auto">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Heraldos Cristo C.L.A"
                  width={144}
                  height={144}
                  className="w-auto h-auto mx-auto cursor-pointer"
                />
              </Link>
            </div>
            <div>
              <h3 className="text-orange-bg text-2xl mb-6">Direcciones</h3>
              <div className="flex justify-normal items-start space-x-4 text-white">
                <MapPin className="text-white text-2xl" />
                <p className="w-52 text-gray-txt">
                  661 Main St, Hackensack, NJ 07601, EE. UU.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-orange-bg text-2xl mb-6">Contactos</h3>
              <div className="flex justify-normal items-start space-x-4 text-white">
                <Smartphone className="text-white text-2xl" />
                <p className="w-52 text-gray-txt">
                  Teléfono: +1 (240) 644-8582
                </p>
              </div>
              <div className="flex justify-normal items-start space-x-4 text-white">
                <Mail className="text-white text-2xl" />
                <p className="w-52 text-gray-txt">
                  E-mail: info@heraldoscristo.com
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-orange-bg text-2xl mb-6">Redes Sociales</h3>
              <div className="hidden lg:flex items-center gap-4 text-gray-txt">
                <Link
                  href="https://www.facebook.com/ACHCCLA"
                  target="_blank"
                  className="hidden lg:block"
                >
                  <RiFacebookCircleFill className="w-8 h-8 hover:scale-110 hover:text-orange-bg" />
                </Link>
                {/* <Link
                  href="https://www.youtube.com"
                  target="_blank"
                  className="hidden lg:block"
                >
                  <RiYoutubeFill className="w-8 h-8 hover:scale-110 hover:text-orange-bg" />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-bgTwo">
        <div className="container mx-auto py-10 text-center text-sm text-gray-txt">
          <p className="m-0 text-[#97AAD2] tracking-wider">
            Asociación de Caballeros “Heraldos de Cristo” © 2024. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
