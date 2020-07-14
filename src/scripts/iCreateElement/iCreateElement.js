/**@module scripts-iCreateElement */

/**
 * For initial tests and simplify creating DOM elements 
 * @function iCreateElement
 * @param {number} a - IEEE 754 standard
 * @param {number} b - IEEE 754 standard
 * @returns {number} summ of {a} and {b}; new h3 HTMLNodeElement
 * @example
 * // void: <h3>text inside h3 - in prm - 333</h3>
 * // returns 333
 * iCreateElement(111, 222)
 */
export const someFun = (a) => console.log(a + 123, '  aaaabbbbccc')

export default function iCreateElement(a, b) {
    const h3 = document.createElement('h3')
    h3.className = 'some-class'
    h3.innerHTML = `text inside h3 - in prm - ${a + b}`
    document.body.appendChild(h3)
    return a + b
}



