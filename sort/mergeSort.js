/* merge sort - сортировка слиянием
Одна из самых быстрых, сложность: наилучшая - O(n), средняя и наихудшая - O(n log n)
но при этом он задействует O(n) дополнительной памяти
*/

// function merge(left, right) {
// 	let arr = []
// 	while (left.length && right.length) {
// 		if (left[0] < right[0]) {
// 			arr.push(left.shift())
// 		} else {
// 			arr.push(right.shift())
// 		}
// 	}
// 	return [...arr, ...left, ...right]
// }

// function mergeSort(array) {
// 	const half = array.length / 2
// 	if (array.length < 2) {
// 		return array
// 	}
// 	const left = array.splice(0, half);
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
	let start = performance.now();
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
	console.log((performance.now() - start), 'мкс');
	return merge(mergeSort(arrLeft), mergeSort(arrRight));;
};



let s1 = [1, 100, -1, 10000, 6, 5, -20, 105, 2];
console.log(s1, mergeSort(s1));