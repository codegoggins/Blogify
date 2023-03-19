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
import MyPosts from "./pages/MyPosts";


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
        path:'/blog/:blogId',
        element:<SingleBlog/>
      },
      {
        path:'/settings',
        element:<Settings/>
      },
      {
        path:'/myposts',
        element:<MyPosts/>
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
