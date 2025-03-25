/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// Тип any - можно использовать любой тип
let city: any = 'Berlin';
city = ['Paris', 12334]

 //----Типизация объекта через интерфейс
interface User {
    name: string,
    age?: number | string
}

const userData: User = {
    name: 'Tom',
    age: 34
}

interface User {
    inAdmin?: boolean
}

//Наследование интерфейса
interface Admin extends User {
    email: string,
    tel: string
}

const personData: Admin = {
    name: 'Bob',
    email: 'asd@mail.com',
    tel: '958576'
}

const newUser: User = {
    name: 'John',
   // email:''
}

//---типизация через type
//использование 
type Weight = string | number | null;

let userWeight: Weight = 52;
let animalWeight: Weight = null;

//пример использования union для ограничения переменной по значениям
type Status = 'success' | 'error' | 'loading';
let requestStatus: Status = 'success';
requestStatus = 'loading';
//requestStatus = 'eror';- пример неправильного значения

//использование type для типизации объекта
type Animal = {
    name: string,
    weight?: number
};

const animalData: Animal = {
    name: 'Leon',
    weight: 200
}

//
//type Animal = {country: 'London'};

// 
type NewAnimal = Animal & {country: string};

const zebra: NewAnimal = {
    name: 'Zebra',
    country: 'Afrika'
}

const dog: Animal = {
    name: 'Dog',
   // country: 'Germany'
} 

//Generic & Type - дженерик это переменная в которую мы можем подставить нужный тип в момент исползвания данного type(interface)
type CustomArrayType<T=null> = (string | T)[];

const arrayMix1: CustomArrayType<number> =  ['red', 123, 'black'];
const arrayMix2: CustomArrayType<number[]> = ['apple', [1,4,1]];
const arrayMix3: CustomArrayType = ['zebra', null];

 //Generic&Interface
  interface Fruit<T=number>{
    title: string,
    address: T
  }

  const fruitObj: Fruit<string> = {
    title: 'Grape',
    address: 'London, str...'
  }

//
  enum Colors {Red, Black=6, Green};

  //---Строковое перечисление
  // enum для цветов светофора
  export enum TRAFFIC_LIGHT {
    RED = 'red',
    YELLOW = 'yellow',
    GREEN = 'green'
  }

  // Пример экспортаименованого 
  export const getAction = (light: TRAFFIC_LIGHT) => {
    switch (light) {
      case TRAFFIC_LIGHT.RED:
        return 'Стоп!';
      case TRAFFIC_LIGHT.YELLOW:
        return 'Приготовьтесь идти';
      case TRAFFIC_LIGHT.GREEN:
        return 'Можно идти';
    }
  }
 