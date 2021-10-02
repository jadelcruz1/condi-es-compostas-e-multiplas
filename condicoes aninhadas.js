var agora = new Date() // pegar a hora do sistema
var hora = agora.getHours() // pegar a hora do sistema
var D = 3
console.log(`pagamento será em ${D}`) 
if (D < 1){ 
    console.log('abir caixa')
} else if (D < 2){
    console.log('debito')
} else {
    console.log('credito')

}