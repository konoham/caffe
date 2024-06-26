import { useForm } from "react-hook-form";
import { ErrorComp } from "./sing-upComp";

export const LoginComp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log({ errors });
  return (
    <>
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm ">
        <div className="p-4 sm:p-7  ">
          <div className="text-center ">
            <h1 className="block text-2xl font-bold text-gray-800">login</h1>
            <p className="mt-2 text-sm text-gray-600">
              Don't have an account yet?
              <a className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 ">
                {" "}
                Sign up here
              </a>
            </p>
          </div>

          <div className="pt-2 mt-2 border-t-2">
            {/* Form --> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  {/* email */}
                  <label for="email" className="block text-sm mb-2 ">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      className="peer py-3 px-4  block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                      placeholder="email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <ErrorComp error={errors.email} />
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    {/* password */}
                    <label for="password" className="block text-sm mb-2">
                      Password
                    </label>
                    <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none ">
                      Forgot password?
                    </a>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="peer py-3 px-4  block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none "
                      {...register("password", {
                        required: true,
                        minLength: 6,
                      })}
                      placeholder="password"
                    />
                  </div>
                  <ErrorComp error={errors.password} />
                </div>
                {/* End Form Group --> */}

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
                  id="button"
                >
                  login
                </button>
              </div>
            </form>
            {/* End Form --> */}
          </div>
        </div>
      </div>
    </>
  );
};
