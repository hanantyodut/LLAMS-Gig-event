import clsx from "clsx";
import AuthFormWrapper from "../_components/auth.form.hoc";
import { major_mono, plex_mono } from "../_utils/fonts";
import Link from "next/link";
import RegisterForm from "./_components/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Generated by create next app",
};

type Props = {};
export default function SignUp({}: Props) {
  return (
    <AuthFormWrapper title="Register">
      <RegisterForm />
      <div className={clsx(major_mono.className, "divider")}>OR</div>
      <Link href={"/sign-in"} className={clsx(plex_mono.className)}>
        <center>Sign in</center>
      </Link>
    </AuthFormWrapper>
  );
}
