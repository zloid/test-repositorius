/**@module scripts-iCreateElement */

/**
 * @function iCreateElement
 * For tests and simplify creating DOM elements in future 
 * @param {number} a - IEEE 754 
 * @param {number} b : IEEE 754 
 * @returns {number} summ of {a} and {b}
 * @example
 * // returns 20
 * iCreateElement(8, 12)
 */

export default function iCreateElement(a, b) {
    const h3 = document.createElement('h3')
    h3.className = 'some-class'
    h3.innerHTML = 'text inside h3'
    document.body.appendChild(h3)
    return a + b
}


