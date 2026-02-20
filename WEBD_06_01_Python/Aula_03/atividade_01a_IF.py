start = True
campo = 1
while start:
    if campo == 1:
        try:
            nome = str(input("Digite seu nome completo: "))
            campo +=1
        except:
            print("Nome de usuario inválido!")
    if campo == 2:
        try:
            idade = int(input("Digite sua idade em anos:"))
            campo +=1
        except:
            print("Idade digitada inválida!")
    if campo == 3:
        try:
            peso = float(input("Digite seu peso em KG: ").replace(",", "."))
            start = False
        except:
            print("Peso digitado inválido!")

print("Meu nome é: ", nome)
print("Tenho: ", idade, " anos.")
print("Meu peso é: ", peso)