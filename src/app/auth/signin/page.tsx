import { redirect } from "next/navigation";
import SigninForm from "./signinForm";
import { auth } from "@/auth";

const Signin = async () => {
  const session = await auth();

  if (session) {
    redirect("/waffle/dashboard");
  }

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-brand-pink">Login</h1>
      <SigninForm />
    </div>
  );
};

export default Signin;
