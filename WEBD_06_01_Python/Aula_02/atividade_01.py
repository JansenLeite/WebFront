nome    = str(input("Digite seu nome completo: "))
idade   = int(input("Digite sua Idade em anos: "))
peso    = float(input("Digite seu peso em KG: ").replace(",", "."))

# OPERADORES LÓGICOS

# > MAIOR
# < MENOR
# == IGUAL
# <= Menor ou Igual
# >= Maior ou Igual
# != DIFERENTE


# Caso o Cliente seja maior de 60 anos, status = "MELHOR IDADE"
if idade > 60:
    status = "MELHOR IDADE"
    
# Caso contrário, status = "SUPLENTE"
else:
    status = "SUPLENTE"

# Mostrar todos os dados:
print("Nome do Cliente: ", nome)
print("Idade do Cliente: ", idade, " anos.")
print("Peso do Clinete: ", peso, "KG.")
print("Status: ", status)