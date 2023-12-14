import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
import TransactionPage from "./pages/Transaction";
import MenuCreatePage from "./pages/MenuCreate";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/transaksi", element: <TransactionPage /> },
        { path: "/food/create", element: <MenuCreatePage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
