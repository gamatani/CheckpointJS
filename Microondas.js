const pipoca = 10
const macarrao = 8
const carne = 15
const feijao = 12
const brigadeiro = 8
const mensagem = "Prato pronto, bom apetite!!!"


function microondas (comida,tempo){
    if ((comida == "pipoca" && tempo > pipoca*3) || (comida == "macarrao" && tempo > macarrao*3)||(comida == "carne" && tempo > carne*3) || (comida == "feijao" && tempo > feijao*3) || (comida == "brigadeiro" && tempo > brigadeiro*3))
        console.log('Kabuum \n' + mensagem);
        
    else if((comida == "pipoca" && tempo > pipoca*2) || (comida == "macarrao" && tempo > macarrao*2) || (comida == "carne" && tempo > carne*2) || (comida == "feijao" && tempo > feijao*2) || (comida == "brigadeiro" && tempo > brigadeiro*2))
        console.log('Comida queimou \n' + mensagem)
        

    else if ((comida == "pipoca" && tempo < pipoca) || (comida == "macarrao" && tempo < macarrao) || (comida == "carne" && tempo < carne) || (comida == "feijao" && tempo < feijao) || (comida == "brigadeiro" && tempo < brigadeiro))
            console.log('Tempo insuficiente \n' + mensagem)
            

    else if ((comida == "pipoca" && tempo >=pipoca) || (comida == "macarrao" && tempo >= macarrao) || (comida == "carne" && tempo >= carne) || (comida == "feijao" && tempo >= feijao) || (comida == "brigadeiro" && tempo >= brigadeiro)){
            console.log('Prato pronto, bom apetite!!!')
                
    }else {
            console.log('Prato inexistente') 
        }

}
//Teste apontando comida e tempo 
microondas("pipoca", 9);
microondas("pipoca", 11);
microondas("pipoca", 21);
microondas("pipoca", 50);
microondas("massa", 23);


