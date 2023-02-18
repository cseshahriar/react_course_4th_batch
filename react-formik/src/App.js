import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as Yup from "yup";

import CustomErrorMessage from "./components/CustomErrorMessage";

const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(70, 'Too Long!').required('Name is required'),
    phone: Yup.number().min(11, 'Invalid').required('Phone is required'),
    password: Yup.string().min(7, 'Password should be min 7').required('Password is required'),
    gender: Yup.string().required('Gender is required'),
    dob: Yup.date().required('Date of Birth is required'),
    income: Yup.string().required('Income is required'),
    about: Yup.string().required('About is required'),
    social: Yup.mixed().required('Social is required'),
    hobbies: Yup.array().required('Hobbies is required'),
});

function App() {
  return (
    <div className="container py-5">
      <div className="row">
          <div className="col-6 offset-3">
              <h1 className="text-center">Formik</h1>
              <Formik
                  initialValues={
                  {
                      name:"",
                      phone: "",
                      password: "",
                      gender: "",
                      dob: "",
                      income: 0,
                      about: "",
                      social: {
                          facebook: '',
                          twitter: ''
                      },
                      hobbies: [""]
                  }
                }
                  validationSchema={validationSchema}
                  onSubmit={(values) => {
                    console.log(values);
                  }}
              >
                  {
                      ({values, errors, touched }) => (
                          <Form>
                              <div className="form-group">
                                  <label className="form-label" htmlFor="name">Name: </label>
                                  <Field name="name" id="name" type="text" className="form-control" />
                                  <CustomErrorMessage name="name" />

                              </div>

                              <div className="form-group">
                                  <label className="form-label" htmlFor="phone">Phone: </label>
                                  <Field name="phone" type="tel" id="phone" className="form-control" />
                                  <CustomErrorMessage name="phone" />
                              </div>

                              <div className="form-group">
                                  <label className="form-label" htmlFor="password">Password: </label>
                                  <Field name="password" type="password" id="password" autoComplete="on" className="form-control" />
                                  <CustomErrorMessage name="password" />
                              </div>

                              <div className="form-check">
                                  <label className="form-label">Gender: </label> <br/>
                                  <Field type="radio" name="gender" value="Male" id="male" />
                                  <label className="form-check-label" htmlFor="male">Male</label>
                              </div>

                              <div className="form-check">
                                  <Field type="radio" name="gender" value="Female" id="female" />
                                  <label className="form-check-label" htmlFor="female">Female</label>
                              </div>
                              <CustomErrorMessage name="gender" />

                              <div className="form-group">
                                  <label className="form-label" htmlFor="dob">Date of Birth: </label>
                                  <Field name="dob" type="date" id="dob" className="form-control" />
                                  <CustomErrorMessage name="dob" />
                              </div>

                              <div className="form-group">
                                  <label className="form-label" htmlFor="income">Income</label>
                                  <Field name="income" as="select" id="income" className="form-select">
                                      <option value="0">TK 0</option>
                                      <option value="1000">TK 1000</option>
                                      <option value="10000">TK 10000</option>
                                  </Field>
                                  <CustomErrorMessage name="income" />
                              </div>

                              <div className="form-group">
                                  <label className="form-label" htmlFor="about">About</label>
                                  <Field name="about" as="textarea" id="about" className="form-control"/>
                                  <CustomErrorMessage name="about" />
                              </div>

                              <div className="form-group"> {/* nested field */}
                                  <label className="form-label" htmlFor="social">Social</label><br/>

                                  <label className="form-label" htmlFor="social">Facebook</label>
                                  <Field name="social.facebook" type="text"  className="form-control"/>

                                  <label className="form-label" htmlFor="social">Twitter</label>
                                  <Field name="social.twitter" type="text"  className="form-control"/>
                                  <CustomErrorMessage name="social" />
                              </div>

                              <div className="form-group">
                                  <label className="form-label" htmlFor="hobbies">Hobbies</label>
                                  <FieldArray
                                      name="hobbies"
                                      render={
                                          arrayHelpers => (
                                              <>
                                                  <div>
                                                      {
                                                          values.hobbies.map((hobby, index) => (
                                                              <div key={index}>
                                                                  <Field name={`hobbies.${index}`} />
                                                                  <button type="button" onClick={() => arrayHelpers.remove(index)}>-</button>
                                                              </div>
                                                          ))
                                                      }
                                                  </div>
                                                  <button type="button" onClick={() => arrayHelpers.push('')}>Add Hobby</button>
                                              </>
                                          )
                                    }
                                  />
                                  <CustomErrorMessage name="hobbies" />
                              </div>

                              <div className="form-group mt-3 text-center">
                                  <button type="submit" className="btn btn-success">
                                      Submit
                                  </button>
                              </div>
                      </Form>
                      )}
              </Formik>
          </div>
      </div>
    </div>
  );
}
export default App;