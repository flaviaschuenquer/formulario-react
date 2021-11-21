import React from "react";

import "./style.css";

function Formulario({ pessoa, setPessoa, setPessoaEndereco, salvarRegistro }) {
  return (
    <form className="formulario-pessoa" onSubmit={(e) => salvarRegistro(e)}>
      <label>Nome:</label>
      <input
        type="text"
        nome="nome"
        value={pessoa.nome}
        onChange={(e) => setPessoa("nome", e.target.value)}
      />
      <label>Sobrenome:</label>
      <input
        type="text"
        nome="sobrenome"
        value={pessoa.sobrenome}
        onChange={(e) => setPessoa("sobrenome", e.target.value)}
      />
      <label>Cidade:</label>
      <input
        type="text"
        nome="cidade"
        value={pessoa.endereco.cidade}
        onChange={(e) => setPessoaEndereco("cidade", e.target.value)}
      />
      <label>Estado:</label>
      <input
        type="text"
        nome="estado"
        value={pessoa.endereco.estado}
        onChange={(e) => setPessoaEndereco("estado", e.target.value)}
      />
      <input type='submit' nome="enviar" value="Salvar Registro"/>
    </form>
  );
}

export default Formulario;