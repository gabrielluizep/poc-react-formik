import React from 'react'
import { Form, Formik, useField } from 'formik'
import { Button, Grid, TextField, Typography } from '@mui/material'

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

const CustomField = ({ placeholder, ...props }) => {
  const [fields, meta] = useField(props)

  const errorText = meta.error && meta.touched ? meta.error : ''

  return (
    <TextField
      sx={{ marginBottom: '25px' }}
      label={placeholder}
      placeholder={placeholder}
      helperText={errorText}
      error={!!errorText}
      variant="outlined"
      {...fields}
    />
  )
}

export const Login = () => {
  return (
    <Formik initialValues={initialValues} validate={validate} onSubmit={() => console.log('submitting')}>
      {({ isSubmitting }) => (
        <Form>
          <Grid
            sx={{
              height: '100vh',
            }}
            container
            justifyContent="center"
            alignItems="center"
          >
            <Grid
              sx={{
                backgroundColor: '#f8f8f2',
                padding: '60px 30px',
              }}
              container
              direction="column"
              item
              xs={4}
            >
              <Typography sx={{ marginBottom: '25px' }} variant="h2">
                Login
              </Typography>
              <CustomField name="user" type="text" placeholder="Username" />
              <CustomField name="password" type="password" placeholder="Password" />
              <Button size="large" variant="contained" type="submit" disabled={isSubmitting}>
                Login
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}
