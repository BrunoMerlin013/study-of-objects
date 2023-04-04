const cliente = {
    nome: "André",
    idade: 32,
    cpf: "43784350830",
    email: "bruno@gmail.com",
}

 console.log(`O nome do cliente é ${cliente["nome"]} e ele tem ${cliente["idade"]} anos`)

 const chaves = ["nome", "idade", "cpf", "email"];

 chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})
