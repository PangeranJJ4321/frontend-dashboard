import { Link } from "react-router";

const LoginForm = () => {
  return (
    <form>
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
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="password" className="block text-gray-700 font-medium">
            Password
          </label>
          <Link
            to={"/forgot-password"}
            className="text-sm text-red-600 hover:text-red-800 transition duration-300"
          >
            Lupa Password?
          </Link>
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-lock text-gray-400"></i>
          </div>
          <input
            type="password"
            id="password"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Masukkan password Anda"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-red text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition duration-300 hover-translate"
      >
        Masuk
      </button>
    </form>
  );
};
export default LoginForm;
