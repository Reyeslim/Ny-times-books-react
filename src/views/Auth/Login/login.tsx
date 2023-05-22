import { FC, memo } from 'react'
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
  Link,
} from './loginStyles'
import { InitialValues, ValidationSchema } from './constant'
import useLogic from './logic'
import { Props } from './types'

const Login: FC<Props> = ({ onLogin }) => {
  const { handleOnSubmit } = useLogic(onLogin)
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
              <InputController>
                <Label>Correo Electrónico</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                {errors?.email && <InputError>{errors.email}</InputError>}
              </InputController>
              <InputController>
                <Label>Contraseña</Label>
                <Input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                {errors?.password && <InputError>{errors.password}</InputError>}
              </InputController>
              <Button type="submit">Login</Button>
              <Link to="/signup">Crear cuenta</Link>
            </FormContent>
          </Form>
        )}
      </Formik>
    </Container>
  )
}

export default memo(Login)
