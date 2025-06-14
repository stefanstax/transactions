import { Link } from "react-router";
import { buttonSecondary } from "../app/globalClasses";
import LoginForm from "../features/login/LoginForm";

const Login = () => {
  return (
    <section className="w-full flex justify-center items-center flex-col gap-4">
      <div className="min-w-[600px] flex flex-col items-center justify-center gap-4">
        <LoginForm />
        <p className="text-white">OR</p>
        <Link className={buttonSecondary} to="/authentication/registration">
          Create account
        </Link>
      </div>
    </section>
  );
};

export default Login;
