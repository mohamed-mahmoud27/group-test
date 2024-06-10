import React from "react";
import * as Yup from "yup";

import "./group-form.css";

import { Form } from "../../form";
import { FormField } from "../../form/FormType";
import { IGroup } from "../../../types";

export const GroupForm = ({
  onSubmit,
  onCancel,
  data,
  formHeader,
}: {
  onSubmit: (values: any) => void;
  onCancel: () => void;
  data?: IGroup;
  formHeader: string;
}) => {
  const fields: Array<FormField> = [
    {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Enter Name",
    },
    {
      label: "Description",
      name: "description",
      type: "text",
      placeholder: "Enter Description",
    },
  ];
  const initialValues = {
    name: data?.name ?? "",
    description: data?.description ?? "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
  });
  return (
    <React.Fragment>
      <h2 className="form-header">{formHeader}</h2>
      <Form
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        fields={fields}
        onCancel={onCancel}
      />
    </React.Fragment>
  );
};
