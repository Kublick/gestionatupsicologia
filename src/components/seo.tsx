import React, { FC } from 'react';
import useSiteMetadata from '../hooks/usesitemetadata';

type SEOProps = {
	title?: string;
	description?: string;
	pathname?: string;
	children?: React.ReactNode;
};

export const SEO: FC<SEOProps> = ({
	title,
	description,
	pathname,
	children,
}) => {
	const {
		title: defaultTitle,
		description: defaultDescription,
		siteUrl,
	} = useSiteMetadata();
	const seo = {
		title: title || defaultTitle,
		description: description || defaultDescription,
		url: `${siteUrl}${pathname || ``}`,
	};
	return (
		<>
			<title>{seo.title}</title>
			<meta name="description" content={seo.description} />
			<link rel="icon" type="image/x-icon" href="/favicon.ico" />
			{children}
		</>
	);
};
