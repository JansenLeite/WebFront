function mascaraData(id){
    let campo = document.getElementById(id);
    let valor = campo.value.replace(/\D/g, ""); // Remove caracteres não numéricos (letras e outros); 
    if(valor.length > 8){
        valor = valor.slice(0, 8);              // Limita até 8 digitos.
    }

    // Aplicando formatação no padrão dd/mm/yyyy.
    if(valor.length >= 5){
        // Insere a segunda barra à partir da digitação do 5 digito.
        campo.value = valor.replace(/^(\d{2})(\d{2})(\d{1,4})$/, "$1/$2/$3"); 
    }else if(valor.length >= 3){
        // Insere a primeira barra à partir da digitação do 3 digito.
        campo.value = valor.replace(/^(\d{2})(\d{1,2})$/, "$1/$2"); 
    }else{
        campo.value = valor;
    }
}