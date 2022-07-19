import { Link } from "react-router-dom";

const Brands = () => {
  return (
    <div>
      <Link to="/adidas">
        <button>Adidas</button>
      </Link>
      <Link to="/asics">
        <button>Asics</button>
      </Link>
      <Link to="/nike">
        <button>Nike</button>
      </Link>
    </div>
  );
};

export default Brands;
