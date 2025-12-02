import './App.css';
import {createBrowserRouter, RouterProvider}from "react-router-dom"
import User2 from './Components/getuser/User2';
import Add2 from './Components/adduser/Add2';
import Edit from './Components/updateuser/Edit';









function App() {

  const route = createBrowserRouter([
    {
      path:"/",
       element: <User2 />,
    },
    {
      path:"/add",
      element:<Add2 />,
    },
    
    {
      path:"/edit/:id",
      element:<Edit/>,
    },

  ])
  return (
    <div className="App">
      <RouterProvider router={route}>
      </RouterProvider>
    </div>
  );
}

export default App;
