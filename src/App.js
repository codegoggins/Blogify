import Home from "./pages/Home";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Post from "./pages/Post";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";


const Layout = () => {
  return (
     <>
      <Navbar/>
      <Outlet/>
      <Footer/>
     </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
      {
        path:'/post',
        element:<Post/>
      },
    ]
  },
]);


function App() {
  return (
    <div>
          <RouterProvider router={router}/>   
    </div>
  );
}

export default App;
