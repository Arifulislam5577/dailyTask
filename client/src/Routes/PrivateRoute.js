import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useSelector((state) => state.auth);
  if (loader) {
    return (
      <section className="flex items-center justify-center my-20">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-red-600"></div>
      </section>
    );
  } else {
    return user ? children : <Navigate to="/login" />;
  }
};

export default PrivateRoute;
