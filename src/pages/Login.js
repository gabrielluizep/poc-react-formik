import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'

const initialValues = {
  user: '',
  password: '',
}

const validate = (values) => {
  const errors = {}

  if (!values.user) {
    errors.user = 'Obrigatório'
  }

  if (!values.password) {
    errors.password = 'Obrigatório'
  }

  return errors
}

export const Login = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)' }}>
      <div
        style={{
          gridColumn: '4 / 10',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Formik initialValues={initialValues} validate={validate} onSubmit={() => console.log('submitting')}>
          {({ isSubmitting }) => (
            <>
              <Form>
                <Field name="user" type="text" placeholder="Username" />
                <ErrorMessage name="user" component="div" />
                <Field name="password" type="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" />

                <button type="submit" disabled={isSubmitting}>
                  Login
                </button>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  )
}
