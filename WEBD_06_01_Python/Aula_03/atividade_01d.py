start = True
campo = 1

while start:
    match campo:
        case 1:
            try:
                nome = str(input("Digite seu nome completo: "))
                campo += 1
            except:
                print("Nome inválido. Por favor, digite novamente!\n")
        case 2:
            try:
                peso = float(input("Digite seu peso em KG: ").replace(",", "."))
                campo += 1
            except:
                print("Peso inválido. Por favor, digite um peso válido!\n")
        case 3:
            try:
                idade = int(input("Digite sua idade em anos: "))
                if idade >= 20:
                    campo += 1
                else:
                    print("É permitido apenas idade à partir de 20 anos.")
            except:
                print("Idade inválida. Por favor, digite uma idade válida!\n")
        case 4:
            try:
                altura = float(input("Digite sua altura em metros: ").replace(",", "."))
                start = False
            except:
                print("Altura inválida. Por favor, digite uma altura válida!\n")


# PROCESSAMENTO

# PESO DIVIDO PELA ALTURA AO QUADRADO É IGUAL AO IMC

imc = peso / altura**2

if idade >=20 and idade <= 60:
    if imc < 18.5:
        classificacao = "Baixo Peso"
    elif imc >= 18.5 and imc <= 24.99:
        classificacao = "Peso Normal"
    elif imc >= 25 and imc <= 29.99:
        classificacao = "Sobrepeso"
    else:
        classificacao = "Obesidade"
else:
    if imc < 22:
        classificacao = "Baixo Peso"
    elif imc >= 22 and imc <= 27:
        classificacao = "Peso Normal"
    elif imc >= 27 and imc <= 29.99:
        classificacao = "Sobrepeso"
    else:
         classificacao = "Obesidade"


print("########## RESULTADO #############\n")
print("Nome do paciente: ", nome)
print("Idade do paciente: ", idade, " anos.")
print("Peso do paciente: ", peso, "KG")
print("Valor do IMC: ", imc)
print("Classificação: ", classificacao)