"use strict";
//Дано масив, який зберігає кількість відвідувачів магазину протягом тижня. Вивести на екран:
// номери днів, протягом яких кількість відвідувачів була меншою за 20;
// номери днів, коли кількість відвідувачів була мінімальною;
// номери днів, коли кількість відвідувачів була максимальною;
// загальну кількість клієнтів у робочі дні та окремо загальну кількість клієнтів у вихідні.
if (confirm('Почати?')) {
    // ------------------------------------------0   1   2   3   4   5   6
    //------------------вивід днів починається з 1   2   3   4   5   6   7
    const weeklyStoreVisitorsCount = [20, 15, 35, 18, 40, 38, 70];
    //---------------------------------------------------------------------
    function getDaysWithLessThan20Visitors(visitorsCount) {
        const dayNumbers = [];
        for (let i = 0; i < visitorsCount.length; i++) {
            if (visitorsCount[i] < 20)
                dayNumbers.push(i + 1);
        }
        return dayNumbers;
    }
    const daysWithLessThan20Visitors = getDaysWithLessThan20Visitors(weeklyStoreVisitorsCount);
    document.write(`Номери днів, протягом яких кількість відвідувачів була меншою за 20: ${daysWithLessThan20Visitors}<br>`);
    //---------------------------------------------------------------------
    function getDaysWithMinVisitors(visitorsCount) {
        const dayNumbers = [];
        let minVisitors = visitorsCount[0];
        for (let i = 0; i < visitorsCount.length; i++) {
            if (visitorsCount[i] < minVisitors) {
                minVisitors = visitorsCount[i];
            }
        }
        for (let j = 0; j < visitorsCount.length; j++) {
            if (visitorsCount[j] === minVisitors)
                dayNumbers.push(j + 1);
        }
        return dayNumbers;
    }
    const daysWithMinVisitors = getDaysWithMinVisitors(weeklyStoreVisitorsCount);
    document.write(`Номери днів, коли кількість відвідувачів була мінімальною: ${daysWithMinVisitors}<br>`);
    //---------------------------------------------------------------------
    function getDaysWithMaxVisitors(visitorsCount) {
        const dayNumbers = [];
        let maxVisitors = visitorsCount[0];
        for (let i = 0; i < visitorsCount.length; i++) {
            if (visitorsCount[i] > maxVisitors) {
                maxVisitors = visitorsCount[i];
            }
        }
        for (let j = 0; j < visitorsCount.length; j++) {
            if (visitorsCount[j] === maxVisitors)
                dayNumbers.push(j + 1);
        }
        return dayNumbers;
    }
    const daysWithMaxVisitors = getDaysWithMaxVisitors(weeklyStoreVisitorsCount);
    document.write(`Номери днів, коли кількість відвідувачів була максимальною: ${daysWithMaxVisitors}<br>`);
    //---------------------------------------------------------------------
    function getTotalvisitorsCount(visitorsCount) {
        let totalWeekdayVisitorsCount = 0;
        for (let i = 0; i < 5; i++) {
            totalWeekdayVisitorsCount += visitorsCount[i];
        }
        let totalWeekendVisitorsCount = 0;
        for (let j = 5; j < visitorsCount.length; j++) {
            totalWeekendVisitorsCount += visitorsCount[j];
        }
        return [totalWeekdayVisitorsCount, totalWeekendVisitorsCount];
    }
    let result = getTotalvisitorsCount(weeklyStoreVisitorsCount);
    document.write(`Загальна кількість клієнтів у робочі дні ${result[0]}, загальна кількість клієнтів у вихідні дні ${result[1]} `);
}
