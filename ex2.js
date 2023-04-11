/**
 * Que sucede aquí?
 */

 let variable1 = 1;
 let variable2 = 2;
 let variable3 = 3;
 let variable4 = 4;
 variable2= 2;
 varialbe3= 4;
 variable4= 1;
 variable1= -7;

 console.log(variable4);
 


 /**
  * En este punto, que valor tendrá 'variable4'. ¿Por qué? ¿Cómo podrías comprobarlo?
  * la variable variable4 tiene un valor de 1 porque en la segúnda vez que se llama se sobre escribe su valor. 
  * se comprueba de la siguiente manera: 
  * console.log(variable4);
  */

  variable2 = variable1;
  variable4 = variable2 * 2;

console.log(variable4);

/**
  * En este punto se sobre escribe el valor de variable2 a variable1 que es = -7
  * Y se sobre escribe la variable variable4 asignandole como valor la variable aterio variable1 que tiene a su vez un valor de -7.
  * dejando como resultado final -14
  */