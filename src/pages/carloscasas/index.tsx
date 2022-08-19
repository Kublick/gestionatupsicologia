import React, { useState } from 'react';
import { HeadFC } from 'gatsby';
import { SEO } from '../../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import FormularioModal from '../../components/carlos/Modal';
import { eventoData, puntosData } from '../../components/carlos/CarlosData';

const CarlosCasasPage = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<section>
				<div className="grid md:grid-cols-2 mt-12 text-center gap-4 items-center">
					<div className="mx-12">
						<h1 className=" text-2xl md:text-4xl font-semibold">
							{' '}
							<span className="text-secondary font-bold">¡Atención!</span>{' '}
							Psicólogos, Terapeutas y Psicoterapeutas
						</h1>
						<h2 className="mt-4 md:text-xl">
							Reserva Tu Lugar Gratis A Mi Masterclass Gratuita:
						</h2>
						<h1 className="text-2xl md:text-4xl font-bold mt-4">
							Los 3 Factores Principales Que Tienes Que Saber Para Iniciar Tu
							consulta Privada
						</h1>
					</div>
					<div className="md:bg-gradient-to-l from-experto1 via-white to-white  py-12 md:block hidden">
						<StaticImage
							className="mx-auto"
							src={'../../../src/images/psicologo_sillon.png'}
							alt="Psicologo consulta"
						/>
					</div>
				</div>
				<div className="flex flex-col gap-4 items-center justify-center mt-6">
					<p className="text-sm">Da click en el botón para registrarte</p>
					<button
						className="bg-greenbutton py-4 px-12 text-white font-semibold shadow-lg tracking-wide text-2xl hover:bg-lime-600 cursor-pointer"
						onClick={() => setIsOpen(true)}
					>
						Registrarme
					</button>
				</div>
				{isOpen && <FormularioModal isOpen={isOpen} setIsOpen={setIsOpen} />}
			</section>
			<div className="bg-secondary py-2 mt-16" />
			<section className="bg-experto1 text-white py-8">
				<div className="container mx-auto ">
					<div className="grid md:grid-cols-2 mx-12 md:mx-4 gap-4 place-items-start sm:place-items-center">
						<div className="flex gap-4 justify-center items-center">
							<img
								src="/boleto.webp"
								alt="Boleto"
								className="w-16 h-16 rounded-full"
							/>
							<div>
								<h3>Reserva tu Lugar</h3>
								<p className="text-secondary font-semibold">29 de Septiembre</p>
							</div>
						</div>
						<div>
							<div className="flex gap-4 justify-center items-center">
								<img
									src="/anfritrion_carlos.png"
									alt="anfritrion_carlos"
									className="w-16 h-16"
								/>
								<div>
									<h3 className="font-semibold">
										Anfritrión: Psicólogo Carlos Casas
									</h3>

									<p className="text-secondary font-semibold">Psicoterapeuta</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="container mx-auto py-8">
				<div className="mx-4">
					<h3 className="text-xl md:text-4xl text-center">
						Lo Que Solucionarás En Este Evento 100% Online En Vivo y Gratuito
					</h3>
				</div>
				<div className="grid md:grid-cols-3 mx-12 md:gap-16 lg:mx-24 md:my-12">
					{eventoData.map((evento) => (
						<div key={evento.id}>
							<h4 className="text-xl font-semibold">{evento.title}</h4>
							<div className="bg-gradient-to-r from-secondary  to-white h-3 my-2" />
							<p>{evento.description}</p>
						</div>
					))}
				</div>
			</section>
			<div className="my-16 bg-gradient-to-r from-experto1  to-white py-8" />
			<div className="grid md:grid-cols-2 gap-4">
				<div className="mx-auto">
					<h1 className="text-4xl font bold">Este evento es para ti si:</h1>
				</div>
				<div>
					{puntosData.map((puntos) => (
						<div key={puntos.id} className="mt-4 mx-4">
							<div className="flex gap-4 items-center">
								<span className="ml-2 md:ml-0 h-4 w-4 bg-gradient-to-b from-experto1  to-secondary flex-shrink-0" />
								<p>{puntos.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<section className="my-16 mx-auto">
				<div className="text-center bg-experto1 py-6">
					<h1 className="text-xl md:text-3xl font-bold text-white">
						Conoce Más De Carlos Casas Psicoterapeuta
					</h1>
				</div>
				<div className="grid md:grid-cols-2 gap-4 items-center">
					<div className="mx-4 md:mx-8 mt-8 md:mt-0">
						<StaticImage
							src={'../../images/calos_casas_logo.png'}
							alt="Logo Carlos Casas"
						/>
						<h1 className="mt-10 text-xl md:text-3xl text-center">
							Psicólogo Clínico Carlos Casas Maestría En Psicoterapia
							Ericksoniana, Especialista En Terapia Breve Y De Pareja Por Parte
							Del Mental Research Institute Palo Alto california.
						</h1>
					</div>

					<div className="place-self-center w-1/2">
						<StaticImage
							src={'../../images/carlos_casas_profile.png'}
							alt="Imagen Carlos Casas"
						/>
					</div>
				</div>

				<div className="flex flex-col gap-4 items-center justify-center mt-6">
					<p className="text-sm">Da click en el botón para registrarte</p>
					<button
						className="bg-greenbutton py-4 px-12 text-white font-semibold shadow-lg tracking-wide text-2xl hover:bg-lime-600 cursor-pointer"
						onClick={() => setIsOpen(true)}
					>
						Registrarme
					</button>
				</div>
			</section>
			<footer>
				<div className="bg-experto1 py-8 text-center md:text-xl text-sm px-4">
					<p className="text-white  ">Politica de Privacidad</p>
				</div>
			</footer>
		</>
	);
};

export default CarlosCasasPage;

export const Head: HeadFC = () => (
	<SEO title="Carlos Casas | Inicia Tu Consulta Privada" />
);
