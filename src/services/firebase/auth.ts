import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import app from './firebase'

const auth = getAuth(app)

export async function signup(email: string, password: string) {
  try {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    )

    return credentials?.user ? credentials.user : null

  } catch (err) {
    console.log(err)
  }
}

export async function login(email: string, password: string) {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
  
      return credentials?.user ? credentials.user : null
  
    } catch (err) {
      console.log(err)
    }
  }