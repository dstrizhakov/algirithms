// quick sort - быстрая сортировка
// Одна из самых быстрых, сложность: наилучшая - O(n), средняя - O(n log n) и наихудшая - O(n^2)
/* Хотя «О» большое здесь имеет те же значения (а в ряде случаев — хуже), 
что и у многих других алгоритмов сортировки, но на практике этот алгоритм зачастую 
работает быстрее, например, той же сортировки слиянием. Данные будут последовательно 
делиться пополам, пока не будут целиком отсортированы.
*/

function quickSort(arr) {
	let start = performance.now();
	if (arr.length == 0) return [];
	let a = [],
		b = [],
		p = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < p) a.push(arr[i]);
		else b.push(arr[i]);
	}
	console.log((performance.now() - start), 'мкс');
	return quickSort(a).concat(p, quickSort(b));
}

let s1 = [1, 100, -1, 10000, 6, 5, -20, 105, 2];
console.log(s1, quickSort(s1));