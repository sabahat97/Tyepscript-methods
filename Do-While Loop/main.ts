let minutesUntilBusArrives = 6

function checking (){
    minutesUntilBusArrives--;
    if (minutesUntilBusArrives != 0){
        return "checking for the bus"}
 else {return false}
    } 
    do {
let response = checking()
console.log(response)
    }while (minutesUntilBusArrives > 0)
       
