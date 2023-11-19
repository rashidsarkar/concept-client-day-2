import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ErrorMessage, Field, Form, Formik } from "formik";

const SignUp = () => {
  const initialValues = {
    // Define your form fields and their initial values here
    name: "",
    image: "",
    email: "",
  };
  const validate = (values) => {
    const errors = {};

    if (!values.image) {
      errors.image = "Required";
    }

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const onSubmit = (values) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col max-w-md p-6 text-gray-900 bg-gray-100 rounded-md sm:p-10">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
          <p className="text-sm text-gray-400">Welcome to StayVista</p>
        </div>
        <Formik
          validate={validate}
          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form className="space-y-6 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-rose-500"
                  data-temp-mail-org="0"
                />
                <ErrorMessage
                  className="text-red-500"
                  name="name"
                  component="div"
                />
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <Field type="file" id="image" name="image" accept="image/*" />
                <ErrorMessage
                  className="text-red-500"
                  name="image"
                  component="div"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-rose-500"
                  data-temp-mail-org="0"
                />
                <ErrorMessage
                  name="email"
                  className="text-red-500"
                  component="div"
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="mb-2 text-sm">
                    Password
                  </label>
                </div>
                <Field
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  id="password"
                  placeholder="*******"
                  className="w-full px-3 py-2 text-gray-900 bg-gray-200 border border-gray-300 rounded-md focus:outline-rose-500"
                />
                <ErrorMessage
                  className="text-red-500"
                  name="password"
                  component="div"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white rounded-md bg-rose-500"
            >
              Continue
            </button>
          </Form>
        </Formik>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex items-center justify-center p-2 m-3 space-x-2 border border-gray-300 cursor-pointer border-rounded">
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-gray-600 hover:underline hover:text-rose-500"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default SignUp;
