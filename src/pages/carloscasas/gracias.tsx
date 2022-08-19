import { HeadFC } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { SEO } from '../../components/seo';
import { getUrl } from '../../hooks/getUrl';

const GraciasCarlos = () => {
	let whatsappUrl = 'https://chat.whatsapp.com/JxLB1prRvVBEv6K4Ha5wUV';

	return (
		<section>
			<div className="grid md:grid-cols-2 md:items-center md:justify-center md:h-screen">
				<div className="bg-gradient-to-r from-experto1 via-white to-transparent md:h-screen">
					<div className="md:flex md:items-center md:h-screen hidden">
						<StaticImage
							src="../../images/gracias_carlos.png"
							alt="Gracias Carlos"
							className="ml-12"
						/>
					</div>
				</div>
				<div className="mx-4 mt-8 md:mt-0">
					<h1 className="text-xl md:text-3xl text-secondary font-bold text-center">
						¡Felicidades tu registro esta casi listo!
					</h1>
					<h2 className="text-lg md:text-2xl text-center mt-4">
						Para finalmente <span className="font-bold">COMPLETAR</span> tu{' '}
						<span className="font-bold">REGISTRO</span> falta{' '}
						<span className="font-bold">UN PASO</span> muy{' '}
						<span className="font-bold">IMPORTANTE</span>
					</h2>
					<p className="md:text-lg text-center mt-4">
						<span className="font-bold">UNIRTE</span> al{' '}
						<span className="font-bold">GRUPO VIP</span> en{' '}
						<span className="font-bold">Whatsapp</span> para recibir todas las{' '}
						<span className="font-bold">NOTIFICACIONES</span> del evento y
						también el enlace de <span className="font-bold">ZOOM</span> para
						acceder a la masterclass
					</p>

					<div className="flex items-center flex-col gap-8 justify-center mt-16">
						<button
							className="font-bold text-sm lg:text-2xl disabled:cursor-not-allowed flex gap-4 bg-secondary items-center px-6 py-2 rounded-full"
							onClick={() => {
								window.open(whatsappUrl, '_blank');
							}}
						>
							<img
								src="/whatsapp-logo.webp"
								alt="logo whatsapp"
								className="h-8 w-8"
							/>
							Da click en el botón y entra al grupo
						</button>

						{/* {!loading ? (
							<button
								className="font-bold text-sm lg:text-2xl disabled:cursor-not-allowed flex gap-4 bg-secondary items-center px-6 py-2 rounded-full"
								onClick={() => {
									window.open(whatsappUrl, '_blank');
								}}
							>
								<img
									src="/whatsapp-logo.webp"
									alt="logo whatsapp"
									className="h-8 w-8"
								/>
								Da click en el botón y entra al grupo
							</button>
						) : (
							<button
								type="button"
								className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm text-white bg-secondary transition ease-in-out duration-150 cursor-not-allowed"
							>
								<svg
									className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
							className="mt-10 w-1/2"
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
