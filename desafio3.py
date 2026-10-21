print("DESAFIO - Calculadora de Partidas Rankeadas")

def calcular_partidas_rankeadas(vitorias, derrotas):
    saldo_vitorias = vitorias - derrotas
    faixas = [
        (10, "Ferro"),
        (20, "Bronze"),
        (50, "Prata"),
        (80, "Ouro"),
        (90, "Diamante"),
        (100, "Lendário"),
    ]

    for limite, nivel in faixas:
        if vitorias <= limite:
            return saldo_vitorias, nivel

    return saldo_vitorias, "Imortal"


saldo_vitorias, nivel = calcular_partidas_rankeadas(80, 20)
print(f"O Herói tem de saldo de {saldo_vitorias} está no nível de {nivel}")