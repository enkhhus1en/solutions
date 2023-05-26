/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let total = 0

    let max = Math.max(...salary)
    let min = Math.min(...salary)

    for(var i = 0; i < salary.length; i++){
        if(salary[i] !== max && salary[i] !== min){
            total += salary[i];
        }
    }

    let avg = total / (salary.length - 2);
    return avg
};