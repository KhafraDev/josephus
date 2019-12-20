/**
 * https://en.wikipedia.org/wiki/Josephus_problem
 * @param {number} num Number to solve for
 * @returns {number} The winner
 */
function josephus(num: number): number {
    if(num < 2) return NaN;

    const l = num - Math.pow(2, Math.floor(Math.log(num) / Math.log(2)));
    return 2 * l + 1;
}

export default josephus;