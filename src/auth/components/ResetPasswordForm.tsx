import { Link } from "react-router";

const ResetPasswordForm = () => {
  return (
    <form>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 font-medium mb-2"
        >
          Password Baru
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <i className="fas fa-lock text-gray-400"></i>
          </div>
          <input
            type="password"
            id="password"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Masukkan password baru"
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="confirmPassword"
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
            id="confirmPassword"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder="Ulangi password baru"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-red text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition duration-300 hover-translate mb-6"
      >
        Reset Password
      </button>

      <div className="text-center">
        <Link
        to={"/login"}
          className="inline-flex items-center text-red-600 hover:text-red-800 transition duration-300"
        >
          <i className="fas fa-sign-in-alt mr-2"></i>
          Kembali ke Login
        </Link>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
