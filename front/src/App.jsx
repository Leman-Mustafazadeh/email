import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Routes";
import "./styles/css/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
function App() {
  const routesa = createBrowserRouter(Routes);
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routesa} />
      </QueryClientProvider>
    </>
  );
}

export default App;
