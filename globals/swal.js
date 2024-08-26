import Swal from "sweetalert2";

export const swal = (title, message, icon) => {
  Swal.fire(title, message, icon);
};
