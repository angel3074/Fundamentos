// /***************************************/
// /* Ejercicios con arreglos y objetos: */
// /**************************************/
// // 1. Crear un objeto que contenga un arreglo de 5 nombres de personas.
// const objUsers = {
//     namesUser: ["nombre1", "nombre2", "nombre3", "nombre4", "nombre5"],
// };

// // 2. Crea un arreglo de 5 objetos, cada objeto debe contener un nombre y una edad.
// const users = [
//     {
//         name: "brayan",
//         age: 22,
//     },
//     {
//         name: "stiven",
//         age: 21,
//     },
//     {
//         name: "Elvis",
//         age: 15,
//     },
//     {
//         name: "Oscar",
//         age: 15,
//     },
//     {
//         name: "Wilfredo",
//         age: 51,
//     },
// ];

// // 3. Del arreglo anterior, crea un nuevo arreglo que contenga solo los nombres de las personas.
// function onlyNames(arrayUser) {
//     const names = [];

//     for (let i = 0; i < arrayUser.length; i++) {
//         names.push(arrayUser[i].name);
//     }

//     return names;
// }

// // 4. Declara una función que reciba un el mismo arreglo de objetos y que retorne la suma de todas las edades.
// function sumAges(arrayUser) {
//     let sum = 0;

//     for (let i = 0; i < users.length; i++) {
//         sum += arrayUser[i].age;
//     }

//     return sum;
// }

// //3 y 4

// function onlyNamesAndsumAges(arrayUser) {
//     const names = [];
//     let sum = 0;

//     for (let i = 0; i < arrayUser.length; i++) {
//         names.push(`nombre ${arrayUser[i].name} y tiene ${arrayUser[i].name}`);
//         arrayUser[i].altura = 150 + i;
//         sum += arrayUser[i].age;
//     }

//     const auxObj = {
//         "nombres usuarios": names,
//         "suma edades usuarios": sum,
//     };

//     return auxObj;
// }

// // 5. Del siguiente arreglo de objetos, realiza lo siguiente:
// const usuarios = [
//     {
//         nombre: "Erik",
//         edad: 29,
//         correo: "erik@academlo.com",
//         social: [
//             { nombre: "twitter", url: "twitter/erik" },
//             { nombre: "facebook", url: "facebook/erik" },
//         ],
//         genero: "Hombre",
//     },
//     {
//         nombre: "Georg",
//         edad: 33,
//         correo: "georg@academlo.com",
//         social: [
//             { nombre: "facebook", url: "facebook/georg" },
//             { nombre: "twitter", url: "twitter/georg" },
//         ],
//         genero: "Hombre",
//     },
//     {
//         nombre: "Andrea",
//         edad: 42,
//         correo: "andrea@hotmail.com",
//         social: [
//             { nombre: "facebook", url: "facebook/andrea" },
//             { nombre: "twitter", url: "twitter/andrea" },
//         ],
//         genero: "Mujer",
//     },
//     {
//         nombre: "Oscar",
//         edad: 31,
//         correo: "oscar@academlo.com",
//         social: [
//             { nombre: "facebook", url: "facebook/oscar" },
//             { nombre: "twitter", url: "twiter/oscar" },
//         ],
//         genero: "Hombre",
//     },
//     {
//         nombre: "Daniela",
//         edad: 22,
//         correo: "andrea@uaq.mx",
//         social: [
//             { nombre: "facebook", url: "facebook/andrea" },
//             { nombre: "twitter", url: "twitter/andrea" },
//         ],
//         genero: "Mujer",
//     },
// ];

// // 5.1. Crea un array de nombre correos y almacena todos los correos del arreglo usuarios.
// // console.log(correos);

// // 5.2. Crea un array de nombre cuentasDeFacebook y almacena todas las urls de las cuentas de facebook del arreglo usuarios.

// // function allAcountsFacebook(arrayUsers) {
// //     const cuentasDeFacebook = [];

// //     for (let i = 0; i < arrayUsers.length; i++) {
// //         for (let j = 0; j < arrayUsers[i].social.length; j++) {
// //             if (arrayUsers[i].social[j].nombre === "facebook") {
// //                 cuentasDeFacebook.push(arrayUsers[i].social[j].url);
// //             }
// //         }
// //     }

