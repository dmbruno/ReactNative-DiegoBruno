import {object, ref, string} from "yup"

export const registerSchema = object().shape({
    confirmPass:string().required("confirmacion requerida").oneOf([ref("password"), null],"El password no coincide"),
    password:string().required("la contraseña es requerida").min(8, "Minimo 8 caracteres"),
    email:string().required("el email es requerido").email("Debe ser un email valido")

})

export const loginSchema = object().shape({
    
    password:string().required("la contraseña es requerida").min(8, "Minimo 8 caracteres"),
    email:string().required("el email es requerido").email("Debe ser un email valido")

})