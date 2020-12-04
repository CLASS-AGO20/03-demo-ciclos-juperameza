export default class App {
sumarParesFor(){
    let suma=0;
    for(let x=2; x<=20;x+=2){
        suma+=x;
    }
    return suma;
}

contarImparesFor(inicio,fin){
    let cantidad=0;
    for(inicio;inicio<=fin;inicio++){
        if(inicio%2!=0){
            cantidad++;
        }
    }
    return cantidad;
}
sumarParesWhile(){
    let suma=0;
    let x=2;
    while(x<=20){
        x+=2;
        suma+=x;
    }
    return suma;
}


}

let app = new App();
console.log(app.sumarParesFor());
console.log(app.contarImparesFor(1,10));
console.log(app.sumarParesWhile());