import React from 'react'

type Props = {}

const page = (props: Props) => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
        <h1 className='text-4xl font-bold mb-8'>Login</h1>
        <form className='w-full max-w-sm items-center text-center'>
            <div className='mb-4'>
                <label>
                    Email
                </label>
                <input type="email" className='shadow border-1 w-full rounded-md py-2 px-3'></input>
            </div>

            <div>
                <button type='submit' onClick={(e) => {e.preventDefault();}}> Login</button>
            </div>
        </form>
    </div>
  )
}
export default page