// //     return cuentasDeFacebook;
// // }

// function allAcountsFacebook(arrayUsers) {
//     for (let i = 0; i < arrayUsers.length; i++) {
//         for (let j = 0; j < arrayUsers[i].social.length; j++) {
//             if (!(arrayUsers[i].social[j].nombre === "youtube")) {
//                 arrayUsers[i].social.push({
//                     nombre: "youtube",
//                     url: "youtube/anonimo",
//                 });
//             }
//         }
//     }

//     return arrayUsers;
// }

// // 5.3 Crea una funcion que devuelva el usuario mayor y el menor

// function minMaxAgesUser(arrayUsuarios) {
//     let userMin = {
//         name: "",
//         age: arrayUsuarios[0].age,
//     };

//     let userMax = {
//         name: "",
//         age: 0,
//     };

//     for (let i = 0; i < arrayUsuarios.length; i++) {
//         if (arrayUsuarios[i].age < userMin.age) {
//             userMin = arrayUsuarios[i];
//         }

//         if (arrayUsuarios[i].age > userMin.age) {
//             userMax = arrayUsuarios[i];
//         }
//     }

//     return { userMin, userMax };
// }

// function minMaxAgesUser2(arrayUsuarios) {
//     const obj = {};

//     // const aux = arrayUsuarios.sort(function (a, b) {
//     //     if (a.age < b.age) {
//     //         return -1;
//     //     }

//     //     if (a.age > b.age) {
//     //         return 1;
//     //     }

//     //     return 0;
//     // });

//     for (let i = 0; i < arrayUsuarios.length; i++) {
//         obj[arrayUsuarios[i].age]
//             ? obj[arrayUsuarios[i].age]++
//             : (obj[arrayUsuarios[i].age] = 1);
//     }

//     return obj;
// }


// // EJERCICIO 10 

// // El tercer parámetro es el nombre de un país, por ejemplo: 'Colombia'

// // Tu labor es contar y retornar el número total de estudiantes que pertenezcan al país que reciba la función.

// // En el ejemplo anterior retornaríamos 3, ya que 3 estudiantes pertenecen al país con el id 2.

// // *Recuerda utilizar return para devolver tu solución.
// // *El primer arreglo que recibe la función puede tener n cantidad de estudiantes.
// // *El segundo arreglo que recibe la función puede tener n cantidad de países. *El tercer parámetro que recibe la función puede ser el nombre de cualquier país.

// // const array1 = [
// //   { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
// //   { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
// //   { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
// //   { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
// // ]

// // const array2 = [
// //   { id: 1, name: 'Mexico', },
// //   { id: 2, name: 'Colombia' }
// // ]

// // let pais = 'Colomnbia'

// // function countStudents(students, countries, countryName) {
// //   const numberStudents = [];
// //   for (let i = 0; i < students.length; i++) {
// //       numberStudents.push(students[i].country_id);

// //   }

// // };
// //! EJERCICIO 11


// // const array =
// //     [
// //         { name: 'Daniela', age: 25 },
// //         { name: 'Andrea', age: 23 },
// //         { name: 'José', age: 27 },
// //         { name: 'Georg', age: 23 },
// //     ];

// // function findMostCommonAge(students) {
// //     let newArray = {};
// //     let matchNum = [];
// //     for (let i = 0; i < students.length; i++) {
// //         // newArray[students[i].age]
// //         // ? newArray[students[i].age]++
// //         // : newArray[students[i].age] = 1;
// //     }
// //     for (const i in matchNum) {
// //         if (Object.hasOwnProperty.call(object, i)) {
// //             const element = object[i];

// //         }
// //     }
// //     return newArray;
// // }

// // console.log(findMostCommonAge(array));
// const myFunc = [
//     {
//         name: 'Erik',
//         gender: 'male',
//         age: 22,
//     },
//     {
//         name: 'Daniela',
//         gender: 'female',
//         age: 22,
//     },
//     {
//         name: 'Gustavo',
//         gender: 'male',
//         age: 49,
//     },
//     {
//         name: 'María',
//         gender: 'female',
//         age: 35,
//     },
// ];
// const name = "Gustavo"
// function findUser(users, name) {
//     let newArray = [];
//     for (let i = 0; i < users.length; i++) {
//         if (users[i].name === name) {
//             newArray.push(users[i])
//         }
//     }
//     let myProve = users.filter(user => user.name === name);
//     return myProve;
// }


