/** @module src-scripts-iCreateElement */

/**
 * For simplify creating custom HTMLElements in DOM
 * @function iCreateElement
 * @param {object} props - configure your future DOM element
 * @param {string} props.tag - any html tag
 * @param {string} props.inner - any html; will append to {props.tag} you set before
 * @param {string} props.className - html class for {props.tag} element
 * @returns {void} creating custom DOMElement
 * @example
 * // void: <body><div class="defaultClass"><i>my custom HTMLElement is ...</i></div></body>
 * iCreateElement({})
 * @example
 * // void: <body><h3 class="defaultClass">hello h3</h3></body>
 * iCreateElement({ tag: 'h3', inner: 'hello h3' })
 * @example
 * // void: <body><div class="defaultClass"><span class="i-class"><p>any html code</p></span></div></body>
 * iCreateElement({
            inner: '<span class="i-class"><p>any html code</p></span>',
        })
 * @example
 * // void: <body><div class="defaultClass">html class</div></body>
 * iCreateElement({ tag: 'div', inner: 'html class' })
 * @example
 * // void: <body><div class="my-best-html-class">html class</div></body>
 * iCreateElement({ tag: 'div', inner: 'html class', className: 'my-best-html-class' })  
 */
export default function iCreateElement({
    tag = 'div',
    inner = '<i>my custom HTMLElement is ...</i>',
    className = 'defaultClass',
}) {
    // var element = document.createElement(tagName[, options]);
    const customElement = document.createElement(tag)
    // adding html class
    customElement.className = className
    // adding innerHTML
    customElement.innerHTML = inner
    // append
    document.body.appendChild(customElement)
}
