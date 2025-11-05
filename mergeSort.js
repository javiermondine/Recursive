// mergeSort.js

/**
 * Ordena un array de números usando el algoritmo Merge Sort.
 * @param {number[]} array - El array de números a ordenar.
 * @returns {number[]} Un nuevo array con los números ordenados.
 */
function mergeSort(array) {
  // Caso base: un array con 0 o 1 elemento ya está ordenado.
  if (array.length <= 1) {
    return array;
  }

  // Dividir el array en dos mitades.
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  // Llamada recursiva para ordenar cada mitad.
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Combinar (merge) las dos mitades ordenadas.
  return merge(sortedLeft, sortedRight);
}

/**
 * Combina dos arrays ordenados en un único array ordenado.
 * @param {number[]} leftArray - El primer array ordenado.
 * @param {number[]} rightArray - El segundo array ordenado.
 * @returns {number[]} Un nuevo array combinado y ordenado.
 */
function merge(leftArray, rightArray) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compara los elementos de ambos arrays y los añade al resultado en orden.
  while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
    if (leftArray[leftIndex] < rightArray[rightIndex]) {
      result.push(leftArray[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArray[rightIndex]);
      rightIndex++;
    }
  }

  // Añade los elementos restantes de cualquiera de los dos arrays.
  // (Solo uno de los dos bucles while se ejecutará).
  while (leftIndex < leftArray.length) {
    result.push(leftArray[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < rightArray.length) {
    result.push(rightArray[rightIndex]);
    rightIndex++;
  }

  return result;
}

// --- Pruebas ---
console.log("--- Pruebas para Merge Sort ---");

console.log("mergeSort([]):", mergeSort([])); // Salida: []
console.log("mergeSort([73]):", mergeSort([73])); // Salida: [73]
console.log("mergeSort([1, 2, 3, 4, 5]):", mergeSort([1, 2, 3, 4, 5])); // Salida: [1, 2, 3, 4, 5]
console.log("mergeSort([3, 2, 1, 13, 8, 5, 0, 1]):", mergeSort([3, 2, 1, 13, 8, 5, 0, 1])); // Salida: [0, 1, 1, 2, 3, 5, 8, 13]
console.log("mergeSort([105, 79, 100, 110]):", mergeSort([105, 79, 100, 110])); // Salida: [79, 100, 105, 110]
console.log("mergeSort([-5, 10, -15, 0, 20]):", mergeSort([-5, 10, -15, 0, 20])); // Salida: [-15, -5, 0, 10, 20]
