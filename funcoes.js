const cliente = {
    nome: "Bruno",
    idade: 24,
    email: "bm@hotmail.com",
    telefone: ["974251415", "998564732"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if (valor > this.saldo) {
            console.log("Saldo insuficiente")
        }
        else {
            this.saldo -= valor;
            console.log(`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(25)