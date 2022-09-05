import { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { SEO } from "../../components/seo";
import { getUrl } from "../../hooks/getUrl";

const GraciasCarlos = () => {
  let whatsappUrl = "https://chat.whatsapp.com/JxLB1prRvVBEv6K4Ha5wUV";

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

              {/* {!loading ? (
							<button
								className="flex items-center gap-4 px-6 py-2 text-sm font-bold rounded-full lg:text-2xl disabled:cursor-not-allowed bg-secondary"
								onClick={() => {
									window.open(whatsappUrl, '_blank');
								}}
							>
								<img
									src="/whatsapp-logo.webp"
									alt="logo whatsapp"
									className="w-8 h-8"
								/>
								Da click en el botón y entra al grupo
							</button>
						) : (
							<button
								type="button"
								className="inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out cursor-not-allowed bg-secondary"
							>
								<svg
									className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									/>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									/>
								</svg>
								Descargando tu grupo
							</button>
						)} */}
              <StaticImage
                src="../../images/calos_casas_logo.png"
                alt="Carlos Casas"
                className="w-1/2 mt-10"
              />
            </div>
          </div>
        </div>
        <div className=" bg-gradient-to-l from-experto1 via-white to-transparent md:h-screen">
          <div className="hidden md:flex md:h-screen md:items-center">
            <StaticImage
              src="../../images/_DSC7375.webp"
              alt="Gracias Carlos"
              className="ml-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraciasCarlos;

export const Head: HeadFC = () => (
  <SEO title="Carlos Casas | Gracias por Registrarte" />
  // <SEO title={'Gestiona tu Psicologia'} description={'Mi descripcion'} />
);
