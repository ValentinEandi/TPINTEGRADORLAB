function LimpiarFormulario(){
    let formulario=document.getElementById("formulario_ayuda");
    formulario.reset();
    let cartelRoajo=document.getElementById("Emailerror");
    cartelRoajo.style.display="none";
    
}
function EnviarFormulario(){
    let email=document.getElementById("email").value;
    if (!email.includes("@")){
        let cartelRoajo=document.getElementById("Emailerror");
        cartelRoajo.style.display="block";
        
    }else if (email.includes("@")) {
        let cartelRoajo=document.getElementById("Emailerror");
        cartelRoajo.style.display="none";
        
    }

}