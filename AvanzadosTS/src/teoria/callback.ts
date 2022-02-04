function notifyAll(fnSms:Function, fnEmail:Function) {   
    console.log('starting notification process');   
    fnSms();   
    fnEmail();   
}   
//cuando se llama a la funcion se le pasa otra funcion
notifyAll(function() {   
    console.log("Sms send ..");   
 }, 
 function() {   
    console.log("email send ..");   
 });   