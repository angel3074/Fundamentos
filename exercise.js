/***************************************/
/* Ejercicios con arreglos y objetos: */
/**************************************/
// 1. Crear un objeto que contenga un arreglo de 5 nombres de personas.
const objUsers = {
  namesUser: ["nombre1", "nombre2", "nombre3", "nombre4", "nombre5"],
};

// 2. Crea un arreglo de 5 objetos, cada objeto debe contener un nombre y una edad.
const users = [
  {
      name: "brayan",
      age: 22,
  },
  {
      name: "stiven",
      age: 21,
  },
  {
      name: "Elvis",
      age: 15,
  },
  {
      name: "Oscar",
      age: 15,
  },
  {
      name: "Wilfredo",
      age: 51,
  },
];

// 3. Del arreglo anterior, crea un nuevo arreglo que contenga solo los nombres de las personas.
function onlyNames(arrayUser) {
  const names = [];

  for (let i = 0; i < arrayUser.length; i++) {
      names.push(arrayUser[i].name);
  }

  return names;
}

// 4. Declara una función que reciba un el mismo arreglo de objetos y que retorne la suma de todas las edades.
function sumAges(arrayUser) {
  let sum = 0;

  for (let i = 0; i < users.length; i++) {
      sum += arrayUser[i].age;
  }

  return sum;
}

//3 y 4

function onlyNamesAndsumAges(arrayUser) {
  const names = [];
  let sum = 0;

  for (let i = 0; i < arrayUser.length; i++) {
      names.push(`nombre ${arrayUser[i].name} y tiene ${arrayUser[i].name}`);
      arrayUser[i].altura = 150 + i;
      sum += arrayUser[i].age;
  }

  const auxObj = {
      "nombres usuarios": names,
      "suma edades usuarios": sum,
  };

  return auxObj;
}

// 5. Del siguiente arreglo de objetos, realiza lo siguiente:
const usuarios = [
  {
      nombre: "Erik",
      edad: 29,
      correo: "erik@academlo.com",
      social: [
          { nombre: "twitter", url: "twitter/erik" },
          { nombre: "facebook", url: "facebook/erik" },
      ],
      genero: "Hombre",
  },
  {
      nombre: "Georg",
      edad: 33,
      correo: "georg@academlo.com",
      social: [
          { nombre: "facebook", url: "facebook/georg" },
          { nombre: "twitter", url: "twitter/georg" },
      ],
      genero: "Hombre",
  },
  {
      nombre: "Andrea",
      edad: 42,
      correo: "andrea@hotmail.com",
      social: [
          { nombre: "facebook", url: "facebook/andrea" },
          { nombre: "twitter", url: "twitter/andrea" },
      ],
      genero: "Mujer",
  },
  {
      nombre: "Oscar",
      edad: 31,
      correo: "oscar@academlo.com",
      social: [
          { nombre: "facebook", url: "facebook/oscar" },
          { nombre: "twitter", url: "twiter/oscar" },
      ],
      genero: "Hombre",
  },
  {
      nombre: "Daniela",
      edad: 22,
      correo: "andrea@uaq.mx",
      social: [
          { nombre: "facebook", url: "facebook/andrea" },
          { nombre: "twitter", url: "twitter/andrea" },
      ],
      genero: "Mujer",
  },
];

// 5.1. Crea un array de nombre correos y almacena todos los correos del arreglo usuarios.
// console.log(correos);

// 5.2. Crea un array de nombre cuentasDeFacebook y almacena todas las urls de las cuentas de facebook del arreglo usuarios.

// function allAcountsFacebook(arrayUsers) {
//     const cuentasDeFacebook = [];

//     for (let i = 0; i < arrayUsers.length; i++) {
//         for (let j = 0; j < arrayUsers[i].social.length; j++) {
//             if (arrayUsers[i].social[j].nombre === "facebook") {
//                 cuentasDeFacebook.push(arrayUsers[i].social[j].url);
//             }
//         }
//     }

//     return cuentasDeFacebook;
// }

function allAcountsFacebook(arrayUsers) {
  for (let i = 0; i < arrayUsers.length; i++) {
      for (let j = 0; j < arrayUsers[i].social.length; j++) {
          if (!(arrayUsers[i].social[j].nombre === "youtube")) {
              arrayUsers[i].social.push({
                  nombre: "youtube",
                  url: "youtube/anonimo",
              });
          }
      }
  }

  return arrayUsers;
}

