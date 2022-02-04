function notifyAllAsync(fnSms:Function, fnEmail:Function) {
    //esto es una pausa y lo usamos para romper la sincronizacion
    setTimeout(function () {
        console.log('starting notification process');
        fnSms();
        fnEmail();
    })
}
notifyAllAsync(function () {
    console.log("enviando sms...");
}, function () {
    console.log("enviando email...");
});
console.log("End of script"); 