// //   console.log(findUser(myFunc, name));

// //! EJERCICIO 16 
// //   Cuenta las veces que se repite una letra

// // La función countLetter() recibe como parámetros dos strings:

// // El primer string es una frase cualquiera.

// // El segundo string es una letra cualquiera.

// // Tu labor es encontrar cuántas veces se repite la letra en el string.

// // Ejemplo:
// // Si tu función recibe como frase "Hola, me llamo Erik" y como letra "a" debes retornar 2, ya que la letra "a" se encuentra 2 veces en la frase.
// function countLetter(phrase, letter) {

// }


// //! EJERCICIO 17
// // const array =
// // [
// //     { name: 'Daniela', age: 25 },
// //     { name: 'Andrea', age: 23 },
// //     { name: 'José', age: 27 },
// //     { name: 'Georg', age: 23 },
// //   ];

// // function findMostCommonAge(students) {
// //     let newArray = {};
// //     let NumeroDeVeces = 0
// //     let laEdadRepeitda = 0

// //     for (let i = 0; i < students.length; i++) {

// //         if(newArray[students[i].age]){
// //             newArray[students[i].age]++
// //         }else{
// //             newArray[students[i].age] = 1
// //         }
// //         // newArray[students[i].age]
// //         // ? newArray[students[i].age]++
// //         // : newArray[students[i].age] = 1;
// //         console.log(newArray)
// //     }
// //     for (const i in newArray) {
// //         if (newArray[i] > NumeroDeVeces) {
// //             NumeroDeVeces = newArray[i];
// //             laEdadRepeitda = i;
// //         }
// //     }
// //     return Number(laEdadRepeitda)
// //   }

// //   console.log(findMostCommonAge(array));

// const myUsers = [
//     {
//         name: 'Erik',
//         gender: 'male',
//         age: 22,
//     },
//     {
//         name: 'Daniela',
//         gender: 'female',
//         age: 22,
//     },
//     {
//         name: 'Gustavo',
//         gender: 'male',
//         age: 49,
//     },
//     {
//         name: 'María',
//         gender: 'female',
//         age: 35,
//     },
// ];

// // El string es el nombre de uno de los usuarios que se encuentra en el arreglo, por ejemplo: 'Gustavo'

// // Tu labor es encontrar y devolver al usuario con el nombre recibido. Ejemplo:
// // En el caso de haber recibido el arreglo mencionado anteriormento y el nombre 'Gustavo' deberías retornar:

// const result = myUsers.filter(myUsers => myUsers.length > 6);

// // console.log(result);

// // function findUser(users, name) {


// //   }


// //! EJERCICIO 14
// // Sumando números pares en un rango

// // La función sumEvens() recibe como parámetros dos números:

// // Tu labor es sumar todos los números pares que se encuentren en el rango de los números recibidos, sin incluir a los dos números recibidos.

// // Ejemplo:
// // Si tu función recibe 20 y 30 deberías retornar 100, ya que los números pares entre 20 y 30 son 22, 24, 26, 28 y la suma de todos estos números es 100.

// // *Recuerda utilizar return para devolver tu solución.
// // *El segundo número recibido siempre será mayor al primero.

// const begg = 15;
// const end = 20;

// function sumEvens(start, end) {
//     let sum = 0;
//     for (let i = start + 1; i < end; i += 2) {
//         if (start % 2) {
//             sum += i
//         }
//     }
//     return sum;
// }

// // console.log(sumEvens(begg,end));

// function sumEvens(start, end) {
//     if (start % 2 === 1) {
//         let impar = []
//         let sumar2 = 0
//         for (let i = start + 1; i < end; i = i + 2) {
//             impar.push(i)
//         }
//         for (let i = 0; i < impar.length; i++) {
//             sumar2 += impar[i];
//         }
//         return sumar2
//     }
//     else {
//         let par = []
//         let sumar = 0
//         for (let i = start; i < end; i = i + 2) {
//             par.push(i)
//         }
//         for (let i = 0; i < par.length; i++) {
//             if (par[i] === start) {
//                 par.splice(0, 1)
//             }
//         } z
//         for (let i = 0; i < par.length; i++) {
//             sumar += par[i];
//         }
//         return sumar
//     }
// }

