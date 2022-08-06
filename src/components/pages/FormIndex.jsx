import { Formik } from "formik";
const Form = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col w-full justify-center gap-4">
        <h1 className="text-lg font-bold shadow-sm">Anywhere in your app!</h1>

        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.password) {
              errors.password = "Required";
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));

              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,

            errors,

            touched,

            handleChange,

            handleBlur,

            handleSubmit,

            isSubmitting,

            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <input
                className="input input-bordered w-full max-w-lg"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              {errors.email && touched.email && errors.email}

              <input
                className="input input-bordered w-full max-w-lg"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              {errors.password && touched.password && errors.password}

              <button
                className="btn btn-sm btn-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Form;
