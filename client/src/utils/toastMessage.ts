import { toast } from "react-toastify";

export const setToastMessage = (type: string, msg: string) => {
  const setToastTime = 2000;
  switch (type) {
    case "success":
      toast.success(msg, { autoClose: setToastTime });
      break;
    case "error":
      toast.error(msg, { autoClose: setToastTime });
      break;
    default:
      toast.info("Check again", { autoClose: setToastTime });
  }
};
