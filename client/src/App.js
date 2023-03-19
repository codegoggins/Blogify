import Home from "./pages/Home";
import {
  createBrowserRouter,
  Navigate,
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
import { useSelector } from "react-redux";
import Trending from "./pages/Trending";
import Latest from "./pages/Latest";
import AllBlogs from "./pages/AllBlogs";

const Layout = () => {
  return (
     <>
      <Navbar/>
      <Outlet/>
      <Footer/>
     </>
  )
}

const ProtectedRoute = ({children}) => {
   const {currentUser} = useSelector((state)=>state.user);
   if(!currentUser){
      return <Navigate to='/'/>;
   }
   return children;
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
        element:
          <ProtectedRoute>
              <Write/>
          </ProtectedRoute>
      },
      {
        path:'/blog/:blogId',
        element:<SingleBlog/>
      },
      {
        path:'/trending',
        element:<Trending/>
      },
      {
        path:'/latest',
        element:<Latest/>
      },
      {
        path:'/all',
        element:<AllBlogs/>
      },
      {
        path:'/settings',
        element:
          <ProtectedRoute>
              <Settings/>
          </ProtectedRoute>
      },
      {
        path:'/myposts',
        element:
          <ProtectedRoute>
              <MyPosts/>
          </ProtectedRoute>
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
