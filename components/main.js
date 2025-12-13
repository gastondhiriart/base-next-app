// Dado un número entero n y un array de n enteros, debés ordenar el array siguiendo las siguientes reglas:

// Los elementos con mayor frecuencia deben aparecer primero.
// (Es decir, el número que más veces aparece debe estar más al inicio del array.)

// Si dos números tienen la misma frecuencia, entonces deben ordenarse por valor ascendente
// (el número más pequeño primero).

// Tras ordenar el array según estas reglas, debés imprimir los elementos en una sola línea,
// separados por un espacio, como un string.

const frequencySort = (n, arr) => {
  const freq = new Map();

  for (let i = 0; i < n; i++) {
    freq.set(i, (freq.get(i) || 0) + 1);
  }

  const result = arr.slice().sort((a, b) => {
    const fa = freq.get(a);
    const fb = freq.get(b);

    if (fa !== fb) {
      return fb - fa; // frecuencia más alta primero
    }
    return a - b;
  });

  return result.join(" ");
};

const Main = () => {
  const unorderedArr = [2, 4, 5, 6, 2, 5, 2, 4, 3];

  return (
    <div>
      <h1>Hello</h1>
      {frequencySort(unorderedArr.length, unorderedArr)}
    </div>
  );
};

export default Main;
