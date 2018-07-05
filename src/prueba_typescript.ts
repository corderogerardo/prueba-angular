// Uso de Let y Const
const nombreN = 'César Tapia';
let edadN = 32;

interface Persona {
  nombre: string;
  edad: number;
}

let PERSONAJE: Persona;

// Cree una interfaz que sirva para validar el siguiente objeto
interface Batman extends Persona {
  artesMarciales: string[];
}

let batman: Batman;

let createBatman = (nombre: string, edad: number, artesMarciales: string[]): Batman => {
  return {
    edad,
    nombre,
    artesMarciales
  };
};

batman = createBatman('Bruno Díaz', undefined, ['Karate', 'Aikido', 'Wing Chun', 'Jiu-Jitsu']);

// Convertir esta función a una función de flecha
let resultadoDoble = ( a, b ) => (a + b) * 2;
resultadoDoble(2, 2);
