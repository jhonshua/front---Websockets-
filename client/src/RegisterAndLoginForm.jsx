import { useContext, useState } from 'react'
import axios from 'axios'
import { UserContext } from './UserContext.jsx'
import logo from '../src/assets/logos/LogoApp.png'
import Swal from 'sweetalert2'

export default function RegisterAndLoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoginOrRegister, setIsLoginOrRegister] = useState('login')
  const [shown, setShown] = useState(false)
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext)

  const switchShown = () => setShown(!shown)

  async function handleSubmit(ev) {
    ev.preventDefault()
    const url = isLoginOrRegister === 'register' ? 'register' : 'login'

    if (isLoginOrRegister === 'login') {
      try {
        const { data } = await axios.post(url, { username, password })
        setLoggedInUsername(username)
        setId(data.id)
      } catch (error) {
        console.log(error.response.data.message)
        return Swal.fire({
          title: `${error.response.data.message}`,
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'ok',
        })
      }
    } else {
      try {
        const { data } = await axios.post(url, { username, password })
        setLoggedInUsername(username)
        setId(data.id)
      } catch (error) {
        return Swal.fire({
          title: `${error.response.data.message}`,
          text: 'Do you want to continue',
          icon: 'error',
          confirmButtonText: 'ok',
        })
      }
    }

    const { data } = await axios.post(url, { username, password })
    setLoggedInUsername(username)
    setId(data.id)
  }

  return (
    <div className="bg-[url('./src/assets/background/fondo.jpg')] h-screen flex items-center">
      <div class='w-full max-w-xs m-auto bg-indigo-100 rounded p-5'>
        <header>
          <img class='w-20 mx-auto mb-5' src={logo} />
        </header>
        <form className=' w-64 mx-auto mb-12' onSubmit={handleSubmit}>
          <label class='block mb-2 text-indigo-500' for='username'>
            Username
          </label>
          <input
            value={username}
            onChange={ev => setUsername(ev.target.value)}
            type='text'
            placeholder='username'
            className='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
            required
          />
          <label class='block mb-2 text-indigo-500' for='password'>
            Password
          </label>
          <input
            value={password}
            onChange={ev => setPassword(ev.target.value)}
            type={shown ? 'text' : 'password'}
            placeholder='password'
            className='w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300'
            required></input>
          <button onClick={switchShown}>{shown ? 'Ocultar' : 'Mostrar'}</button>
          <br />
          <br />
          <button className='bg-blue-500 text-white block w-full rounded-sm p-2'>
            {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
          </button>
          <div className='text-center mt-2'>
            {isLoginOrRegister === 'register' && (
              <div>
                Already a member?
                <button
                  className='ml-1'
                  onClick={() => setIsLoginOrRegister('login')}>
                  Login here
                </button>
              </div>
            )}
            {isLoginOrRegister === 'login' && (
              <div>
                Dont have an account?
                <button
                  className='ml-1'
                  onClick={() => setIsLoginOrRegister('register')}>
                  Register
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}
