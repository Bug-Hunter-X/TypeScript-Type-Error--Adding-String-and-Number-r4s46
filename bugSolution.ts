function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; 
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else {
    return 0; // Or handle the error appropriately
  }
}

let result1 = addSafe(5, 10); // Returns 15
let result2 = addSafe("hello", " world"); // Returns "hello world"
let result3 = addSafe(5, "hello"); // Returns 0