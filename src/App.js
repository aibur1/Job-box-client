import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import {onAuthStateChanged } from "firebase/auth";
import auth from "./firebase/firebase.confiq";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import { getUser,toggleLoading } from "./features/auth/authSlice";



function App() {
  const dispatch = useDispatch();

useEffect(()=> {
  onAuthStateChanged(auth, (user)=> {
       if(user){
         dispatch(getUser(user.email));
       }
       else{
        dispatch(toggleLoading());
       }
  })

}, []);

  return (
    <>
    <Toaster/>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
