import Home from "./pages/Home";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Write from "./pages/Write";
import SingleBlog from "./pages/SingleBlog";
import Settings from "./pages/Settings";
import About from "./pages/About";


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
        path:'/write',
        element:<Write/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/:postId',
        element:<SingleBlog/>
      },
      {
        path:'/settings',
        element:<Settings/>
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
