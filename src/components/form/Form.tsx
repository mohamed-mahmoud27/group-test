import { IFromProps } from "./FormType";
import { Field, Formik, Form as FormikForm } from "formik";
import "./form.css";

export const Form = (props: IFromProps) => {
  const { fields, onSubmit, initialValues, validationSchema, onCancel } = props;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values }) => (
        <FormikForm className="group-form">
          <div className="field-wrapper">
            {fields.map((field, index) => (
              <div key={index} className="form-field">
                <p>{field.label}</p>
                <Field
                  {...field}
                  name={field.name}
                  value={values[field.name]}
                  className="field"
                />
              </div>
            ))}
            <div className="form-buttons">
              <button type="submit" className="form-button">
                Submit
              </button>
              <button type="button" className="form-button" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </div>
        </FormikForm>
      )}
    </Formik>
  );
};
