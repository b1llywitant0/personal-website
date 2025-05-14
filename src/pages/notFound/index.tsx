import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-white text-center px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Page not found</p>
      <Link to="/" className="hover:underline">
        Go back home
      </Link>
    </div>
  )
}
