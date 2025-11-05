// fibonacci.js

// 1. Implementación Iterativa (fibs)
/**
 * Genera los primeros n números de la secuencia de Fibonacci de forma iterativa.
 * @param {number} n - El número de elementos de la secuencia a generar.
 * @returns {number[]} Un array con los primeros n números de Fibonacci.
 */
function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  const sequence = [0, 1];
  if (n === 2) return sequence;

  for (let i = 2; i < n; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextNumber);
  }

  return sequence;
}

// 2. Implementación Recursiva (fibsRec)
/**
 * Genera los primeros n números de la secuencia de Fibonacci de forma recursiva.
 * @param {number} n - El número de elementos de la secuencia a generar.
 * @returns {number[]} Un array con los primeros n números de Fibonacci.
 */
function fibsRec(n) {
  // Caso base: si n es 0 o menos, devuelve un array vacío.
  if (n <= 0) {
    return [];
  }
  // Caso base: si n es 1, devuelve el primer elemento.
  if (n === 1) {
    return [0];
  }
  // Caso base: si n es 2, devuelve los dos primeros elementos.
  if (n === 2) {
    return [0, 1];
  }

  // Caso recursivo: llama a la función para n-1.
  const sequence = fibsRec(n - 1);
  
  // Calcula el siguiente número y lo añade al final del array.
  const nextNumber = sequence[n - 2] + sequence[n - 3];
  sequence.push(nextNumber);

  return sequence;
}

// --- Pruebas ---
console.log("--- Pruebas para Fibonacci ---");

console.log("Función Iterativa (fibs):");
console.log("fibs(0):", fibs(0)); // Salida: []
console.log("fibs(1):", fibs(1)); // Salida: [0]
console.log("fibs(8):", fibs(8)); // Salida: [0, 1, 1, 2, 3, 5, 8, 13]
console.log("fibs(10):", fibs(10)); // Salida: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log("\nFunción Recursiva (fibsRec):");
console.log("fibsRec(0):", fibsRec(0)); // Salida: []
console.log("fibsRec(1):", fibsRec(1)); // Salida: [0]
console.log("fibsRec(8):", fibsRec(8)); // Salida: [0, 1, 1, 2, 3, 5, 8, 13]
console.log("fibsRec(10):", fibsRec(10)); // Salida: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
