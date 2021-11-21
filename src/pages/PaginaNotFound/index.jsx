import { Link } from "react-router-dom";

function PaginaNotFound() {
  return (
    <>
      <h1>404 NOT FOUND</h1>
      <Link to="/">
        <h1>Voltar para Home</h1>
      </Link>
    </>
  );
}

export default PaginaNotFound;