// 5.3 Crea una funcion que devuelva el usuario mayor y el menor

function minMaxAgesUser(arrayUsuarios) {
  let userMin = {
      name: "",
      age: arrayUsuarios[0].age,
  };

  let userMax = {
      name: "",
      age: 0,
  };

  for (let i = 0; i < arrayUsuarios.length; i++) {
      if (arrayUsuarios[i].age < userMin.age) {
          userMin = arrayUsuarios[i];
      }

      if (arrayUsuarios[i].age > userMin.age) {
          userMax = arrayUsuarios[i];
      }
  }

  return { userMin, userMax };
}

function minMaxAgesUser2(arrayUsuarios) {
  const obj = {};

  // const aux = arrayUsuarios.sort(function (a, b) {
  //     if (a.age < b.age) {
  //         return -1;
  //     }

  //     if (a.age > b.age) {
  //         return 1;
  //     }

  //     return 0;
  // });

  for (let i = 0; i < arrayUsuarios.length; i++) {
      obj[arrayUsuarios[i].age]
          ? obj[arrayUsuarios[i].age]++
          : (obj[arrayUsuarios[i].age] = 1);
  }

  return obj;
}


// EJERCICIO 10 

// El tercer parámetro es el nombre de un país, por ejemplo: 'Colombia'

// Tu labor es contar y retornar el número total de estudiantes que pertenezcan al país que reciba la función.

// En el ejemplo anterior retornaríamos 3, ya que 3 estudiantes pertenecen al país con el id 2.

// *Recuerda utilizar return para devolver tu solución.
// *El primer arreglo que recibe la función puede tener n cantidad de estudiantes.
// *El segundo arreglo que recibe la función puede tener n cantidad de países. *El tercer parámetro que recibe la función puede ser el nombre de cualquier país.

// const array1 = [
//   { name: 'Georg', email: 'georg@academlo.com', country_id: 1 },
//   { name: 'Andrea', email: 'andrea@gmail.com', country_id: 2 },
//   { name: 'Daniela', email: 'daniela@gmail.com', country_id: 2 },
//   { name: 'Mónica', email: 'monica@gmail.com', country_id: 2 }
// ]

// const array2 = [
//   { id: 1, name: 'Mexico', },
//   { id: 2, name: 'Colombia' }
// ]

// let pais = 'Colomnbia'

// function countStudents(students, countries, countryName) {
//   const numberStudents = [];
//   for (let i = 0; i < students.length; i++) {
//       numberStudents.push(students[i].country_id);
      
//   }

// };
//! EJERCICIO 11


const array =
[
    { name: 'Daniela', age: 25 },
    { name: 'Andrea', age: 23 },
    { name: 'José', age: 27 },
    { name: 'Georg', age: 23 },
  ];

function findMostCommonAge(students) {
    let newArray = {};
    let matchNum = [];
    for (let i = 0; i < students.length; i++) {
        // newArray[students[i].age]
        // ? newArray[students[i].age]++
        // : newArray[students[i].age] = 1;
    }
    for (const i in matchNum) {
        if (Object.hasOwnProperty.call(object, i)) {
            const element = object[i];
            
        }
    }
    return newArray;
  }

  console.log(findMostCommonAge(array));
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

//   function findUser(users, name) {
//     for (let i = 0; i < array.length; i++) {
       
        
//     }

//   }

// const array =
// [
//     { name: 'Daniela', age: 25 },
//     { name: 'Andrea', age: 23 },
//     { name: 'José', age: 27 },
//     { name: 'Georg', age: 23 },
//   ];

// function findMostCommonAge(students) {
//     let newArray = {};
//     let NumeroDeVeces = 0
//     let laEdadRepeitda = 0

//     for (let i = 0; i < students.length; i++) {

//         if(newArray[students[i].age]){
//             newArray[students[i].age]++
//         }else{
//             newArray[students[i].age] = 1
//         }
//         // newArray[students[i].age]
//         // ? newArray[students[i].age]++
//         // : newArray[students[i].age] = 1;
//         console.log(newArray)
//     }
//     for (const i in newArray) {
//         if (newArray[i] > NumeroDeVeces) {
//             NumeroDeVeces = newArray[i];
//             laEdadRepeitda = i;
//         }
//     }
//     return Number(laEdadRepeitda)
//   }

//   console.log(findMostCommonAge(array));