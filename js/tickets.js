const regex = /^[0-9]*$/;

function calcular(){
    
    let cantidad = document.getElementById("cantidad").value;
    let descuento;
    let result = document.getElementById("resultado");

    //Supongo que no se pueden comprar mas de 1000 tickets por persona...
    if(!regex.test(cantidad) || cantidad=='' || parseInt(cantidad)>1000)
    {
        result.innerHTML="Total a pagar: Ingrese una cantidad válida" ;
    }
    else
    {
        if(document.getElementById('descuento').value=='estudiante'){
            descuento=0.2;
        }
        else if(document.getElementById('descuento').value=='trainee'){
            descuento=0.5;
        }
        else if(document.getElementById('descuento').value=='junior'){
            descuento=0.85;
        }           
        result.innerHTML="Total a pagar: $ "+200*parseInt(cantidad)*descuento;
    }
}  

function borrarResultado(){
    let result = document.getElementById("resultado");
    result.innerHTML="Total a pagar: $ ";
}