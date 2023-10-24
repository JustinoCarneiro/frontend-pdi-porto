import { createBrowserRouter, Outlet } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <p>Layout</p>
        <Outlet />
      </div>
    ),

    children: [
      {
        path: '/',
        element: <div>Home page</div>
      },
      {
        path: 'overview',
        element: (<div>Overview Page</div>)
      },

      {
        path: '/tracagem',
        element: (<>Tracagem Page</>)
      },

      {
        path: 'tracagem/:id',
        element: (<>terminal</>)
      }
    ]
  },
])