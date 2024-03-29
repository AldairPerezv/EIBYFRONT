import Swal from "sweetalert2";




export function convertToBoolean(input: string): boolean{
    try {
        return JSON.parse(input.toLocaleLowerCase());
    }
    catch (e) {
        return false;
    }
}


export function alert_succes(title: string, text?: string){
    Swal.fire({
        icon: "success",
        title: "",
        text: text,
        showConfirmButton: false,
        //timer: timer == null || timer == undefined ? 1500 : timer
      });
} 

export function alert_warning(title: string, text?: string){
    Swal.fire({
        icon: "warning",
        title: "",
        text: "",
        position: 'top-end',
        showConfirmButton: false,
        //timer: timer == null || timer == undefined ? 3000 : timer
      });
} 

export function alert_error(title: string, text?: string){
    Swal.fire({
        icon: "error",
        title: "",
        text: "",
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000 
      });
}  