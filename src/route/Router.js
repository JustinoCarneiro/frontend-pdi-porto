import { createBrowserRouter } from "react-router-dom";
import { 
  RootLayout, 
  Home, 
  Overview, 
  Tracagem, 
  Terminal 
} from "../pages";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'overview',
        element: <Overview />
      },

      {
        path: '/tracagem',
        element: <Tracagem />
      },

      {
        path: 'tracagem/:id',
        element: <Terminal />
      }
    ]
  },
])