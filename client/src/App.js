import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { auth } from "./config/firebase.config";
import { isLoginUser } from "./redux/features/auth/authSlice";
import { userInDB } from "./redux/services/authService";
import RootRouter from "./Routes/RootRouter";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();

        if (token) {
          localStorage.setItem("token", JSON.stringify(token));
          dispatch(userInDB(token));
        }
      } else {
        dispatch(isLoginUser(null));
      }
    });

    return () => subscribe();
  }, [dispatch]);
  return <RouterProvider router={RootRouter} />;
}

export default App;
