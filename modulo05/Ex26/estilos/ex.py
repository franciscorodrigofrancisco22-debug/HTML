pergunt = input("Ola usuario desejarias entrar?: ")
if pergunt == "sim" or pergunt == "SIM":
    print("Voce esta dentro do programa")


moed = input("Digite a primeira moeda: ")
med2 = input("para qual moeda")
val = float(input("Qual e o valor"))

eurodo = 1.67 * val
dolareu = 1.23 * val

if moed == "dolar":
    print("O valor em euro sera", eurodo)

if moed == "euro":
    print("O valor em dolar sera", dolareu)



