import Swal from "sweetalert2";
export const swal = (title, message, icon, callback) => {
  Swal.fire({
    title,
    text: message,
    icon,
  }).then((result) => {
    if (result.isConfirmed) {
      if (callback && typeof callback === "function") {
        callback();
      }
    }
  });
};
