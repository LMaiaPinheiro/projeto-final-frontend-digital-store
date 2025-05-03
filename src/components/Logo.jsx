import { Link } from "react-router-dom";

const Logo = ({ logo }) => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
