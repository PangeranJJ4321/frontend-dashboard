import { createBrowserRouter } from "react-router";
import LandingPage from "../landing/page/LandingPage";
import SignUpPage from "../auth/pages/SignUpPage";
import SignInPage from "../auth/pages/SignInPage";
import ForgotPasswordPage from "../auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "../auth/pages/ResetPasswordPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path:"/register",
        element: <SignUpPage />
    },
    {
        path: "/login",
        element: <SignInPage />
    },
    {
        path:"/forgot-password",
        element: <ForgotPasswordPage />
    },
    {
        path: "/reset-password",
        element: <ResetPasswordPage />
    }
])

export default router