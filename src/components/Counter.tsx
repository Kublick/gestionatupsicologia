import React from "react";
import Countdown from "react-countdown";

type Props = {
  date: Date;
};

export const Counter = ({ date }: Props) => {
  return <Countdown date={date} />;
};
