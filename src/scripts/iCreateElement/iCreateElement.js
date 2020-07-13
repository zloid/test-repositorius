/**
 * For simplify creating DOM elements
 *
 * @function iCreateElement
 *
 * @returns {void}
 */
export default function iCreateElement(a, b) {
    const h3 = document.createElement('h3')
    h3.className = 'some-class'
    h3.innerHTML = 'text inside h3'
    document.body.appendChild(h3)
    
    return a + b
}
 