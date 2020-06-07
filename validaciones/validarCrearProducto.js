export default function validarCrearProducto(valores) {
    let errores = {};

    //Validar el nombre del usuario
    if(!valores.nombre){
        errores.nombre = "El Nombre es obligatorio"
    }

    //Validar  la empresa
    if(!valores.empresa){
        errores.empresa = "El Nombre de la Empresa es obligatorio"
    }

    //Validar URL
    if(!valores.url){
        errores.url = "La URL del producto es obligatorio"
    }else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(valores.url)) {
        errores.url = "URL mal formateada o no valida";
    }

    //Validar Descripcion
    if(!valores.descripcion) {
        errores.descripcion = "Agrega un descripcion de tu producto"
    }

    return errores;
}

