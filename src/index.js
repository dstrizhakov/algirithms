// bubble sort - пузырьковая
// Самая медленная, сложность: наилучшая - O(n), средняя и наихудшая - O(n^2)

function bubbleSort(arr) {
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
	return arr;
}

// merge sort - сортировка слиянием
// Одна из самых быстрых, сложность: наилучшая - O(n), средняя и наихудшая - O(n log n)
// но при этом он задействует O(n) дополнительной памяти

// function merge(left, right) {
// 	let arr = []
// 	while (left.length && right.length) {
// 			if (left[0] < right[0]) {
// 					arr.push(left.shift())  
// 			} else {
// 					arr.push(right.shift()) 
// 			}
// 	}
// 	return [ ...arr, ...left, ...right ]
// }
// function mergeSort(array) {
// 	const half = array.length / 2
// 	if (array.length < 2) {
// 		return array
// 	}
// 	const left = array.splice(0, half)
// 	return merge(mergeSort(left), mergeSort(array))
// }


const merge = (arrFirst, arrSecond) => {
	const arrSort = [];
	let i = j = 0;
	// сравниваем два массива, поочередно сдвигая указатели
	while (i < arrFirst.length && j < arrSecond.length) {
		arrSort.push(
			(arrFirst[i] < arrSecond[j]) ?
				arrFirst[i++] : arrSecond[j++]
		);
	}
	// обрабатываем последний элемент при разной длине массивов
	// и возвращаем один отсортированный массив
	return [
		...arrSort,
		...arrFirst.slice(i),
		...arrSecond.slice(j)
	];
};

const mergeSort = arr => {
	// Проверяем корректность переданных данных
	if (!arr || !arr.length) {
		return null;
	}
	//Если массив содержит один элемент просто возвращаем его
	if (arr.length <= 1) {
		return arr;
	}
	// Находим середину массива и делим его на два
	const middle = Math.floor(arr.length / 2);
	const arrLeft = arr.slice(0, middle);
	const arrRight = arr.slice(middle);
	// Для новых массивов снова вызываем сортировку,
	// сливаем их и возвращаем снова единый массив
	return merge(mergeSort(arrLeft), mergeSort(arrRight));;
};

// quick sort - быстрая сортировка
// Одна из самых быстрых, сложность: наилучшая - O(n), средняя - O(n log n) и наихудшая - O(n^2)
/* Хотя «О» большое здесь имеет те же значения (а в ряде случаев — хуже), 
что и у многих других алгоритмов сортировки, но на практике этот алгоритм зачастую 
работает быстрее, например, той же сортировки слиянием. Данные будут последовательно 
делиться пополам, пока не будут целиком отсортированы.
*/

function quickSort(arr) {
	if (arr.length == 0) return [];
	let a = [],
		b = [],
		p = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < p) a.push(arr[i]);
		else b.push(arr[i]);
	}
	return quickSort(a).concat(p, quickSort(b));
}

/*
binary Search - бинарный поиск
Поиск позиции искомого элемента в отсортированном массиве.
 */

const arr = [-1, 0, 1, 2, 3, 4, 6, 100, 10000];

function binarySearchIterationMethod(arr, i) {
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

	return -1;
}

binarySearchIterationMethod(arr, 100); // 7

function binarySearchRecursiveMethod(arr, i, left = 0, right = arr.length - 1) {
	if (left > right) return -1;
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

binarySearchRecursiveMethod(arr, 5); // -1