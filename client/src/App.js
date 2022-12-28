import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { auth } from "./config/firebase.config";
import { isLoginUser } from "./redux/features/auth/authSlice";
import RootRouter from "./Routes/RootRouter";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          displayName: user.displayName,
          photoURL: user.photoURL,
          email: user.email,
        };
        dispatch(isLoginUser(userInfo));
      } else {
        dispatch(isLoginUser(null));
      }
    });
  }, [dispatch]);
  return <RouterProvider router={RootRouter} />;
}

export default App;
