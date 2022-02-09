function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Max" }, { age: 30 });
console.log(mergedObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let decsText = "Got no value.";
  if (element.length == 1) decsText = "Got 1 element.";
  else if (element.length > 1)
    decsText = "Got " + element.length + " elements.";
  return [element, decsText];
}

console.log(countAndDescribe([1, 2, 3]));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return 'Value: ' + obj[key];
}

console.log(extractAndConvert({name: 'Max'}, 'name'));

