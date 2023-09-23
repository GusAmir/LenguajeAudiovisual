function recursiveSum(arr: number[], index: number = 0): number {
    if (index === arr.length) return 0;
    return arr[index] + recursiveSum(arr, index + 1);
}

const numbers = [1, 2, 3, 4, 5];
const result = recursiveSum(numbers);
console.log(result); // 15

///////////////////////////
function sumNumbers(arr: number[]): number {
    return arr.reduce((acc, num) => acc + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
const result = sumNumbers(numbers);
console.log(result); // 15

//----------------------------------

Aquí está el código adaptado con la estructura del antipatrón "God hammer":

```typescript
function performOperation(arr: number[], operation: string): number {
    if (operation === "recursiveSum") {
        return recursiveSum(arr);
    } else if (operation === "sumNumbers") {
        return sumNumbers(arr);
    } else {
        console.error("Unknown operation.");
        return 0;
    }
}

function recursiveSum(arr: number[], index: number = 0): number {
    console.log("Performing God hammer operation...");
    if (index === arr.length) return 0;
    return arr[index] + recursiveSum(arr, index + 1);
}

function sumNumbers(arr: number[]): number {
    console.log("Performing God hammer operation...");
    return arr.reduce((acc, num) => acc + num, 0);
}

const numbers = [1, 2, 3, 4, 5];
const result = performOperation(numbers, "recursiveSum");
console.log(result); // 15

const result2 = performOperation(numbers, "sumNumbers");
console.log(result2); // 15
```

