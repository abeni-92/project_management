import { GithubSignInButton, GoogleSignInButton } from "../authButtons";
import { CredentialsForm } from "../credentialsForm";

const SignIn = () => {
  return (
    <>
      <div className="h-screen overflow-y-auto bg-boxdark shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="my-10 flex min-h-screen flex-wrap items-center justify-center">
          <div className="w-full border-1 border-strokedark shadow-default dark:border-strokedark sm:w-2/3 lg:w-1/3">
            <div className="w-full p-6 text-white sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-center text-2xl font-bold dark:text-white sm:text-title-xl2">
                Sign In
              </h2>

              <GithubSignInButton />
              {/* <GoogleSignInButton /> */}
              <p className="p-4 text-center text-4xl font-semibold dark:text-white">
                Or
              </p>
              <CredentialsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
