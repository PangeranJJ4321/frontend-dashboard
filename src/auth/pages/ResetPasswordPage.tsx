import FooterAuth from "../components/FooterAuth";
import HeaderAuth from "../components/HeaderAuth";
import ResetPasswordForm from "../components/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <>
      <HeaderAuth />
      <div className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-md scale-in-center">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
              <i className="fas fa-key text-red-600 text-3xl"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Reset Password
            </h1>
            <p className="text-gray-600">
              Masukkan password baru kamu yang kuat dan unik yaa 💪
            </p>
          </div>

          <ResetPasswordForm />
        </div>
      </div>
      <FooterAuth />
    </>
  );
};

export default ResetPasswordPage;
