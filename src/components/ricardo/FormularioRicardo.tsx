import React, { useState } from "react";
import { FC } from "react";
import { z } from "zod";

type Props = {
  closeModal: () => void;
  setParty: (party: boolean) => void;
};

const User = z.object({
  fullname: z
    .string({ required_error: "El Nombre es requerido" })
    .min(3, { message: "Al menos 3 caracteres" }),
  email: z
    .string({ required_error: "El Email es requerido" })
    .email({ message: "El email no es valido" }),
});

const formNumber = "45";
const formId = "a82276f8d8335c1ce62b5fe8d93f5426";

const FormularioRicardo: FC<Props> = ({ closeModal, setParty }) => {
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(e: React.BaseSyntheticEvent) {
    e.preventDefault();

    const check = User.safeParse({
      fullname,
      email,
    });

    if (!check.success) {
      setErrorMessage(check.error.issues[0].message);
      setHasError(true);
      setTimeout(() => {
        setHasError(false);
      }, 2000);
      return;
    }

    setParty(true);

    const formData = new FormData(e.target);

    const url = "https://psicologaberenicebastidas.activehosted.com/proc.php";
    fetch(url, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then((response) => {
        if (response.status === 200) {
        }
      })
      .catch((error) => {
        console.log(error);
      });

    setTimeout(() => {
      location.assign("/ricardovilla/graciasricardo");
      setParty(false);
      closeModal();
    }, 3000);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mx-4 mt-4 md:mx-24 md:mt-12"
      >
        <input type="hidden" name="u" value={formNumber} />
        <input type="hidden" name="f" value={formNumber} />
        <input type="hidden" name="s" />
        <input type="hidden" name="c" value="0" />
        <input type="hidden" name="m" value="0" />
        <input type="hidden" name="act" value="sub" />
        <input type="hidden" name="v" value="2" />
        <input type="hidden" name="or" value={formId} />

        <input
          type="text"
          name="fullname"
          placeholder="Nombre completo"
          className="w-full px-3 py-3 border border-gray-400 rounded appearance-none focus focus:border-indigo-600 focus:outline-none active:border-indigo-600 active:outline-none "
          onChange={(e) => setFullname(e.target.value)}
        />

        <input
          type="email"
          name="email"
          placeholder="Correo electrónico"
          className="w-full px-3 py-3 border border-gray-400 rounded appearance-none focus focus:border-indigo-600 focus:outline-none active:border-indigo-600 active:outline-none "
          onChange={(e) => setEmail(e.target.value)}
        />
        {hasError && <p className="text-sm text-red-500">{errorMessage}</p>}
        <div className="flex justify-center mt-4">
          <input
            type="submit"
            className="px-8 py-4 m-4 font-medium text-white border border-transparent rounded-md bg-secondary hover:bg-opacity-90 focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:text-lg "
            value="Registrarme"
          />
        </div>
      </form>
    </div>
  );
};

export default FormularioRicardo;
