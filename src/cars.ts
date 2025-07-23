// don't change this interface
interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
}

/**
 * You can use this array
 * to manually test your code
 */
const cars: Car[] = [
  {
    id: 401,
    make: "Toyota",
    model: "Camry",
    year: 2021,
    color: "Blue",
  },
  {
    id: 402,
    make: "Honda",
    model: "Civic",
    year: 2020,
    color: "Silver",
  },
  {
    id: 403,
    make: "Ford",
    model: "Mustang",
    year: 2019,
    color: "Red",
  },
  {
    id: 405,
    make: "Chevrolet",
    model: "Tahoe",
    year: 2022,
    color: "Black",
  },
  {
    id: 406,
    make: "Nissan",
    model: "Altima",
    year: 2020,
    color: "White",
  },
];

/**
 * `getCarMake` function:
 * - Accepts a `car` parameter of type `Car`.
 * - Returns the make (brand) of the car.
 * Example:
 *  getCarMake(cars[0]); // => "Toyota"
 */
function getCarMake(car: Car): string {
  // write your code here...

  return car.make; // replace empty string with what you see is fit
}

/**
 * `isCarColorMatching` function:
 * - Accepts:
 *   - A `car` parameter of type `Car`.
 *   - A `color` parameter of type `string`.
 * - Returns `true` if the car's color matches the provided color, otherwise returns `false`.
 * Example:
 *  isCarColorMatching(cars[1], "Blue"); // => false
 */
function isCarColorMatching(car: Car, color: string): boolean {
  // write your code here...
  if (car.color === color) {
    return true; // replace true with what you see is fit
  }

  return false; // replace false with what you see is fit
}

/**
 * `addCar` function:
 * - Accepts:
 *   - A `cars` array of type `Car[]`.
 *   - An `id` parameter of type `number`..
 *   - An `make` parameter of type `string`.
 *   - An `model` parameter of type `string`.
 *   - An `year` parameter of type `number`.
 *   - An `color` parameter of type `string`.
 * - Creates a new `Car` object and adds it to the end of the array `cars`.
 * - Returns the updated array of `cars`.
 * Example:
 *  addCar(cars, 407, "Kia", "Sorento", 2021, "Green");
 *    // => [
 *    //   { id: 401, make: "Toyota", model: "Camry", year: 2021, color: "Blue" },
 *    //   ...
 *    //   { id: 407, make: "Kia", model: "Sorento", year: 2021, color: "Green" }
 *    // ]
 */
function addCar(
  cars: Car[],
  id: number,
  make: string,
  model: string,
  year: number,
  color: string
): Car[] {
  // write your code here...
  const newcar = { id, model, make, year, color };

  cars.push(newcar);

  return cars; // replace empty array with what you see is fit
}

/**
 * `countCarsMadeInYear` function:
 * - Accepts:
 *   - A `cars` array of type `Car[]`.
 *   - A `year` parameter of type `number`.
 * - Returns the number of cars made in the specified year.
 * Example:
 *  countCarsMadeInYear(cars, 2020); // => 2
 */
function countCarsMadeInYear(cars: Car[], year: number): number {
  // write your code here...
  // let count = 0;
  // cars.forEach((car) => {
  //   if (car.year === year) {
  //     count++;
  //   }
  // });

  // return count; // replace Infinity with what you see is fit

  return cars.filter((car) => car.year === year).length; // alternative solution
}

/**
 * `removeCarById` function:
 * - Accepts:
 *   - A `cars` array of type `Car[]`.
 *   - An `id` parameter of type `number`.
 * - Removes the car with the matching id from the array.
 * - Returns the updated array.
 * Example:
 *  removeCarById(cars, 403);
 *    // => Array without the car having id 403.
 */
function removeCarById(cars: Car[], id: number): Car[] {
  // write your code here...
  const newArr = cars.filter((car) => car.id !== id);
  return newArr;
}
console.log(removeCarById(cars, 403)); // Example usage to test the function

/**
 * `updateCarColor` function:
 * - Accepts:
 *   - A `cars` array of type `Car[]`.
 *   - An `id` parameter of type `number`.
 *   - A `newColor` parameter of type `string`.
 * - If found, updates the color of the car with the given id to the new color.
 * - Returns the updated car object.
 * - If no car is found with the given id, return `"No Car Found"`.
 * Example:
 *  updateCarColor(cars, 401, "Yellow");
 *    // => { id: 401, make: "Toyota", model: "Camry", year: 2021, color: "Yellow" }
 *  updateCarColor(cars, 420, "Green");
 *    // => "No Car Found"
 */
function updateCarColor(
  cars: Car[],
  id: number,
  newColor: string
): Car | "No Car Found" {
  // write your code here...
  const carToUpdate = cars.find((car) => car.id === id);
  if (carToUpdate) {
    carToUpdate.color = newColor;
    return carToUpdate; // replace empty object with what you see is fit
  }
  

  return "No Car Found"; // replace "No Car Found" with what you see is fit
}
 

export {
  Car,
  getCarMake,
  isCarColorMatching,
  addCar,
  countCarsMadeInYear,
  removeCarById,
  updateCarColor,
};
