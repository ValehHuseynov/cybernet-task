import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const initailFormValue = {
  name: "",
  placeholder: "",
  type: "input",
};

const AddForm = ({ onSetInputes }) => {
  const CreateSchema = Yup.object({
    name: Yup.string().required("Required"),
    placeholder: Yup.string().required("Required"),
    type: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: initailFormValue,
    validationSchema: CreateSchema,
    onSubmit: (values) => {
      console.log(values);
      const newInput = {
        ...values,
        id: Math.random(100),
      };
      onSetInputes(newInput);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="Form-group">
        <label>Input Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onBlur={formik.handleBlur}
          value={formik.values.name}
          onChange={formik.handleChange}
        />
      </div>
      <div className="Form-group">
        <label>Input Placeholder</label>
        <input
          type="text"
          id="placeholder"
          name="placeholder"
          onBlur={formik.handleBlur}
          value={formik.values.placeholder}
          onChange={formik.handleChange}
        />
      </div>
      <div className="Form-group">
        <label>Input Type</label>
        <select
          id="type"
          name="type"
          onBlur={formik.handleBlur}
          value={formik.values.type}
          onChange={formik.handleChange}
        >
          <option value="input">Input</option>
          <option value="textarea">Textarea</option>
          <option value="date">Datepicker</option>
          <option value="email">Email</option>
        </select>
      </div>
      <div>
        <button>Add to Form</button>
      </div>
    </form>
  );
};

export default AddForm;
