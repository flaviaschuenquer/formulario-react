import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";

import Pessoas from "../../mock/pessoa.json";

import Formulario from "../../components/Formulario";

const pessoalModelo = {
  nome: "Abner",
  sobrenome: "",
  endereco: {
    cidade: "",
    estado: "",
  },
};

function Home() {
  const [listPessoa] = useState(Pessoas);
  const [pessoa, setPessoa] = useState(pessoalModelo);
  const [listaPessoas, setListaPessoas] = useState([]);
  const history = useHistory();

  function handleSetPessoa(key, value) {
    setPessoa({
      ...pessoa,
      [key]: value,
    });
  }

  function setEnderecoPessoa(key, value) {
    setPessoa({
      ...pessoa,
      endereco: {
        ...pessoa.endereco,
        [key]: value,
      },
    });
  }

  function salvarRegistro(e) {
    e.preventDefault();
    setListaPessoas([...listaPessoas, pessoa]);
    setPessoa(pessoalModelo);
    //handleClickComParametro();
  }

  function handleClickComParametro() {
    history.push(`/sobre/${pessoa.nome}`);
  }

  return (
    <>
      {listPessoa.map((pessoa, index) => {
        return (
          <div key={index}>
            <h3>{`${pessoa.nome} ${pessoa.sobrenome}`}</h3>            
          </div>
        );
      })}
      <Formulario
        setPessoa={handleSetPessoa}
        setPessoaEndereco={setEnderecoPessoa}
        salvarRegistro={salvarRegistro}
        pessoa={pessoa}
      />
      <button onClick={handleClickComParametro}>Página Sobre</button>
      <button onClick={handleClickComParametro}>
        Página Sobre Parametro com history.push
      </button>
      <Link to={`/sobre/${pessoa.nome}`}>
        <button>Página Sobre Parametro com Link</button>
      </Link>
    </>
  );
}

export default Home;