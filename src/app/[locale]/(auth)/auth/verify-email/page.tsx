import { SignUp } from "@/components/pages/auth/SignUp";
import { VerifyEmail } from "@/components/pages/auth/VerifyEmail";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Error",
}

const VerifyEmailPage = () => (
    <VerifyEmail />
)

export default VerifyEmailPage;