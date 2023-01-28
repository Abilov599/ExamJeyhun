import React from "react";
import "./index.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { postData } from "../../redux/slice/dataSlice";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddPage = () => {
  const disp = useDispatch();
  const navigate = useNavigate();
  const addBlogSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    description: Yup.string()
      .min(2, "Too Short!")
      .max(1000, "Too Long!")
      .required("Required"),
    price: Yup.number()
      .min(2, "Too Short!")
      .max(1000, "Too Long!")
      .required("Required"),
    img: Yup.string().url("URL Required!").required("Required"),
  });
  return (
    <main id="add-blog">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add Page</title>
      </Helmet>
      <div className="container">
        <Formik
          initialValues={{
            name: "",
            description: "",
            price: "",
            img: "",
          }}
          validationSchema={addBlogSchema}
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);

            disp(postData(values));
            navigate("/");
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <h1>Add Blog</h1>
              <Field placeholder="Name" name="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field placeholder="Descriptin" name="description" />
              {errors.description && touched.description ? (
                <div>{errors.description}</div>
              ) : null}
              <Field name="price" type="number" placeholder="Price" />
              {errors.price && touched.price ? <div>{errors.price}</div> : null}
              <Field name="img" placeholder="Img Url" />
              {errors.img && touched.img ? <div>{errors.img}</div> : null}
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default AddPage;
