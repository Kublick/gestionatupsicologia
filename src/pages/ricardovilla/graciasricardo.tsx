import { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { SEO } from "../../components/seo";

const GraciasRicardo = () => {
  let whatsappUrl = "https://chat.whatsapp.com/Bc9vF304TIBAPMrQPsks4a";

  return (
    <section>
      <div className="grid md:h-screen md:grid-cols-2 md:items-center md:justify-center">
        <div>
          <div className="mx-4 mt-8 md:mt-0">
            <h1 className="text-xl font-bold text-center text-secondary md:text-3xl">
              ¡Felicidades tu registro esta casi listo!
            </h1>
            <h2 className="mt-4 text-lg text-center md:text-2xl">
              Para finalmente <span className="font-bold">COMPLETAR</span> tu{" "}
              <span className="font-bold">REGISTRO</span> falta{" "}
              <span className="font-bold">UN PASO</span> muy{" "}
              <span className="font-bold">IMPORTANTE</span>
            </h2>
            <p className="mt-4 text-center md:text-lg">
              <span className="font-bold">UNIRTE</span> al{" "}
              <span className="font-bold">GRUPO VIP</span> en{" "}
              <span className="font-bold">Whatsapp</span> para recibir todas las{" "}
              <span className="font-bold">NOTIFICACIONES</span> del evento y
              también el enlace de <span className="font-bold">ZOOM</span> para
              acceder a la masterclass
            </p>

            <div className="flex flex-col items-center justify-center gap-8 mt-16">
              <button
                className="flex items-center gap-4 px-6 py-2 text-sm font-bold rounded-full bg-secondary disabled:cursor-not-allowed lg:text-2xl"
                onClick={() => {
                  window.open(whatsappUrl, "_blank");
                }}
              >
                <img
                  src="/whatsapp-logo.webp"
                  alt="logo whatsapp"
                  className="w-8 h-8"
                />
                Da click en el botón y entra al grupo
              </button>

              <StaticImage
                src="../../images/ricardo_villa_logo.png"
                alt="Carlos Casas"
                className="w-1/2 mt-10"
              />
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-l from-experto2 via-white to-transparent md:h-screen">
          <div className="hidden md:flex md:h-screen md:items-center">
            <StaticImage
              src="../../images/ricardo_villa_pc.png"
              alt="Gracias Carlos"
              className="mx-4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraciasRicardo;

export const Head: HeadFC = () => (
  <SEO title="Ricardo Villa | Gracias por Registrarte" />
  // <SEO title={'Gestiona tu Psicologia'} description={'Mi descripcion'} />
);
