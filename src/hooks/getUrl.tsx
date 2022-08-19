import { useState, useEffect, useRef } from 'react';

export const getUrl = () => {
	const id = '7YXamvsw6hSppoy-s2cPc';
	const awsUrl = 'https://6u4nv7easg.execute-api.us-west-1.amazonaws.com';
	const url = `${awsUrl}/url/${id}`;

	const isMounted = useRef(true);
	const [state, setState] = useState({
		data: null,
		loading: true,
	});

	useEffect(() => {
		return () => {
			isMounted.current = false;
		};
	}, []);

	useEffect(() => {
		setState({ data: null, loading: true });

		fetch(url)
			.then((resp) => resp.json())
			.then((data) => {
				if (isMounted.current) {
					setState({
						loading: false,
						data: data.body.link,
					});
				}
			})
			.catch(() => {
				setState({
					data: null,
					loading: false,
				});
			});
	}, [url]);

	return state;
};
