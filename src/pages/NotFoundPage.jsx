
import {  Link } from 'react-router-dom';




const NotFoundPage = () => {
  return (
   
<section className="text-center flex flex-col justify-center items-center h-96">
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 stroke-very-dark-blue-text dark:stroke-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
  </svg>
      <h1 className="text-6xl font-bold mb-4 text-very-dark-blue-text dark:text-white">404 Not Found</h1>
      <p className="text-xl mb-5 text-very-dark-blue-text dark:text-white">This page does not exist</p>
      <Link
        to="/"
        className="dark:text-very-dark-blue-text text-white bg-very-dark-blue-bg dark:bg-white hover:bg-dark-blue rounded-md px-3 py-2 mt-4"
        >Go Back
        </Link>
      
</section>
  )
}

export default NotFoundPage