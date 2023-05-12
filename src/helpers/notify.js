import { toast } from "react-toastify";

const notify = (message, type) => {
  toast(`${message}`, {
    type,
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    theme: "light",
  });
};

export default notify;
