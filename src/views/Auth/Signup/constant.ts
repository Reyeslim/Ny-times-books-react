import { object, string } from 'yup'
export const InitialValues = {
  email: '',
  password: '',
}

export const ValidationSignupSchema = object({
  name: string(),
  email: string().email('No es un email válido').required(),
  password: string().required(),
})
