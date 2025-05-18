import { Link } from "react-router";
import FooterAuth from "../components/FooterAuth";
import HeaderAuth from "../components/HeaderAuth";
import LoginForm from "../components/LoginForm";

const SignInPage = () => {
  return (
    <>
      <HeaderAuth />
      <div className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md scale-in-center">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Selamat Datang Kembali
            </h1>
            <p className="text-gray-600">Masuk ke akun FilmRisk Anda</p>
          </div>

          <LoginForm />

          <div className="relative flex items-center justify-center mt-8 mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Atau masuk dengan
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300 hover-translate">
              <i className="fab fa-google text-red-500 mr-2"></i>
              <span className="text-gray-700">Google</span>
            </button>
            <button className="w-full flex items-center justify-center py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-300 hover-translate">
              <i className="fab fa-facebook-f text-blue-600 mr-2"></i>
              <span className="text-gray-700">Facebook</span>
            </button>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Belum punya akun?{" "}
              <Link
                to={"/register"}
                className="text-red-600 font-medium hover:underline"
              >
                Daftar Sekarang
              </Link>
            </p>
          </div>
        </div>
      </div>
      <FooterAuth />
    </>
  );
};

export default SignInPage;
