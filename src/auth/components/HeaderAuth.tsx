import { Link } from "react-router";

const HeaderAuth = () => {
  return (
    <header className="bg-gradient-red text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="index.html" className="flex items-center space-x-2">
            <i className="fas fa-film text-2xl"></i>
            <span className="font-bold text-xl">FilmRisk</span>
          </a>
          <div className="flex space-x-4">
            <Link
              to={"/login"}
              className="px-4 py-2 rounded text-white hover:text-red-200 transition duration-300"
            >
              Masuk
            </Link>
            <Link
              to={"/register"}
              className="px-4 py-2 bg-white text-red-700 rounded hover:bg-red-100 transition duration-300"
            >
              Daftar
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderAuth;
