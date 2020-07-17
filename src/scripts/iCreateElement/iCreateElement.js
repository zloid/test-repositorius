/**@module src-scripts-iCreateElement */

/**
 * For simplify creating custom HTMLElements in DOM
 * @function iCreateElement
 * @param {object} props - configure your future DOM element
 * @param {string} props.tag - any html tag
 * @param {string} props.inner - any html; will append to {tag} you set before 
 * @returns {void} creating custom DOMElement
 * @example
 * // void: <body><div><i>my custom HTMLElement is ...</i></div></body>
 * iCreateElement({})
 * @example
 * // void: <body><h3>hello h3</h3></body>
 * iCreateElement({ tag: 'h3', inner: 'hello h3' })
 * @example
 * // void: <body><span class="i-class"><p>any html code</p></span></body>
 * iCreateElement({
            inner: '<span class="i-class"><p>any html code</p></span>',
        })
 */
export default function iCreateElement({
    tag = 'div',
    inner = '<i>my custom HTMLElement is ...</i>',
}) {    
    //var element = document.createElement(tagName[, options]);
    const customElement = document.createElement(tag)
    customElement.innerHTML = inner
    document.body.appendChild(customElement)
}
