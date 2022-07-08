import { toast } from "react-toastify";
export const notify = () => {
  toast("🦄 Wow so easy!", {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
