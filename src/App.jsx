import { ToastContainer, Zoom } from "react-toastify";
import AppRouter from "./routes/AppRouter";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <AppRouter />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </>
  );
}
