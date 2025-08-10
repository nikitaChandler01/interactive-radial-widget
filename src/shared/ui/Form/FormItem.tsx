import React from "react";
import "./FormItem.scss";

interface IFormItem {
  children: React.ReactNode;
}

const FormItem: React.FC<IFormItem> = ({ children }) => {
  return <div className="form-item">{children}</div>;
};

export default FormItem;
