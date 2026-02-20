import math

start = True
# Entrada dos Dados
while start:
    try:
        raio = float(input("Digite o raio da Circunferência: ").replace(",", "."))
        start = False
    except:
        print("Valor inválido! Por favor, digite novamente...\n")

# Processamento dos Dados
resultado = 2 * math.pi * raio

# Saída dos Dados

print("O valor da cirunferência é: ", resultado)

