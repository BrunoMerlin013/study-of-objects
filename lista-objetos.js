const cliente = {
    nome: "Bruno",
    idade: 24,
    email: "bm@hotmail.com",
    telefone: ["974251415", "998564732"],
}

cliente.enderecos = [{
    rua: "R. da Liberdade",
    numero: 7,
    apartamento: true,
    complemento: "ap 61",
}]

cliente.enderecos.push({
    rua: "R. Estácio de Sá",
    numero: 182,
    apartamento: false,
});

const listaApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true)


console.log(listaApartamentos)