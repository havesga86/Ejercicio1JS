function revpalindromo(palin)
{
	var frase=palin.toLowerCase();
    var check;
 
	// Se eliminaran los espacios en blanco
	frase=frase.replace(/ /g, "");
 
	for (var i=0;i<frase.length;i++){
		if(frase[i]!=frase[frase.length-i-1]){
            check=1;
		}else{
            check=0;
        }
	}
    if (check==1){
        alert("No, no es palindromo");
    }else{
        alert("Efectivamente su palabra o frase es palindromo")
    }
}

function revision(num1,num2)
// Comparacion de los numeros en ifs
{
    if(num1===num2){
        alert("son iguales");
    }else if(num1>num2){
        alert("el numero mayor es : "+num1);
    }else if(num1<num2){
        alert("el numero mayor es : "+num2);
    }
}

function vocales(vocafrase)
// Extracción de las vocales y shown up
{
    let vocals = vocafrase.replace (/[^a,e,i,o,u,A,E,I,O,U]/g, '');
    alert("Las vocales dentro de esta frase son: "+ vocals)
}

function nvocales(numvocales)
// Revisión númerica de vocales en una frase
{
    var vocala = 0;
    var vocale = 0;
    var vocali = 0;
    var vocalo = 0;
    var vocalu = 0;  
      
    for (var i = 0; i < numvocales.length; i++) {
      
        switch (numvocales.charAt(i)) {
        case "a":
            vocala++;
            break;
        case "e":
            vocale++;
            break;
        case "i":
            vocali++;
            break;
        case "o":
            vocalo++;
            break;
        case "u":
            vocalu++;
            break;
        default:
            break;
        }
    }
    alert("El número de vocales, en su frase, se reparte así: " + "\nA: " + vocala + "\nE: " + vocale + "\nI: " + vocali + "\nO: " + vocalo + "\nU: " + vocalu);
}