// // Encuenta los múltiplos de un número

// // La función getMultiples() recibe como parámetros dos números:

// // Tu labor es encontrar todos los múltiplos del primer número (sin incluir este número) recibido siempre y cuando sean menores al segundo número recibido.

// // Ejemplo:
// // Si la función recibe 20 y 100 deberías retornar un arreglo como el siguiente [40, 60, 80], ya que esos son todos los múltiplos del 20 menores a 100.

// // *Recuerda utilizar return para devolver tu solución.
// // *Los números que recibe la función podrán ser dos números cualesquiera.


// function getMultiples(number, limit) {
//     let returnPush = [];
//     for (let i = number * 2; i < limit; i = i + number) {
//         returnPush.push(i);
//     }
//     return returnPush;
// }


// //! EJERCICIO 18 

// //   Encuentra la cantidad de números individuales que componen a un número

// // La función countNumbers() recibe como parámetro un número

// // Tu labor es encontrar y retornar el total de números individuales que lo componen.

// // Ejemplo:
// // Si la función recibe el número 128 debemos retornar un 3 porque el número 128 está compuesto por 3 números.

// // Ejemplo 2:
// // Si la función recibe el número 84 debemos retornar un 2 porque el número 84 está compuesto por 2 números.

// // *Recuerda utilizar return para devolver tu solución.
// // *El número que recibe la función puede ser cualquiera.


// const myNum = 575;
// function countNumbers(number) {
//     return number.toString().length;
// }


// // console.log(countNumbers(myNum));

// //! ejercicio 13:  es obtener solo a los usuarios que hayan enviado su aplicación, 
// //! para esto puedes tomar como referencia la propiedad application de cada usuario.


// const myArr =
//     [
//         { name: 'Erik', email: 'erik@academlo.com', channel: 'youtube', application: null },
//         { name: 'Georg', email: 'georg@gmail.com', channel: 'facebook', application: { country: 'Mexico', state: 'Nuevo León' } },
//         { name: 'Daniela', email: 'daniela@gmail.com', channel: 'youtube', application: { country: 'Colombia', state: 'Bogotá' } }
//     ];


// function getApplications(users) {
//     let newArray = [];
//     for (let i = 0; i < users.length; i++) {

//         if (users[i].application !== null) {
//             newArray.push(users[i]);
//         }

//     }
//     return newArray;
// }

// //EJERCICIOS DE EXAMEN: 
// // 1.- Encontrar los n multiplos de un numero 
// // 2.- Encontrar el inverso, espejo de un string 
// // 3.- Suma de los 2 arrays 
// // 4.- Encontrar la letra que mas se repite una letra dentro de una frase 

// // const num1 = 4;
// // const num2 = 36;

// // function multiplos (num1, num2){
// //     let  myArray = [];
// //     for (let i = num1*2; i <= num2; i++) {
// //         myArray.push(i);
// //     }
// //     return myArray;
// // }

// // console.log(multiplos(num1, num2))
// // //! DIFFERENT
// // const myArray2 = ['michi', 'musca', 'micky', 'mouse'];

// // function johnZ(argu){
// //     return argu.reverse();
// // }

// // console.log(johnZ(myArray2));


// // const thisMyStr = ["michi", "musca", "micky", "mouse"];
// // function toArray(argu) {

// //     if (typeof argu === "string") {
// //         let toArray = argu.split(' ').reverse();

// //         return `This is an array ${toArray}`

// //     } else {
// //         let myString = argu.reverse().toString();

// //         return `This is a string ${myString}`
// //     }
// // }

// // console.log(toArray(thisMyStr))

// let nums=[3, 432, 534, 21]
// let nums2=[33, 432, 53, 211]

// function sumArray(array1,array2) {
//     let sum = 0;

//     for (let i = 0; i < array1.length; i++) {
//         sum = sum + array1[i]
//     }

//     for (let i = 0; i < array2.length; i++) {
//         sum += array2[i]
//     }
// return sum 
// }

