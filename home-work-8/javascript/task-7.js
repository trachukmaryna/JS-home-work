"use strict";
//Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці(з парними номерами);
// за місяці, які є початковими у сезоні(весна, літо, осінь, зима).
if (confirm('Почати?')) {
    //---------------------------------0    1    2    3    4    5    6    7    8    9   10    11
    //-------місяці в житті рахуємо з  1    2    3    4    5    6    7    8    9   10   11    12 
    const yearlyPayments = [100, 300, 220, 480, 600, 720, 345, 880, 210, 945, 550, 400];
    function getPaymentsSumForPeriod(payments, startMonth, endMonth, monthStep) {
        let totalPayments = 0;
        for (let i = startMonth - 1; i <= endMonth - 1; i += monthStep) {
            totalPayments += payments[i];
        }
        return totalPayments;
    }
    const totalYearlyPayments = getPaymentsSumForPeriod(yearlyPayments, 1, 12, 1);
    const firstHalfYearPayments = getPaymentsSumForPeriod(yearlyPayments, 1, 6, 1);
    const secondHalfYearPayments = getPaymentsSumForPeriod(yearlyPayments, 7, 12, 1);
    const summerPayments = getPaymentsSumForPeriod(yearlyPayments, 6, 8, 1);
    const secondQuarterPayments = getPaymentsSumForPeriod(yearlyPayments, 4, 6, 1);
    const evenMonthsPayments = getPaymentsSumForPeriod(yearlyPayments, 2, 12, 2);
    const seasonStartMonthsPayments = getPaymentsSumForPeriod(yearlyPayments, 3, 12, 3);
    document.write(`
		1. Сума грошей за весь рік: ${totalYearlyPayments} грн <br>
		2. Сума грошей за першу половину року: ${firstHalfYearPayments} грн<br>
		3. Сума грошей за другу половину року: ${secondHalfYearPayments} грн<br>
		4. Сума грошей за літо: ${summerPayments} грн<br>
		5. Сума грошей за ІІ квартал: ${secondQuarterPayments} грн<br>
		6. Сума грошей за парні місяці: ${evenMonthsPayments} грн<br>
		7. Сума грошей за місяці, які є початковими у сезоні: ${seasonStartMonthsPayments} грн<br>
	`);
}
