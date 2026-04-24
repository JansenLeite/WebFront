function validarData(id) {
  
    let data = document.getElementById(id).value;
  // Verifica o formato dd/mm/yyyy
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = data.match(regex);

  if (!match) return false;

  const dia = parseInt(match[1], 10);
  const mes = parseInt(match[2], 10) - 1; // mês começa em 0
  const ano = parseInt(match[3], 10);

  const dataObj = new Date(ano, mes, dia);

  // Verifica se a data realmente existe
  return (
    dataObj.getFullYear() === ano &&
    dataObj.getMonth() === mes &&
    dataObj.getDate() === dia
  );
}

function validarCPF(id) {
  
  let cpf = document.getElementById(id).value;
  // Verifica formato 000.000.000-00
  const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  if (!regex.test(cpf)) return false;

  // Remove caracteres não numéricos
  cpf = cpf.replace(/\D/g, "");

  // Elimina CPFs inválidos conhecidos (todos iguais)
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  let soma = 0;
  let resto;

  // Validação do 1º dígito
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  soma = 0;

  // Validação do 2º dígito
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }

  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true;
}

function validarCNPJ(id) {

  let cnpj = document.getElementById(id).value;  
  // Verifica o formato 00.000.000/0000-00
  const regex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
  if (!regex.test(cnpj)) return false;

  // Remove caracteres não numéricos
  cnpj = cnpj.replace(/\D/g, "");

  // Elimina CNPJs inválidos (todos os dígitos iguais)
  if (/^(\d)\1{13}$/.test(cnpj)) return false;

  let tamanho = cnpj.length - 2;
  let numeros = cnpj.substring(0, tamanho);
  let digitos = cnpj.substring(tamanho);

  let soma = 0;
  let pos = tamanho - 7;

  // Validação do 1º dígito verificador
  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(0)) return false;

  // Validação do 2º dígito verificador
  tamanho = tamanho + 1;
  numeros = cnpj.substring(0, tamanho);
  soma = 0;
  pos = tamanho - 7;

  for (let i = tamanho; i >= 1; i--) {
    soma += numeros.charAt(tamanho - i) * pos--;
    if (pos < 2) pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - (soma % 11);
  if (resultado != digitos.charAt(1)) return false;

  return true;
}