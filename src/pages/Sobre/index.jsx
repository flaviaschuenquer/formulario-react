import React from "react";
import { useParams } from "react-router-dom";

function Sobre() {
  const { nome } = useParams();
  return (
    <>
      <h1>Sobre</h1>
      <h1>{nome}</h1>
    </>
  );
}

export default Sobre;