import React from "react";
import { Icon } from "@iconify/react";

type Props = {
  handleCheckout: () => void;
};

const CTARicardo = ({ handleCheckout }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button
        className="px-12 py-4 text-2xl font-semibold tracking-wide text-white rounded-lg shadow-lg cursor-pointer bg-greenbutton hover:bg-lime-600"
        onClick={handleCheckout}
      >
        Da click aquí para ser parte ADMINISTRACION EFECTIVA DE NEGOCIOS
      </button>
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <Icon
          icon="dashicons:lock"
          width="64"
          height="64"
          className="text-gray-600"
        />
        <img src="/paypal.svg" alt="PayPal" className="h-14" />
        <Icon
          icon="fontisto:american-express"
          width="64"
          height="64"
          className="text-[#006fcf]"
        />
        <Icon icon="logos:discover" width="64" height="64" />
        <Icon icon="logos:mastercard" width="64" height="64" />
        <Icon icon="logos:visa" width="64" height="64" />
      </div>
    </div>
  );
};

export default CTARicardo;
