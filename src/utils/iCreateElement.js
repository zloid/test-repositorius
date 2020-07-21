/** @module src-scripts-iCreateElement */

/**
 * For simplify creating custom HTMLElements in DOM
 * @function iCreateElement
 * @param {object} props - configure your future DOM element
 * @param {string} props.tag - any html tag
 * @param {boolean} props.only - false by default, set true if needed to create only hollow tag, without default  innerHTML and default html class
 * @param {string} props.inner - any html; will append to {props.tag} you set before; have default value
 * @param {string} props.className - html class for {props.tag} element, by default each {props.tag} set with html class 'defaultClass'
 * @param {string} props.id - html id for {props.tag} element, by default each {props.tag} does not id
 * @param {string} props.parentId - html id or html class of parent element, for appending created {props.tag} element to the end of the parent, by default parent is DOM element 'body'
 * @param {string} props.fix - default / id / all - for fixing some behavior
 * @returns {void} creating custom DOMElement
 * @example
 * // void: <body><div class="defaultClass"><i>my custom HTMLElement is ...</i></div></body>
 * iCreateElement({})
 * @example
 * // void: <body><h3 class="defaultClass">hello h3</h3></body>
 * iCreateElement({ tag: 'h3', inner: 'hello h3' })
 * @example
 * // void: <body><br></body>
 * iCreateElement({ tag: 'br', only: true })
 * @example
 * // void: <body><h3></h3></body>
 * iCreateElement({ tag: 'h3', only: true })
 * @example
 * // void: <body><h3 class="defaultClass"><i>my custom HTMLElement is ...</i></h3></body>
 * iCreateElement({ tag: 'h3', only: false })
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
 * @example
 * // void: <div id="my-best-id" class="defaultClass">html id</div>
       iCreateElement({
            tag: 'div',
            inner: 'html id',
            id: 'my-best-id    ',
        })
* @example
* // void: <button id="root" class="cls">rooot<button class="defaultClass">hello</button></button>
        iCreateElement({
            id: 'root',
            className: 'cls',
            inner: 'rooot',
            tag: 'button'
        })
        iCreateElement({
            tag: 'button',
            inner: 'hello',
            parentId: '#root'
        })
* @example
  // void: <p id="foo">hello</p>
  iCreateElement({id: 'foo', fix: 'all', tag: 'p', inner: 'hello'})
* @example
  // void: <div id="root"></div>
  iCreateElement({ id: 'root', fix: 'all' })
 */
export default function iCreateElement({
    tag = 'div',
    only = false,
    inner = '<i>my custom HTMLElement is ...</i>',
    className = 'defaultClass',
    id = '',
    parentId = '',
    //todo
    fix = 'default',
}) {
    if (only) {
        const customElement = document.createElement(tag.trim())

        parentId === ''
            ? document.body.appendChild(customElement)
            : document.querySelector(parentId).appendChild(customElement)

        return
    }
    // var element = document.createElement(tagName[, options]);
    const customElement = document.createElement(tag.trim())
    // adding id
    id !== '' && (customElement.id = id.trim())
    // adding html class
    customElement.className = className.trim()
    // adding innerHTML
    customElement.innerHTML = inner
    // append: by default
    parentId === ''
        ? document.body.appendChild(customElement)
        : document.querySelector(parentId).appendChild(customElement)

    switch (fix) {
        case 'default':
            break
        case 'id': {
            /* const pattern = className
            const regExp = new RegExp(pattern, 'g')
            element.className = element.className.replace(regExp, '') */
            const element = document.getElementById(id)
            element.removeAttribute('class')
            break
        }
        case 'all': {
            const element = document.getElementById(id)

            console.log(inner)
 
            inner === '<i>my custom HTMLElement is ...</i>' &&
                (element.innerHTML = '')

            element.removeAttribute('class')
            console.log(element)
            break
        }
    }
}
