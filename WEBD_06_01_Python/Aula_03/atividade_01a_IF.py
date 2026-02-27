inicio = True
while inicio:
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

    finaliza = True
    while finaliza:
        print("Deseja finalizar o programa?\n")
        confirma = str(input("Digite S (finalizar) ou N (Iniciar Novamente)"))

        if confirma == "S" or confirma == "s":
            inicio = False
            finaliza = False
            print("Obrigado por utilizar o programa #RECEBE NOMES. Até a proxima!")
        else:
            print("Opção inválida...")