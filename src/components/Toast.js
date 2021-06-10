import {ERROR, SUCCESS} from "../Context/types";
import {toast} from "react-toastify";

const toastConfig = {
    position: "top-right",
    autoClose: 2000,
    pauseOnHover: true,
}

const makeToast = (type, message) => {
    switch (type) {
        case ERROR:
            return toast.error(message, toastConfig);
        case SUCCESS:
            return toast.success(message, toastConfig);
    }
}

export default makeToast;