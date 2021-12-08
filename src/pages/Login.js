import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Button } from '@mui/material'

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
    <Formik initialValues={initialValues} validate={validate} onSubmit={() => console.log('submitting')}>
      {({ isSubmitting }) => (
        <Form>
          <Field name="user" type="text" placeholder="Username" />
          <ErrorMessage name="user" component="div" />
          <Field name="password" type="password" placeholder="Password" />
          <ErrorMessage name="password" component="div" />

          <Button type="submit" disabled={isSubmitting}>
            Login
          </Button>
        </Form>
      )}
    </Formik>
  )
}
