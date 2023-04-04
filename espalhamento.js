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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

ligaParaCliente(...cliente.telefone)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}
console.log(encomenda)