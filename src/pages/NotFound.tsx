
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

// Title component for dynamic page title
const Title = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  
  return null;
};

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Title title="Page Not Found - BoxWave" />
      <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-md w-full text-center">
          <h1 className="text-9xl font-extrabold text-primary">404</h1>
          <h2 className="text-3xl font-bold mt-8 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/"
              className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
            >
              Go to Home
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
