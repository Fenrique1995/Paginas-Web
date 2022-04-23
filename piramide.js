let num = parseInt(prompt("Ingrese un numero por favor", ""));


if (num < 10) {
    for (let i= 1; i < 10; i++) {
        for (let j = 0; j < i; j++) {
            document.write("*");    
        }
        document.write("<br>");
    }
}else{
    for (let i= 1; i < num; i++) {
        for (let j = 0; j < i; j++) {
            document.write(0);    
        }
        document.write("<br>");
    }
}