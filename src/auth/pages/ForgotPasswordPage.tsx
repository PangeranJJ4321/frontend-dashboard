import { Link } from "react-router";
import FooterAuth from "../components/FooterAuth";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import HeaderAuth from "../components/HeaderAuth";

const ForgotPasswordPage = () => {
  return (
    <>
      <HeaderAuth />
      <div className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md scale-in-center">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
              <i className="fas fa-lock-open text-red-600 text-3xl"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Lupa Password?
            </h1>
            <p className="text-gray-600">
              Masukkan email Anda dan kami akan mengirimkan link untuk reset
              password
            </p>
          </div>

          <ForgotPasswordForm />

          <div className="bg-gray-50 rounded-lg p-4 mt-8 border-l-4 border-red-500">
            <div className="flex">
              <div className="flex-shrink-0">
                <i className="fas fa-info-circle text-red-500"></i>
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-700">
                  Link reset password akan dikirim ke email Anda dan berlaku
                  selama 30 menit.
                </p>
              </div>
            </div>
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

export default ForgotPasswordPage;
