import * as mortgage from './mortgage';

// document.getElementById('calcBtn').addEventListener('click', function () {
// document.getElementById('calcBtn').addEventListener('click', () => {
//     let principal = document.getElementById("principal").value;
//     let years = document.getElementById("years").value;
//     let rate = document.getElementById("rate").value;
//     // let monthlyPayment = calculateMonthlyPayment(principal, years, rate);
//     // let {monthlyPayment, monthlyRate} = calculateMonthlyPayment(principal, years, rate); //for invoking calculateAmortization
// 	let {monthlyPayment, monthlyRate, amortization} = mortgage.calculateAmortization(principal, years, rate);
//     document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
//     document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
// 	amortization.forEach(month => console.log(month));
// });

( ($) => {
	$('document').ready( () => {
		$('#calcBtn').click( () => {
			let principal   = $('#principal').val();
			let years       = $('#years').val();
			let rate		= $('#rate').val();

			let {monthlyPayment, monthlyRate}	= mortgage.calculateMonthlyPayment(principal, years, rate);
			$('#monthlyPayment').html(monthlyPayment.toFixed(2));
			$('#monthlyRate').html((monthlyRate * 100).toFixed(2));
		});
	});
})(jQuery)