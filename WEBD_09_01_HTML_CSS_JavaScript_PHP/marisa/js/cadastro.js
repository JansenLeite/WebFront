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
    */

    if(validarEmail("inp_email")){
        alert("E-Mail válido!!!");
    }else{
        alert("E-mail incorreto!");
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