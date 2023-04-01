'use strict' // Включен современный режим

// Задача 1

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c; // ищем d - дискриминант квадратного уравнения

	if (d < 0) {
		arr = [];
		console.log('Коэффициент не может быть равен нулю');
	} else if (d === 0) {

		let x1 = -b / (2 * a); // Корни будут воспадать, т.е. х1 = х2

		arr.push(x1);
	}

	if (d > 0) {

		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);

		arr.push(x1, x2);
	}

	return arr; // возвращаем массив 

}

// Задача 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	// Функция принимает аргументы (выше) и выдает сумму, которую в итоге заплатит клиент:
	// (первоначальный взнос, погашение основного долга, % за пользование кредитом)

	let monthlyPercent = percent / 100 / 12; // преобразовали годовой в месячный % (ставка) за пользование кредитом
	let contribution; // первоначальный взнос
	let amount; // сумма кредита
	let countMonths; // срок кредита
	let totalAmount; // общая сумма, кот. придется заплатить клиенту
	let monthly; // ежемесячный платеж
	let bodyCredit; // тело кредита

	if (!isNaN(percent) && !isNaN(contribution) && !isNaN(amount)) {
		const bodyCredit = amount - contribution;
		// Посчитайте тело кредита — сумму, которую нужно вернуть банку (сумма кредита - первоначальный взнос).
		const monthly = bodyCredit * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
		const totalAmount = parseFloat((monthly * countMonths).toFixed(2)); // функция parseFloat возвращает число без точки.
		return totalAmount;
	}

	return false;

}

// Платёж = S * (P + (P / (((1 + P)^n) - 1))), где: S — тело кредита, P — 1/12 процентной ставки (от 0 до 1) ->
// n — количество месяцев, ^ — возведение в степень.

// Если параметр функции будет строкой, то преобразовать в число. В остальных случаях возвращайте false.


