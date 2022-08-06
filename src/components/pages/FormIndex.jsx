import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()

    .min(2, "Too Short!")

    .max(50, "Too Long!")

    .required("Required"),

  lastName: Yup.string()

    .min(2, "Too Short!")

    .max(50, "Too Long!")

    .required("Required"),

  email: Yup.string().email("Invalid email").required("Required"),
});

const FormIndex = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col w-full justify-center gap-4">
        <h1 className="text-lg font-bold shadow-sm">Anywhere in your app!</h1>

        <Formik
          initialValues={{
            firstName: "",

            lastName: "",

            email: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            // same shape as initial values

            console.log(values);
          }}
        >
          {({ errors, touched }) => (
            <Form className=" space-x-2 space-y-2">
              <div className="px-4 space-x-2">
                <label>First Name : </label>
                <Field
                  name="firstName"
                  className="input input-bordered w-full max-w-lg"
                />

                {errors.firstName && touched.firstName ? (
                  <div className="text-red-600 text-sm">{errors.firstName}</div>
                ) : null}
              </div>

              <div className="px-4 space-x-2">
                <label>Last Name : </label>
                <Field
                  name="lastName"
                  className="input input-bordered w-full max-w-lg"
                />

                {errors.lastName && touched.lastName ? (
                  <div className="text-red-600 text-sm">{errors.lastName}</div>
                ) : null}
              </div>

              <div className="px-4 space-x-2">
                <label>Email : </label>
                <Field
                  name="email"
                  type="email"
                  className="input input-bordered w-full max-w-lg"
                />

                {errors.email && touched.email ? (
                  <div className="text-red-600 text-sm">{errors.email}</div>
                ) : null}
              </div>
              <button className="btn btn-sm btn-primary" type="submit">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormIndex;
