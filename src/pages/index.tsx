import * as React from 'react';
import { HeadFC, Link, navigate } from 'gatsby';
import { SEO } from '../components/seo';

const IndexPage = () => {
	React.useEffect(() => {
		navigate('/carloscasas');
	}, []);

	return (
		<main>
			<h1 className="text-2xl text-red-600 text-center">Proximamente</h1>
		</main>
	);
};

export default IndexPage;

export const Head: HeadFC = () => (
	<SEO />
	// <SEO title={'Gestiona tu Psicologia'} description={'Mi descripcion'} />
);
