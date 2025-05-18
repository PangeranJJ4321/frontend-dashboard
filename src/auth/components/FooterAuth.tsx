const FooterAuth = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400">
          &copy; 2025 FilmRisk. Semua Hak Dilindungi.
        </p>
        <div className="flex justify-center space-x-4 mt-3">
          <a
            href="#"
            className="text-gray-400 hover:text-red-400 transition duration-300"
          >
            Syarat & Ketentuan
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="#"
            className="text-gray-400 hover:text-red-400 transition duration-300"
          >
            Kebijakan Privasi
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="#"
            className="text-gray-400 hover:text-red-400 transition duration-300"
          >
            Bantuan
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterAuth;
