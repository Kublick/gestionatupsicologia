import React, { FC, useState } from 'react';
import { z } from 'zod';

type Props = {
	closeModal: () => void;
};

const formNumber = '43';
const formId = 'a1871685f032fea01c276df80cb3ff81';

const User = z.object({
	fullname: z
		.string({ required_error: 'El Nombre es requerido' })
		.min(3, { message: 'Al menos 3 caracteres' }),
	email: z
		.string({ required_error: 'El Email es requerido' })
		.email({ message: 'El email no es valido' }),
});

export function FormularioCarlos(): FC<Props> {
	const [email, setEmail] = useState('');
	const [fullname, setFullname] = useState('');
	const [hasError, setHasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	return (
		<div>
			<h1>FormularioCarlos</h1>
		</div>
	);
}
