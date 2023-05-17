import { FC, memo, useCallback } from 'react'
import { Formik } from 'formik'
import Button from '../../../components/Button/button'
import {
  Container,
  Form,
  FormContent,
  Input,
  InputController,
  InputError,
  Label,
  Legend,
  LegendController,
  Link,
} from './loginStyles'
import { InitialValues, ValidationSchema } from './constant'

const Login: FC = () => {
  const handleOnSubmit = useCallback((values: {email: string; password: string}) => {
    console.log(values)
  }, [])
  return (
    <Container>
      <Formik
        initialValues={InitialValues}
        validationSchema={ValidationSchema}
        onSubmit={handleOnSubmit}
      >
        {({ errors, handleSubmit, handleChange, values }) => (
          <Form onSubmit={handleSubmit}>
            <FormContent>
              <LegendController>
                <Legend>Inicia sesión</Legend>
              </LegendController>
              <InputController>
                <Label>Correo Electrónico</Label>
                <Input type="email" name="email" onChange={handleChange} value={values.email}/>
                {errors?.email && <InputError>{errors.email}</InputError>}
              </InputController>
              <InputController>
                <Label>Contraseña</Label>
                <Input type="password" name="password" onChange={handleChange} value={values.password}/>
                {errors?.password && <InputError>{errors.password}</InputError>}
              </InputController>
              <Button
                type="submit"
                onClick={() => console.log(values)}
              >
                Login
              </Button>
              <Link to="/signup">Crear cuenta</Link>
            </FormContent>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default memo(Login)
