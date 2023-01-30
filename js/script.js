/* 
    PROGRAMA DE CALCULO DE PROMEDIOS DE ALUMNOS DEL COLEGIO SECUNDARIO X. 
    1) SE SOLICITA LA CANTIDAD DE ALUMNOS. 
    2) SE SOLICITA EL NOMBRE DEL ALUMNO/A 
    3) SE SOLICITA LA CANTIDAD DE INASISTENCIAS DEL ALUMNO DURANTE EL AÑO.
    4) SE SOLICITA INGRESAR LAS NOTAS CORRESPONDIENTES A CADA UNO DE LOS TRES TRIMESTRES DEL AÑO.
    3) SE SOLICITA LA CANTIDAD DE INASISTENCIAS DEL ALUMNO DURANTE EL AÑO.  
    5) SE VERIFICA COMO PRIMER PASO LA CANTIDAD DE INASISTENCIAS. SI LAS MISMAS SUPERAN LAS 25, EL ALUMNO DEBERA RECURSAR LA MATERIA.
    6)EL PROGRAMA CALCULA EL PROMEDIO ANUAL DE CADA ALUMNO/A Y DEVUELVE LAS NOTAS DE CADA TRIMESTRE, EL PROMEDIO FINAL Y EL ESTADO: PROMOCIONADO (PROMEDIO MAYOR O IGUAL A 7), RECUPERAR (PROMEDIO MENOR A 7 Y MAYOR A 4), RECURSAR (PROMDIO MENOR A 4).

*/

function calcular_promedio (){
    
    if(inasistencias >= 25){
      
        console.log("Alumno/a: " , nombre_alumno);
        console.log("El alumno", nombre_alumno, "quedó libre por haber llegado a las 25 inasistencias. Deberá RECURSAR la materia.");
        console.log("___________________________________________________________");
        console.log("");
    }
    else{
        console.log("Alumno/a: " , nombre_alumno);
        console.log("Nota primer trimestre: " , nota_pri_trim);
        console.log("Nota segundo trimestre: ", nota_sec_trim);
        console.log("Nota tercer trimestre: ", nota_ter_trim);
        promedio = (nota_pri_trim + nota_sec_trim + nota_ter_trim) / 3;
        console.log("El promedio del alumno/a ", nombre_alumno, "es: ", promedio);

        if (promedio >= 7){
            console.log(nombre_alumno, "ha PROMOCIONADO la materia.");
        }
        else if(promedio >= 4){
            console.log(nombre_alumno, "deberá RECUPERAR la materia.");
        }
        else if (promedio < 4){
            console.log(nombre_alumno, "deberá RECURSAR la materia.");
        }
        console.log("___________________________________________________________");
    }
}


let cantidad_alumnos = parseInt(prompt("Ingrese la cantidad de alumnos"));
let nombre_alumno;
let nota_pri_trim, nota_sec_trim, nota_ter_trim, inasistencias;

for (let i = 0; i < cantidad_alumnos ; i = i + 1){
    
    nombre_alumno = prompt("Ingrese nombre del alumno/a");
    inasistencias = prompt("Ingrese la cantidad de inasistencia");
    if (inasistencias >= 25){
        calcular_promedio (nombre_alumno, inasistencias);
        

    }
    else{
        nota_pri_trim = parseFloat(prompt("Ingrese la nota del PRIMER TRIMESTRE"));
        nota_sec_trim = parseFloat(prompt("Ingrese la nota den SEGUNDO TRIMESTRE"));
        nota_ter_trim = parseFloat(prompt("Ingrese la nota del TERCER TRIMESTRE"));
        
        calcular_promedio (nombre_alumno, nota_pri_trim, nota_sec_trim, nota_ter_trim);
    } 
} 