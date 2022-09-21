import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import ReactPlayer from "react-player/lazy";
import { Counter } from "../../components/Counter";
import CTARicardo from "../../components/ricardo/CTARicardo";
import {
  ricardoOferta,
  ricardoPrograma,
  ricardoQuien,
  ricardoContenido,
  ricardoModulos,
} from "../../components/ricardo/ricardoData";

const OfertaCarlos = () => {
  const handleCheckout = () => {
    window.open("https://pay.hotmart.com/W74576488Q?off=9oj88a7r", "_blank");
  };

  return (
    <>
      <div className="my-8">
        <h1 className="px-4 mb-4 text-2xl font-semibold text-center md:text-4xl">
          Administración Efectiva De Negocios
        </h1>
        <h1 className="px-4 mx-auto text-xl text-center md:w-3/4 md:text-3xl">
          Con este{" "}
          <span className="font-semibold text-secondary">Curso Online,</span>{" "}
          verás resultados desde la primera sesión, aprende métodos sencillos y
          reveladores para gestionar los procesos internos de tu negocio de
          manera más efectiva y ve cómo aumenta tu éxito personal y el de tu
          organización.
        </h1>
      </div>
      <div className="flex justify-center">
        <StaticImage
          src={"../../images/ricardo/ricardo_logo.png"}
          alt="Logo Administracion efectiva"
          className="w-1/2"
        />
      </div>
      <section>
        <div className="bg-experto2">
          <h1 className="py-8 text-2xl font-semibold text-center text-white md:text-4xl">
            Este curso es para ti si alguna vez te ha pasado
          </h1>
        </div>
        <div className="px-4 md:px-12">
          {ricardoOferta.map((puntos) => (
            <div key={puntos.id} className="mx-4 mt-4">
              <div className="flex items-center gap-4 md:text-xl">
                <span className="flex-shrink-0 w-4 h-4 ml-2 bg-gradient-to-b from-experto2 to-secondary md:ml-0" />
                <p>{puntos.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <h1 className="px-4 mt-12 mb-4 text-2xl font-semibold text-center md:text-4xl">
            Si tu respuesta es si, sigue leyendo... Te tengo la solución
          </h1>

          <h2 className="px-4 mt-12 mb-4 text-xl font-semibold text-center text-secondary md:text-2xl">
            ¿Qué es?
          </h2>
          <h1 className="px-4 mb-4 text-2xl font-semibold text-center text-secondary md:text-6xl">
            ADMINISTRACION EFECTIVA DE NEGOCIOS
          </h1>

          <p className="px-4 mt-12 mb-4 text-lg font-semibold text-center md:mx-8 md:text-2xl">
            Este curso online ADMINISTRACIÓN EFECTIVA DE NEGOCIOS esta creado
            para apoyar al crecimiento constante y sostenido de tu negocio y que
            en poco tiempo logres cambios transformacionales para mejorar las
            finanzas, operacion y recurso humano para que logres controlar el
            negocio en todas las areas importantes pero sobre para el negocio
            funcione sin tipor que contaras con una estructura y las
            herramientas necesarias para hacer crecer tu negocio.
          </p>
          <p className="px-4 mt-12 mb-4 text-lg font-semibold text-center md:mx-8 md:text-2xl">
            El precio regular de este curso online es de{" "}
            <span className="text-secondary">$197 dólares</span> pero al
            inscribirte a la primera generación de ADMINISTRACION EFECTIVA DE
            NEGOCIOS, recibes un{" "}
            <span className="text-secondary">descuento de $100 dólares,</span>{" "}
            por lo que tu inversión seria solo de
          </p>
          <h1 className="py-4 text-4xl font-semibold text-center md:text-7xl">
            Valor: $97 dólares
          </h1>
        </div>
        <CTARicardo handleCheckout={handleCheckout} />
        <div>
          <h1 className="py-12 my-8 text-2xl text-center text-white bg-experto2 md:text-4xl">
            ¿Pero Quienes Somos Para Enseñarte?
          </h1>

          <div className="grid place-items-center md:grid-cols-4">
            <div className="gap-4 py-4 md:col-span-3">
              <p className="mx-4 text-xl font-semibold text-experto2 md:mx-12 md:text-3xl">
                Ricardo Villa
              </p>
              <p className="mx-4 text-xl md:mx-12 md:text-2xl ">
                Ingeniero Empresarial, un impulsador de ideas, personas y
                negocios, comprometido en ayudar a mejorar la calidad de vida de
                quien lo contrata, en los últimos años ha logrado impactar la
                vida de muchas personas para que concreten y realicen sus metas
                a través de los diferentes talleres, asesorías, cursos y
                conferencias.
              </p>
              <ul>
                <li className="mx-4 text-xl md:mx-12 md:text-2xl">
                  {ricardoQuien.map((o) => (
                    <li key={o.id} className="ml-2">
                      - {o.description}{" "}
                    </li>
                  ))}
                </li>
              </ul>
            </div>
            <div className="flex justify-center order-first md:order-last">
              <StaticImage
                src={"../../images/ricardo/ricardo_villa_oferta.png"}
                alt="Ricardo Villa"
                className="w-3/4 "
              />
            </div>
          </div>
          <div className="grid place-items-center md:grid-cols-4">
            <div className="py-4 md:col-span-3">
              <p className="mx-4 text-xl md:mx-12 md:text-2xl">
                <span className="text-xl font-semibold text-experto2 md:text-3xl ">
                  Berenice Bastidas
                </span>{" "}
                <br />
                Creadora de programas internacionales como: Incrementa Tu
                Consulta y Aumenta Pacientes, con los cuales ya estoy ayudando a
                profesionales de más de14 países diferentes incrementar su
                número de pacientes. <br /> Psicóloga de profesión desde hace 15
                años y en los últimos años me he dedicado ayudar a Profesionales
                a incrementar su número de pacientes.
              </p>
            </div>
            <div className="flex justify-center order-first md:order-last">
              <StaticImage
                src={"../../images/berenice_portrait_venta.png"}
                alt="Berenice Bastidas"
                className="w-3/4"
              />
            </div>
          </div>
          <div>
            <h1 className="py-12 my-8 text-2xl text-center text-white bg-experto2 md:text-4xl">
              Este programa es para ti si
            </h1>
            <div className="grid gap-12 px-4 mx-auto md:grid-cols-4 md:px-12">
              {ricardoPrograma.map((o) => (
                <div key={o.id}>
                  <p className="pb-2 text-lg font-semibold text-center sm:h-36 md:h-24">
                    {o.title}
                  </p>
                  <div className="w-full h-4 bg-gradient-to-r from-secondary to-white" />
                  <p className="pt-4">{o.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mx-4 my-16 md:mx-12">
            <h1 className="text-2xl font-semibold md:text-6xl">
              ¿Serás el próximo?
            </h1>
            <p className="mt-4 text-lg md:text-2xl">
              Mira las historias inspiradoras, los casos de éxito que ya tomaron
              acción.
            </p>

            <div className="flex flex-col gap-4 mt-4 md:mt-8 md:grid md:grid-cols-2 md:gap-8">
              <div className="player-wrapper">
                <ReactPlayer
                  url="https://youtu.be/aKZRhqgVqBY"
                  className="react-player"
                  width="100%"
                  height="100%"
                />
              </div>

              <div className="player-wrapper">
                <ReactPlayer
                  url="https://youtu.be/2CqSqfrR0d8"
                  className="react-player"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl text-center md:text-4xl">
              El Curso Online Administración Efectiva De Negocios cierra sus
              puertas en:
            </h1>
            <div className="flex justify-center my-8 text-2xl ">
              <span className="px-8 py-2 font-bold text-red-500 bg-black rounded-lg">
                <Counter date={new Date("September 25 2022 23:59")} />
              </span>
            </div>
            <p className="py-4 text-2xl font-semibold text-center md:text-7xl">
              Valor: $97 dólares
            </p>
            <CTARicardo handleCheckout={handleCheckout} />
          </div>
          <div>
            <div className="flex justify-center my-16">
              <h1 className="px-8 py-4 text-2xl font-semibold bg-gray-200 rounded-xl md:text-4xl">
                El curso online incluye:
              </h1>
            </div>
            <div className="grid gap-6 mx-4 sm:grid-cols-2 md:mx-12 ">
              <div>
                {ricardoModulos.map((modulo) => (
                  <div key={modulo.id} className="flex gap-2">
                    <div className="w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-8 h-8 text-secondary "
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
                {ricardoContenido.map((modulo) => (
                  <div key={modulo.id} className="flex gap-2">
                    <div className="w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                        stroke="currentColor"
                        className="w-8 h-8 text-secondary "
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
          </div>
          <div className="py-8">
            <h1 className="mx-4 text-lg md:mx-12 md:text-2xl">
              Sin duda es muchísimo valor el que tendrás con el curso completo
              ADMINISTRACION EFECTIVA DE NEGOCIOS y además con los bonos de
              regalo tienes acceso a más de{" "}
              <span className="text-secondary">$1,000 dólares</span> en
              contenido de valor y recursos. Si pagaras todo esto por separado
              te saldría en eso... Pero hoy tengo una invitación, es una oferta
              especial para ti, hoy si te inscribes a la primera generación de
              ADMINISTRACION EFECTIVA DE NEGOCIOS, recibes un descuento de{" "}
              <span className="text-secondary">$100 dólares,</span> por lo que
              tu inversión seria solo{" "}
              <span className="text-secondary">$97 dólares</span> de el tipo de
              cambio y el IVA dependerá de cada país
            </h1>
          </div>
          <div className="grid mx-4 md:mx-24 md:grid-cols-2">
            <StaticImage
              src={"../../images/ricardo/ricardo_logo.png"}
              alt="Logo Activa"
            />

            <div className="place-self-center">
              <h1 className="mb-4 text-2xl font-semibold text-center md:text-4xl">
                Valor: $97 dólares{" "}
              </h1>
              <button
                className="px-12 py-4 text-2xl font-semibold tracking-wide text-white rounded-lg shadow-lg cursor-pointer bg-greenbutton hover:bg-lime-600"
                onClick={handleCheckout}
              >
                Da click aquí para ser parte ADMINISTRACION EFECTIVA DE NEGOCIOS
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
              <p className="mt-4 text-2xl font-semibold md:text-4xl">BONOS</p>
              <p className="text-xl md:text-2xl">
                Como iniciar un negocio desde cero
              </p>
              <p className="text-xl md:text-2xl">Consulta psicológica</p>
            </div>
          </div>
          <h1 className="mx-4 mt-8 text-lg md:mx-12 md:text-2xl">
            Además tienes 7 días de GARANTIA podrás empezar la formación conocer
            a todos tus compañeros empezar a formarte y si no te gusta lo que
            vez, si sientes que no es lo tuyo te devuelvo el 100% del importe
            pagado.
          </h1>

          <div className="flex justify-center my-4">
            <StaticImage
              src={"../../images/logo_garantia.webp"}
              height={161}
              width={177}
              alt="garantia"
            />
          </div>

          <div className="py-8">
            <h1 className="mx-4 text-lg md:mx-12 md:text-2xl">
              Sin duda es muchísimo valor el que tendrás con el curso completo
              ADMINISTRACION EFECTIVA DE NEGOCIOS y además con los bonos de
              regalo tienes acceso a más de{" "}
              <span className="text-secondary">$1,000 dólares</span> en
              contenido de valor y recursos. Si pagaras todo esto por separado
              te saldría en eso... Pero hoy tengo una invitación, es una oferta
              especial para ti, hoy si te inscribes a la primera generación de
              ADMINISTRACION EFECTIVA DE NEGOCIOS, recibes un descuento de{" "}
              <span className="text-secondary">$100 dólares,</span> por lo que
              tu inversión seria solo{" "}
              <span className="text-secondary">$97 dólares</span> de el tipo de
              cambio y el IVA dependerá de cada país
            </h1>
          </div>

          <CTARicardo handleCheckout={handleCheckout} />
        </div>
      </section>
      <footer className="mt-12">
        <div className="px-4 py-8 text-sm text-center bg-experto2 md:text-xl">
          <p className="text-white ">Politica de Privacidad</p>
        </div>
      </footer>
    </>
  );
};

export default OfertaCarlos;
