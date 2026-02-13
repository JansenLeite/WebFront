import math

PI = 3.14
VALOR = 2
raio = float(input("Digite o Raio da Circunferência: ").replace(",", "."))

# Formula C = 2.Pi.r

# Forma 1:
resultado1 = 2 * 3.14 * raio

# Forma 2:
resultado2 = VALOR * PI * raio

# Forma 3
resultado3 = VALOR * math.pi * raio

print("Resultado 1: ", resultado1)
print("Resultado 2: ", resultado2)
print("Resultado 3: ", resultado3)