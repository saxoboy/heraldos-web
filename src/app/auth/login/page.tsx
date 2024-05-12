import { LoginForm } from "@/components/auth/login-form";

const LoginPage = () => {
  return (
    <div className="w-full container flex flex-col lg:flex-row shadow-md px-0">
      <div className="hidden lg:block lg:w-1/2 bg-slate-100">imagen</div>
      <div className="w-full lg:w-1/2">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
