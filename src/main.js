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
    for(let i=inicio;i<=fin;i++){
        if(i%2!=0){
            cantidad++;
        }
    }
    return cantidad;
}
sumarParesWhile(){
    let suma=0;
    let x=2;
    while(x<=20){
        suma+=x;
        x+=2;
    }
    return suma;
}
contarImparesWhile(inicio, fin){
    let suma=0;
    let i=inicio;
    while(i<=fin){
        if(i%2!=0){
            suma++;
        }
        i++;
    }
    return suma;
}
sumarParesDo(){
    let suma=0;
    let i=2;
    do{
        suma+=i;
        i+=2;
    }while(i<=20);
    return suma;
}
contarImparesDo(inicio, fin){
    let conteo=0;
    let i=inicio;
    do{
        if(i%2!=0){
            conteo++;
        }
        i++;
    }while(i<=fin);
    return conteo;
}
}

let app = new App();
console.log(app.sumarParesFor());
console.log(app.contarImparesFor(1,51));
console.log(app.sumarParesWhile());
console.log(app.contarImparesWhile(1,10));
console.log(app.sumarParesDo());
console.log(app.contarImparesDo(1,10));