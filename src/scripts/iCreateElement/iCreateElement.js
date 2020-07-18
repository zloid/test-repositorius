/** @module src-scripts-iCreateElement */

/**
 * For simplify creating custom HTMLElements in DOM
 * @function iCreateElement
 * @param {object} props - configure your future DOM element
 * @param {string} props.tag - any html tag
 * @param {string} props.inner - any html; will append to {props.tag} you set before
 * @param {string} props.className - html class for {props.tag} element
 * @param {string} props.parentId - html id or html class of parent element, for appending created {props.tag} element, by default parent DOM element is '<body></body>'
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
 * @example
 * // void: '<button class="myButton">just a button<strong class="defaultClass">very strong</strong></button>'
 * iCreateElement({
        tag: 'button',
        className: 'myButton',
        inner: 'just a button',
   })
    iCreateElement({
        tag: 'strong',
        inner: 'very strong',
        parentId: '.myButton',
    })
 * 
 */
export default function iCreateElement({
    tag = 'div',
    inner = '<i>my custom HTMLElement is ...</i>',
    className = 'defaultClass',
    parentId = '',
}) {
    // var element = document.createElement(tagName[, options]);
    const customElement = document.createElement(tag)
    // adding html class
    customElement.className = className
    // adding innerHTML
    customElement.innerHTML = inner
    // append: by default
    parentId === ''
        ? document.body.appendChild(customElement)
        : document.querySelector(parentId).appendChild(customElement)
}
