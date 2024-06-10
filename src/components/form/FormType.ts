import { HTMLInputTypeAttribute } from "react";

export interface IFromProps {
  onSubmit: (values: any) => void;
  fields: Array<FormField>;
  initialValues?: any;
  validationSchema?: any;
  onCancel: () => void;
}

export interface FormField {
  name: string;
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
}
