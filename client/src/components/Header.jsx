// eslint-disable-next-line no-unused-vars
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between max-w-6xl mx-auto p-3'>
            <Link to='/' >
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-slate-400'>Dadi</span>
                    <span className='text-slate-700'>Makelar</span>
                </h1>
            </Link>
            <form className='bg-slate-100 p-3 rounded-lg flex items-start'>
                <input type="text" placeholder='Search... ' className='bg-transparent focus:outline-none w-24 sm:w-64' />
                <FaSearch className='text-slate-600' />
            </form>
            <ul className='flex gap-4'>
                <Link to='/' >
                    <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
                </Link>
                <Link to='/about' >
                    <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
                </Link>
                <Link to='/sign-in'>
                    <li className='hidden sm:inline text-slate-700 hover:underline'> Signin</li>
                </Link>
            </ul>
        </div>
    </header>
  )
}
