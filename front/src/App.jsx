import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Routes";
import "./styles/css/style.css";
function App() {
  const routesa = createBrowserRouter(Routes);
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routesa} />
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
