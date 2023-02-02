/*
binary Search - бинарный поиск
Поиск позиции искомого элемента в отсортированном массиве.
 */


function binarySearchIterationMethod(arr, i) {
	let start = performance.now();
	let left = 0;
	let right = arr.length - 1;
	let mid;

	while (left <= right) {
		mid = Math.floor((right + left) / 2);

		if (arr[mid] === i) {
			return mid;
		} else if (arr[mid] > i) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	console.log((performance.now() - start), 'мкс');
	return -1;
}



function binarySearchRecursiveMethod(arr, i, left = 0, right = arr.length - 1) {
	let start = performance.now();
	if (left > right) {
		console.log((performance.now() - start), 'мкс');
		return -1;
	}
	else {
		let mid = Math.floor((right + left) / 2);
		if (arr[mid] === i) {
			return mid;
		} else if (arr[mid] > i) {
			return binarySearchRecursiveMethod(arr, i, left, mid - 1);
		} else {
			return binarySearchRecursiveMethod(arr, i, mid + 1, right);
		}
	}
}


const arr = [-1, 0, 1, 2, 3, 4, 6, 100, 10000];
console.log(arr, binarySearchIterationMethod(arr, 5)); // 7
console.log(arr, binarySearchRecursiveMethod(arr, 5)); //-1


