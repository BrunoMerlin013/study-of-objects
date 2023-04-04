const cliente = {
    nome: "Bruno",
    idade: 20,
    email: "bm@hotmail.com",
    telefone: ["974251415", "998564732"],
}

    cliente.enderecos = [
    {
    rua: "R. da Liberdade",
    numero: 7,
    apartamento: true,
    complemento: "ap 61",
},
]

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]} `)
    }
}