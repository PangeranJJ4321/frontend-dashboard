const RegisterForm = () => {
  return (
    <form>
      <div className="mb-3">
        <div className="flex flex-col items-center gap-4">
          <div className="relative group">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-100 group-hover:border-indigo-300 transition-all duration-300">
              <img
                src="assets/burgerbun.jpg"
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </span>
            </button>
            <input type="file" className="hidden" />
          </div>
          <p className="text-1xl text-gray-500">
            Klik untuk mengganti foto profil
          </p>
        </div>
      </div>
      <div className="mb-6">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Nama Lengkap
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Nama depan"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-envelope text-gray-400"></i>
          </div>
          <input
            type="email"
            id="email"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Masukkan email Anda"
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2"
        >
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-lock text-gray-400"></i>
          </div>
          <input
            type="password"
            id="password"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Buat password"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Password minimal 8 karakter dengan huruf, angka, dan simbol
        </p>
      </div>

      <div className="mb-6">
        <label
          htmlFor="confirm-password"
          className="block text-gray-700 font-medium mb-2"
        >
          Konfirmasi Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-lock text-gray-400"></i>
          </div>
          <input
            type="password"
            id="confirm-password"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Konfirmasi password"
          />
        </div>
      </div>

      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="terms"
          className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
          Saya setuju dengan
          <a href="#" className="text-red-600 hover:text-red-800">
            Syarat & Ketentuan
          </a>
          dan
          <a href="#" className="text-red-600 hover:text-red-800">
            Kebijakan Privasi
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-red text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition duration-300 hover-translate"
      >
        Daftar Sekarang
      </button>
    </form>
  );
};

export default RegisterForm;
