import { Link,useLocation } from 'react-router-dom';


function ErrorPage() {
  const location = useLocation();
  // console.log('User navigated to:', location.pathname);
  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-300 to-blue-500 flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white">404</h1>
        <p className="text-2xl md:text-3xl font-medium text-white mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="text-lg text-white mb-6">It looks like you've found a glitch in the {location.pathname.split('/')} page.</p>
        <Link to="/" className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
          Back to Home
        </Link>
      </div>
      <div className="mt-12 flex justify-center items-center">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="404 Animation"
          className="w-80 h-80 rounded-md"
        />
      </div>
    </div>
  );
}

export default ErrorPage;
