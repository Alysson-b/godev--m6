// funçao normal //
// aqui o this vai se referir ao contexto da funçao, e nao ao obejeto

function contadora() { 
    this.contagem = 0
    setInterval(function(){
        this.contagem++
        console.log(this.contagem)
    }, 2000)
}

let contar = new contadora()


// arrow funtions // 
// ja aqui refere-se ao contexto da funçao 

function contadora() {
    this.contagem = 0
    setInterval(() => {
        this.contagem++
        console.log(this.contagem)
    }, 2000)

}
let Contar = new contadora()


// outro exemplo que se refere ao objeto //

const menina = {
    nome: 'ALICE',
    cumprimentar: function(){
        console.log('olá, ' + this.nome)
    }
}
menina.cumprimentar();

// outro exemplo de uma arrow //

const menino = {
    none: 'joao',
    cumprimentar: () =>{
        console.log('ola', + this.nome)
    }

};

menino.cumprimentar();