// bubble sort - пузырьковая
// Самая медленная, сложность: наилучшая - O(n), средняя и наихудшая - O(n^2)

function bubbleSort(arr) {
	let start = performance.now();
	const n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		for (let j = 0; j < n - 1 - i; j++) {
			if (arr[j + 1] < arr[j]) {
				let t = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = t;
			}
		}
	}
	console.log((performance.now() - start), 'мкс');
	return arr;
}

let s1 = [1, 100, -1, 10000, 6, 5, -20, 105, 2];
console.log(s1, bubbleSort(s1));