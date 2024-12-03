const prompt = require ("prompt-sync")({ sigint: true });
let var1 = 8;
let var2 = 30;
if((var1>=10)&&(var2>=10))
{
    console.log("Las dos variables son mayor que 10");
}else {
    console.log("Una o dos variables son menor que 10");
}