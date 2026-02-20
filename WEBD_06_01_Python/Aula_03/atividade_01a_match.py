start = True
campo = 1
while start:
    match campo:
        case 1:
            try:
                nome = input("Digite seu nome completo: ")
                nome_tratado = nome.replace(" ", "")
                if nome_tratado.isalpha():
                    campo +=1
                else:
                    print("São aceitos apenas letras... Por favor, digite novamente!\n")
            except:
                print("Nome de usuario inválido!")
        case 2:
            try:
                idade = int(input("Digite sua idade em anos:"))
                campo +=1
            except:
                print("Idade digitada inválida!")
        case 3:
            try:
                peso = float(input("Digite seu peso em KG: ").replace(",", "."))
                start = False
            except:
                print("Peso digitado inválido!")

print("Meu nome é: ", nome)
print("Tenho: ", idade, " anos.")
print("Meu peso é: ", peso)
