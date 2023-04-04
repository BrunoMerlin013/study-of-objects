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

const chavesDoObjeto = Object.keys(cliente)

if(!chavesDoObjeto.includes("enderecos")){
    console.error("Erro. É necessario ter um email cadastado")
}
console.log(chavesDoObjeto)