// // console.log(sumArray(nums, nums2));

// //! EXAMEN EJERCICIO 1

// La función getNMultiples() recibe como parámetros dos números:

// Tu labor es encontrar los múltiplos del primer número (sin incluir este número) tantas veces como te lo indique el segundo número.

// multiplicar el primer numero dependiendo de lo que me diga el segundo numero si me dice 3 veces el primero se multiplica 3 veces.

// Explicado de otra forma: El primer número es el número del que obtendrás los múltiplos en este caso 20 y el segundo número es la cantidad de múltiplos que obtendrás en este caso 2 multiplos

// Ejemplo:
// Si la función recibe 20 y 2 deberías retornar un arreglo como el siguiente [40, 60], ya que estamos obteniendo 2 multiplos del 20.

// Ejemplo 2:
// Si la función recibe 3 y 4 deberías retornar un arreglo como el siguiente [6, 9, 12, 15], ya que estamos obteniendo 4 múltiplos de 3.

// *Recuerda utilizar return para devolver tu solución.
// *Los números que recibe la función podrán ser dos números cualesquiera.

function getNMultiples(number, totalMultiples) {
    let myNumbers = [];

    for (let i = number * 2; i <= (number * totalMultiples) + number;  i += number) {
        myNumbers.push(i)
    }

    return myNumbers;
  }

  console.log(getNMultiples(20,2));



// // Invierte el texto

// // La función reverseText() recibe como parámetros un string:

// // Tu labor es invertir este string.

// // Ejemplo:
// // Si tu función recibe "Hola" debes retornar aloH.

// // Ejemplo 2:
// // Si tu función recibe "Ya es muy tarde" debes retornar edrat yum se aY.

// // *Recuerda utilizar return para devolver tu solución.
// // *Tu solución debe de funcionar para cualquier string.
// // *Tip: Puedes apoyarte en el método reverse de Javascript (que solo funciona para arreglos).

// const functions = "Ya es muy tarde";
// function reverseText(text) {
//     let toArray = text.split('');
//     let toString =  toArray.reverse();
//     let joinMethod = toString.join('');
//     return joinMethod;
//   }

// //   console.log(reverseText(functions));
// //! EJERCICIO 3 
//   const firstArr = [25,50];
//   const secondArr = [50,550];

//   function sumTwoArrays(array, array2) {
//     sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i]; 
//     }
//     for (let i = 0; i < array2.length; i++) {
//         sum += array2[i]; 
//     }
//     return sum;
//   }

// //   console.log(sumTwoArrays(firstArr,secondArr));

// // Encuentra la letra que más se repite

// // La función findMostCommonLetter() recibe como parámetro un string

// // Tu labor es encontrar y retornar la letra que se repite más veces.

// // Ejemplo:
// // Si recibes la frase 'Hola, me gusta la programación' tienes que retornar la letra a ya que esta es la que se repite más veces

// // *Recuerda utilizar return para devolver tu solución.
// // *El string que recibe la función puede ser cualquiera.

const myString = 'Hola, me gusta la programación';

function findMostCommonLetter(text) {
    let counter = 1;
    let inHere = [];
    let forTer = [];

     text = text.toLowerCase().split('').sort();

    for (let i = 0; i < text.length; i++) {
        if(text[i + 1] === text[i]){
            counter++;
        }else{
            inHere.push(text[i]);
            forTer.push(counter);
            counter = 1;
        }
    }

    return 
  }
  console.log(findMostCommonLetter(myString));






//   function countApplicationsByChannel(students) {
//     const obj = {}
//     const social=[]
//     for (let i = 0; i < students.length; i++){
//       if (students[i].application ===null) {
//        continue;}
//        social.push(students[i])}
    
//     for(i=0; i<social.length;i++){
//     obj[social[i].channel]?
//     obj[social[i].channel]++:
//     (obj[social[i].channel])=1;
    
    
//       }  return obj
//     }


// let str = "hola me gusta mucho la programacion";

// const res = [...str.split(" ").join("")].reduce((acum, current) => {
//     acum[current] ? acum[current]++ : (acum[current] = 1);
//     return [acum];
// }, {});

// console.log(res);