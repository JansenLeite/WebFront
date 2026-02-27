start = True
campo = 1

while start:
    match campo:
        
        case 1:
            try:
                # Receber o primeiro número.
                num1 = float(input("Digite o primeiro número: ").replace(",", "."))
                campo += 1
            except:
                print("Valor inválido... por favor tente novamente!\n")
        
        case 2:
            print("\nEscolha uma operação:")
            print(" * => Multiplicação")
            print(" / => Divisão")
            print(" + => Adição")
            print(" - => Subtração\n")
            try:
                # Receber o operador.
                oper = str(input("Digite um operador: "))

                # escolhendo o jeito
                jeito = 1
                match jeito:
                    case 1:
                        # Jeito 1
                        if oper == "*":
                            campo += 1
                        elif oper == "/":
                            campo += 1
                        elif oper == "+":
                            campo += 1
                        elif oper == "-":
                            campo += 1
                        else:
                            print("Operdador inválido... Digite um operador válido!\n")
                    case 2:
                        # Jeito 2
                        if oper == "*" or oper == "/" or oper == "+" or oper == "-":
                            campo += 1
                        else:
                            print("Operdador inválido... Digite um operador válido!\n")
                    case 3:
                        # Jeito 3
                        match oper:
                            case "*" | "/" | "+" | "-":
                                campo += 1
                            case _:
                                print("Operdador inválido... Digite um operador válido!\n")
                
            except:
                print("Operador inválido... por favor tente novamente!\n")
        
        case 3:
            try:
                # Receber o segundo número.
                num2 = float(input("Digite o segundo número: ").replace(",", "."))
                start = False
            except:
                print("Valor inválido... por favor tente novamente!\n")


# Realizar os cálculos conforme o operador.
match oper:
    case "*":
        resultado = num1 * num2
    case "/":
        resultado = num1 / num2
    case "+":
        resultado = num1 + num2
    case "-":
        resultado = num1 - num2

# Exibir os dados.
print(num1, oper, num2, " = ", resultado)