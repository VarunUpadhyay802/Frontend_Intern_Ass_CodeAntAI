import AuthLeft from "../Components/Auth/AuthLeft";
import AuthRight from "../Components/Auth/AuthRight";

const Auth = () => {
  return (
    <div className={`flex gap-2 w-full justify-center`}>
      <AuthLeft />
      <AuthRight />
    </div>
  );
};

export default Auth;
