import { createBrowserRouter } from "react-router-dom";
import {
  RootLayout,
  Home,
  Overview,
  Tracagem,
  Terminal,
  Page404,
  TerminalOpertion
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
        path: 'terminal',
        element: <Tracagem />,
        children: [
          {
            path: '/terminal',
            element: <Terminal />
          },
          {
            path: '/terminal/:code',
            element: <TerminalOpertion />,
          },

        ]
      },

      {
        path: '*',
        element: <Page404 />,
      }

    ]
  },
])