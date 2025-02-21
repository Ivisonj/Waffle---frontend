import SigninForm from "./signinForm";

const Signin = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1 className="text-4xl font-bold text-brand-pink">Login</h1>
      <SigninForm />
    </div>
  );
};

export default Signin;
