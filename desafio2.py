print("DESAFIO - Calculadora de Partidas Rankeadas")

def calcular_partidas_rankeadas(vitorias, derrotas):
    saldo_vitorias = vitorias - derrotas

    if vitorias <= 10:
        nivel = "Ferro"
    elif vitorias <= 20:
        nivel = "Bronze"
    elif vitorias <= 50:
        nivel = "Prata"
    elif vitorias <= 80:
        nivel = "Ouro"
    elif vitorias <= 90:
        nivel = "Diamante"
    elif vitorias <= 100:
        nivel = "Lendário"
    else:
        nivel = "Imortal"

    return saldo_vitorias, nivel


saldo_vitorias, nivel = calcular_partidas_rankeadas(1000, 20)
print(f"O Herói tem de saldo de {saldo_vitorias} está no nível de {nivel}")