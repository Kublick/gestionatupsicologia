import { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import {
  carlosContenido,
  carlosModulos,
  carlosOferta,
  carlosVentaPuntos,
} from "../../components/carlos/CarlosData";
import CTACarlos from "../../components/carlos/CTACarlos";
import { Counter } from "../../components/Counter";
import { SEO } from "../../components/seo";

const VentaCarlosCasas = () => {
  const handleCheckout = () => {
    window.open("https://pay.hotmart.com/Y74578961N?off=2x6qmttj", "_blank");
  };

  return (
    <div>
      <div className="my-8">
        <h1 className="px-4 mb-4 text-2xl font-semibold text-center md:text-4xl">
          ACTIVA TU CONSULTA PRIVADA
        </h1>
        <h1 className="px-4 mx-auto text-xl text-center md:w-3/4 md:text-3xl">
          Con este Curso Online, verás resultados desde la primera sesión,
          obtendrás seguridad, agilidad, conseguirás eficacia y estructura para
          tus consultas de psicoterapia y/o terapia psicológica
        </h1>
      </div>
      <div className="flex justify-center">
        <StaticImage src={"../../images/logo_activa.png"} alt="Logo Activa" />
      </div>

      <section>
        <div className="bg-experto1">
          <h1 className="py-8 text-2xl font-semibold text-center text-white md:text-4xl">
            Este curso es para ti si alguna vez te ha pasado
          </h1>
        </div>
        <div className="px-4 md:px-12">
          {carlosOferta.map((puntos) => (
            <div key={puntos.id} className="mx-4 mt-4">
              <div className="flex items-center gap-4">
                <span className="flex-shrink-0 w-4 h-4 ml-2 bg-gradient-to-b from-experto1 to-secondary md:ml-0" />
                <p>{puntos.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="px-4 mt-12 mb-4 text-2xl font-semibold text-center md:text-4xl">
            Si tu respuesta es si, sigue leyendo... Te tengo la solución
          </h1>

          <h2 className="px-4 mt-12 mb-4 text-xl font-semibold text-center text-experto1 md:text-2xl">
            ¿Qué es?
          </h2>
          <h1 className="px-4 mb-4 text-2xl font-semibold text-center text-experto1 md:text-6xl">
            ACTIVA TU CONSULTA
          </h1>

          <p className="px-4 mt-12 mb-4 text-lg font-semibold md:mx-8 md:text-2xl">
            Este curso online ACTIVA TU CONSULTA PRIVADA esta creado para que en
            muy poco tiempo aprendas una nueva manera de iniciar de forma
            correcta tus consultas de psicoterapia y/o terapia, una vez qué
            conozcas la estrategia de como iniciar tu consulta, te sentirás
            preparado profesionalmente confiado de tus conocimientos por que
            contaras con una estructura y las herramientas necesarias para
            empezar atender a tus pacientes
          </p>
          <p className="px-4 mt-12 mb-4 text-lg font-semibold text-center md:mx-8 md:text-2xl">
            El precio regular de este curso online es de{" "}
            <span className="text-experto1">$197 dólares</span> pero al
            inscribirte a la primera generación de ACTIVA TU CONSULTA PRIVADA,
            recibes un{" "}
            <span className="text-experto1">descuento de $100 dólares,</span>{" "}
            por lo que tu inversión seria solo de
          </p>
          <h1 className="py-4 text-4xl font-semibold text-center md:text-7xl">
            Valor: $97 dólares
          </h1>
        </div>
        <CTACarlos handleCheckout={handleCheckout} />
        <div>
          <h1 className="py-12 my-8 text-2xl text-center text-white bg-experto1 md:text-4xl">
            ¿Pero Quienes Somos Para Enseñarte?
          </h1>

          <div className="grid place-items-center md:grid-cols-4">
            <div className="gap-4 py-4 md:col-span-3">
              <p className="mx-4 text-xl md:mx-12 md:text-2xl">
                Psicólogo Clínico Carlos Casas
              </p>
              <p className="mx-4 text-xl md:mx-12 md:text-2xl ">
                Psicoterapeuta clínico con nueve años de experiencia en el área
                de la salud mental, enfocado en las áreas de ansiedad, depresión
                y suicidio, con cinco años de experiencia en el área de la
                docencia a nivel de preparatoria, licenciatura y maestría, en
                escuelas como CETYS, UVM, XOCHICALCO, Centro Ericksoniano de
                México, Universidad Autónoma de Durango y UNEA. Actualmente soy
                Codirector del Instituto de psicoterapia breve y desarrollo
                personal. HIPNOSIC.
              </p>
            </div>
            <div className="order-first md:order-last">
              <StaticImage
                src={"../../images/carlos_casas_venta.png"}
                alt="Carlos Casas"
              />
            </div>
          </div>
          <div className="grid place-items-center md:grid-cols-4">
            <div className="py-4 md:col-span-3">
              <p className="mx-4 text-xl md:mx-12 md:text-2xl">
                Berenice Bastidas creadora de programas internacionales como:
                Incrementa Tu Consulta y Aumenta Pacientes, con los cuales ya
                estoy ayudando a profesionales de más de14 países diferentes
                incrementar su número de pacientes. <br /> Psicóloga de
                profesión desde hace 15 años y en los últimos años me he
                dedicado ayudar a Profesionales a incrementar su número de
                pacientes.
              </p>
            </div>
            <div className="order-first md:order-last">
              <StaticImage
                src={"../../images/berenice_portrait_venta.png"}
                alt="Berenice Bastidas"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="py-12 my-8 text-2xl text-center text-white bg-experto1 md:text-4xl">
            Que lograrás con este curso:
          </h1>
        </div>
        <div className="grid py-4 mx-12 md:my-12 md:grid-cols-4 md:gap-16 lg:mx-24">
          {carlosVentaPuntos.map((evento) => (
            <div key={evento.id} className="py-4 md:py-0">
              <h4 className="text-xl font-semibold">Beneficio {evento.id}</h4>
              <div className="h-3 my-2 bg-gradient-to-r from-experto1 to-white" />
              <p>{evento.description}</p>
            </div>
          ))}
        </div>
        <div>
          <h1 className="text-2xl text-center md:text-4xl">
            El Curso Online ACTIVA TU CONSULTA PRIVADA cierra sus puertas en:
          </h1>
        </div>
        <div className="flex justify-center my-8 text-2xl ">
          <span className="px-8 py-2 font-bold text-red-500 bg-black rounded-lg">
            <Counter date={new Date("October 2 2022 23:59")} />
          </span>
        </div>
        <CTACarlos handleCheckout={handleCheckout} />
        <div className="flex justify-center my-12">
          <h1 className="px-8 py-4 text-2xl font-semibold bg-gray-200 rounded-xl md:text-4xl">
            El curso online incluye:
          </h1>
        </div>
        <div className="grid gap-6 mx-4 sm:grid-cols-2 md:mx-12 ">
          <div>
            {carlosModulos.map((modulo) => (
              <div key={modulo.id} className="flex gap-2">
                <div className="w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-8 h-8 text-experto1 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <div>
                  <p>{modulo.module}</p>
                  <p>{modulo.title}</p>
                  <p>{modulo.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            {carlosContenido.map((modulo) => (
              <div key={modulo.id} className="flex gap-2">
                <div className="w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-8 h-8 text-experto1 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <div>
                  <p>{modulo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-8">
          <h1 className="mx-4 text-lg md:mx-12 md:text-2xl">
            Sin duda es muchísimo valor el que tendrás con el curso completo
            ACTIVA TU CONSULTA PRIVADA y además con los bonos de regalo tienes
            acceso a más de{" "}
            <span className="text-experto1">$1,000 dólares</span> en contenido
            de valor y recursos. Si pagaras todo esto por separado te saldría en
            eso... Pero hoy tengo una invitación, es una oferta especial para
            ti, hoy si te inscribes a la primera generación de ACTIVA TU
            CONSULTA PRIVADA, recibes un descuento de{" "}
            <span className="text-experto1">$100 dólares,</span> por lo que tu
            inversión seria solo{" "}
            <span className="text-experto1">$97 dólares</span> de el tipo de
            cambio y el IVA dependerá de cada país
          </h1>
        </div>
        <div className="grid mx-4 md:mx-24 md:grid-cols-2">
          <StaticImage src={"../../images/logo_activa.png"} alt="Logo Activa" />

          <div className="place-self-center">
            <h1 className="mb-4 text-2xl font-semibold text-center md:text-4xl">
              Valor: $97 dólares{" "}
            </h1>
            <button
              className="px-12 py-4 text-2xl font-semibold tracking-wide text-white rounded-lg shadow-lg cursor-pointer bg-greenbutton hover:bg-lime-600"
              onClick={handleCheckout}
            >
              Da click aquí para ser parte ACTIVA TU CONSULTA
            </button>
          </div>
        </div>

        <div className="m-4 grid border-[8px] border-blue-600 p-4 md:grid-cols-2">
          <div className="w-1/2 mx-auto ">
            <StaticImage src={"../../images/laptop.webp"} alt="Laptop" />
          </div>

          <div className="px-4 place-self-center">
            <p className="text-xl md:text-2xl">
              ¡Si accedes hoy además hay bonos para ti! obtienes de forma 100%
              GRATUITA de regalo
            </p>
            <p className="mt-4 text-2xl font-semibold md:text-4xl">BONO</p>
            <p className="text-xl md:text-2xl">
              El Taller Consigue Pacientes En Redes Sociales
            </p>
          </div>
        </div>
        <h1 className="mx-4 mt-8 text-lg md:mx-12 md:text-2xl">
          Además tienes 7 días de GARANTIA podrás empezar la formación conocer a
          todos tus compañeros empezar a formarte y si no te gusta lo que vez,
          si sientes que no es lo tuyo te devuelvo el 100% del importe pagado.
        </h1>
        <div className="flex justify-center my-4">
          <StaticImage
            src={"../../images/logo_garantia.webp"}
            height={161}
            width={177}
            alt="garantia"
          />
        </div>
        <CTACarlos handleCheckout={handleCheckout} />
      </section>
      <footer className="mt-12">
        <div className="px-4 py-8 text-sm text-center bg-experto1 md:text-xl">
          <p className="text-white ">Politica de Privacidad</p>
        </div>
      </footer>
    </div>
  );
};

export default VentaCarlosCasas;

export const Head: HeadFC = () => (
  <SEO title="Carlos Casas | Portal de Venta" />
);
