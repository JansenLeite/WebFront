# Receber o nome do aluno
nome = str(input("Digite o nome do aluno: "))

# Receber a Nota 1
nota1 = int(input("Digite a NOTA 01: "))

# Receber a Nota 2
nota2 = int(input("Digite a NOTA 02: "))

# Receber a Nota 3
nota3 = int(input("Digite a NOTA 03: "))

# Realizar o Calculo da Média
media = (nota1 + nota2 + nota3) / 3

# JEITO 1 - Retorno o Status
if media > 6:
    status = "APROVADO"
elif media < 4:
    status = "REPROVADO"
else:
    status = "RECUPERAÇÃO"

# JEITO 2 - Retorno o Status
if media > 6:
    status = "APROVADO"
elif media >= 4 and media <= 6:
    status = "RECUPERAÇÃO"
else:
    status = "REPROVADO"


# Mostrar os Dados
print("Nome do aluno: ", nome)
print("Média: ", media)
print("Status: ", status)
