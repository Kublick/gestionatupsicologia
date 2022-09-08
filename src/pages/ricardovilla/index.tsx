import React, { useState } from "react";
import { HeadFC } from "gatsby";
import { SEO } from "../../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import FormularioModalRicardo from "../../components/ricardo/ModalRicardo";
import {
  ricardoEventoData,
  ricardoPuntosData,
} from "../../components/ricardo/ricardoData";

const CarlosCasasPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section>
        <div className="grid items-center gap-4 mt-12 text-center md:grid-cols-2">
          <div className="mx-12">
            <h1 className="text-2xl font-semibold md:text-4xl">
              {" "}
              <span className="font-bold text-secondary">¡Atención!</span>{" "}
              Empresarios, emprendedores y dueños de negocios
            </h1>
            <h2 className="mt-4 md:text-xl">
              Reserva Tu Lugar Gratis A Mi Masterclass Gratuita:
            </h2>
            <h1 className="mt-4 text-2xl font-bold md:text-4xl">
              Los 3 Secretos para evitar que tu negocio fracase
            </h1>
          </div>
          <div className="hidden py-12 from-experto2 to-white md:block md:bg-gradient-to-l">
            <StaticImage
              className="w-1/2 mx-auto"
              src={"../../../src/images/ricardo_villa_portrait.png"}
              alt="Psicologo consulta"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 mt-6">
          <p className="text-sm">Da click en el botón para registrarte</p>
          <button
            className="px-12 py-4 text-2xl font-semibold tracking-wide text-white shadow-lg cursor-pointer bg-greenbutton hover:bg-lime-600"
            onClick={() => setIsOpen(true)}
          >
            Registrarme
          </button>
        </div>
        {isOpen && (
          <FormularioModalRicardo isOpen={isOpen} setIsOpen={setIsOpen} />
        )}
      </section>
      <div className="py-2 mt-16 bg-secondary" />
      <section className="py-8 text-white bg-experto2">
        <div className="container mx-auto ">
          <div className="grid gap-4 mx-12 place-items-start sm:place-items-center md:mx-4 md:grid-cols-2">
            <div className="flex items-center justify-center gap-4">
              <img
                src="/boleto.webp"
                alt="Boleto"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3>Reserva tu Lugar</h3>
                <p className="font-semibold text-secondary">22 de Septiembre</p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-4">
                <img
                  src="/ricardo_villa_portrait.png"
                  alt="anfritrion_carlos"
                  className="w-16 h-16"
                />
                <div>
                  <h3 className="font-semibold">Anfritrión: Ricardo Villa</h3>

                  <p className="font-semibold text-secondary">
                    Ingeniero Empresarial
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container py-8 mx-auto">
        <div className="mx-4">
          <h3 className="text-xl text-center md:text-4xl">
            Lo Que Solucionarás En Este Evento 100% Online En Vivo y Gratuito
          </h3>
        </div>
        <div className="grid mx-12 md:my-12 md:grid-cols-3 md:gap-16 lg:mx-24">
          {ricardoEventoData.map((evento) => (
            <div key={evento.id}>
              <h4 className="text-xl font-semibold">{evento.title}</h4>
              <div className="h-3 my-2 bg-gradient-to-r from-secondary to-white" />
              <p>{evento.description}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="py-8 my-16 bg-gradient-to-r from-experto2 to-white" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="mx-auto">
          <h1 className="text-4xl font bold">Este evento es para ti si:</h1>
        </div>
        <div>
          {ricardoPuntosData.map((puntos) => (
            <div key={puntos.id} className="mx-4 mt-4">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 w-4 h-4 ml-2 bg-gradient-to-b from-experto2 to-secondary md:ml-0" />
                <p>{puntos.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="mx-auto my-16">
        <div className="py-6 text-center bg-experto2">
          <h1 className="text-xl font-bold text-white md:text-3xl">
            Conoce Más De Ricardo Villa
          </h1>
        </div>
        <div className="grid gap-4 place-items-center md:grid-cols-2">
          <div className="flex flex-col items-center mx-4 mt-8 md:mx-8 md:mt-4 ">
            <StaticImage
              src={"../../images/ricardo_villa_logo.png"}
              alt="Logo Ricardo Villa"
              class=""
            />
            <h1 className="mt-10 text-xl text-center md:text-2xl">
              Fundador de Grupo Impulso Innovador. Administrador de Empresas.
              Coach Ejecutivo y Consultor Empresarial. Ingeniero en Sistemas
              Computacionales. Conferencista Certificado por el Dr. César
              Lozano. Miembro activo de la Federación Mexicana de Life Coaching.
              Conferencista Internacional del John Maxwell Team. Experto en
              Formación y Desarrollo de Capital Humano.
            </h1>
          </div>

          <div className="w-1/2 my-8 place-self-center">
            <StaticImage
              src={"../../images/ricardo_villa_tablet.png"}
              alt="Imagen Ricardo Villa"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 mt-6">
          <p className="text-sm">Da click en el botón para registrarte</p>
          <button
            className="px-12 py-4 text-2xl font-semibold tracking-wide text-white shadow-lg cursor-pointer bg-greenbutton hover:bg-lime-600"
            onClick={() => setIsOpen(true)}
          >
            Registrarme
          </button>
        </div>
      </section>
      <footer>
        <div className="px-4 py-8 text-sm text-center bg-experto1 md:text-xl">
          <p className="text-white ">Politica de Privacidad</p>
        </div>
      </footer>
    </>
  );
};

export default CarlosCasasPage;

export const Head: HeadFC = () => (
  <SEO title="Ricardo Villa | Mejora tu Emprendimiento" />
);
