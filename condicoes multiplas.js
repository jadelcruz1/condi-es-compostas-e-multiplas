var agora = new Date()
var diaSem = agora.getUTCDay()
//switch( expresão) { funciona somente com numeros inteiros e fixos.
    //case valor 
//}
//console.log(diaSem)

switch(diaSem) {
    case 1:
        console.log('Domingo')
        break
    case 2:
        console.log('Segunda feira') 
        break
    case 3: 
        console.log('Terça feira')
        break
    case 4:
        console.log('Quarta feira')    
        break
    case 5:
        console.log('Quinta feira')  
        break
     case 6:
         console.log('Sexta feira')    
         break   
     case 7:
          console.log('Quarta feira')    
          break            

}