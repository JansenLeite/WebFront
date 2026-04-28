function mostraPj(id){
    // $(".form1").hide(); // Oculta o elemento sem uso de efeito. 
    // $(".form1").show();  // Mostra o elemento sem uso de efeito.
    // $(".form1, .termo_cpf").fadeOut("slow"); // Oculta o elemento com uso de efeito.
    // $(".form1_1, .termo_cnpj").fadeIn("slow"); // Mostra o elemento com uso de efeito.
    $(".form1, .termo_cpf").hide();
    $(".form1_1, .termo_cnpj").fadeIn("slow");
}

function mostraPf(id){
    $(".form1_1, .termo_cnpj").hide();
    $(".form1, .termo_cpf").fadeIn("slow");
    
}

function enviarDadosCpf(){

    if(validaNomePf("pf_nome") && validarData("pf_dtnasc") 
        && validarCPF("pf_cpf") && validaGenero() 
        && validaDdd("pf_dd1") && validaDdd("pf_dd2") 
        && validaDdd("pf_cel") && validaDdd("pf_tel") 
        && validarEmail("inp_email") && validaToken("inp_token")
        && validaSenha("inp_pass1") && validaSenha("inp_pass2")
        && comparaSenhas() && validaTermoPf("chk_termo_cpf")
    ){
        var nome = document.getElementById("pf_nome").value;
        var dtnasc = document.getElementById("pf_dtnasc").value;
        var cpf = document.getElementById("pf_cpf").value;
        var gen_m = document.getElementById("pf_gen_m").value;
        var gen_f = document.getElementById("pf_gen_f").value;
        var gen_nf = document.getElementById("pf_gen_nf").value;
        var dd1 = document.getElementById("pf_dd1").value;
        var cel = document.getElementById("pf_cel").value;
        var dd2 = document.getElementById("pf_dd2").value;
        var tel = document.getElementById("pf_tel").value;
        var email = document.getElementById("inp_email").value;
        var token = document.getElementById("inp_token").value;
        var senha1 = document.getElementById("inp_pass1").value;
        var senha2 = document.getElementById("inp_pass2").value;
        var termo = document.getElementById("chk_termo_cpf").value;
    }



/*

    
    if(validarData("pf_dtnasc")){
        alert("Data válida!");
    }else{
        alert("Data com erro!");
    }
    

    if(validarCPF("pf_cpf")){
        alert("CPF correto!");
    }else{
        alert("CPF inválido!");
    }
    

    if(validarEmail("inp_email")){
        alert("E-Mail válido!!!");
    }else{
        alert("E-mail incorreto!");
    }
   
    if(validaGenero()){
        alert("Genero escolhido!");
    }else{
        alert("Escolha um GENERO!");
    }
 

    if(validaNomePf("pf_nome")){
        alert("Nome válido!");
    }else{
        alert("Erro: Digite um nome com no mínimo 5 caracteres!");
    }

    if(validaToken("inp_token")){
        alert("Token válido!");
    }else{
        alert("Token errado!");
    }
    
    
    if(validaSenha("inp_pass1")){
        alert("Senha1 correta!");
    }else{
        alert("Digite ao menos 8 caracteres!");
    }

    if(validaSenha("inp_pass2")){
        alert("Senha2 correta!");
    }else{
        alert("Digite ao menos 8 caracteres!");
    }

    if(comparaSenhas()){
        alert("Senhas são iguais!");
    }else{
        alert("Erro: As senhas não são iguais!");
    }
    

    if(validaTermoPf("chk_termo_cpf")){
        alert("Eu aceitei os termos!");
    }else{
        alert("Por favor, clique em aceitar os termos!");
    }
   

    if(validaDdd("pf_dd1")){
        alert("DDD correto!");
    }else{
        alert("DDD inválido!");
    }

    if(validaDdd("pf_dd2")){
        alert("DDD2 correto!");
    }else{
        alert("DDD2 inválido!");
    }

    if(validaCel("pf_cel")){
        alert("Celular correto!");
    }else{
        alert("Celular inválido!");
    }

    if(validaTel("pf_tel")){
        alert("Telefone correto!");
    }else{
        alert("Telefone inválido!");
    }

 




    var nome = document.getElementById("pf_nome").value;
    var dtnasc = document.getElementById("pf_dtnasc").value;
    var cpf = document.getElementById("pf_cpf").value;
    var gen_m = document.getElementById("pf_gen_m").value;
    var gen_f = document.getElementById("pf_gen_f").value;
    var gen_nf = document.getElementById("pf_gen_nf").value;
    var dd1 = document.getElementById("pf_dd1").value;
    var cel = document.getElementById("pf_cel").value;
    var dd2 = document.getElementById("pf_dd2").value;
    var tel = document.getElementById("pf_tel").value;
    var email = document.getElementById("inp_email").value;
    var token = document.getElementById("inp_token").value;
    var senha1 = document.getElementById("inp_pass1").value;
    var senha2 = document.getElementById("inp_pass2").value;
    var termo = document.getElementById("chk_termo_cpf").value;
    */
}

function enviarDadosCNPJ(){

if(validarCNPJ("pj_cnpj")){
    alert("CNPJ correto!");
}else{
    alert("CNPJ inválido!");
}

    var nome = document.getElementById("pj_nome").value;
    var dtnasc = document.getElementById("pj_resp").value;
    var cnpj = document.getElementById("pj_cnpj").value;
    var uf = document.getElementById("pj_uf").value;
    var icms = document.getElementById("pj_icms").value;
    var ie = document.getElementById("pj_ie").value;
    var dd1 = document.getElementById("pj_dd1").value;
    var cel = document.getElementById("pj_cel").value;
    var dd2 = document.getElementById("pj_dd2").value;
    var tel = document.getElementById("pj_tel").value;
}

function mostraSenha1(id){
    $("#" + id).hide();
    $("#pass_oculta1").show();
    document.getElementById("inp_pass1").type = "text";
}

function ocultaSenha1(id){
    $("#" + id).hide();
    $("#pass_mostra1").show();
    document.getElementById("inp_pass1").type = "password";
}

function mostraSenha2(id){
    $("#" + id).hide();
    $("#pass_oculta2").show();
    document.getElementById("inp_pass2").type = "text";
}

function ocultaSenha2(id){
    $("#" + id).hide();
    $("#pass_mostra2").show();
    document.getElementById("inp_pass2").type = "password";
}