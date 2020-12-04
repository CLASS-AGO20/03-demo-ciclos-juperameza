export default class App {
sumarParesFor(){
    let suma=0;
    for(let x=2; x<=20;x+=2){
        suma+=x;
    }
    return suma;
}





}

let app = new App();
console.log(app.sumarParesFor());