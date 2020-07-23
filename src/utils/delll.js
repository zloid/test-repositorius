export default function iCreateElement({
    tag = 'div',
    only = false,
    inner = '<i>my custom HTMLElement is ...</i>',
    className = 'defaultClass',
    id = '',
    parentId = '',
    //todo
    cut = 'default',
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
    // we can fix some default behavior 
    switch (cut) {
        case 'default':
            break
        case 'all': {
            // works only if props {id} is exist
            if (arguments[0].id) {
                const element = document.getElementById(id)
                inner === '<i>my custom HTMLElement is ...</i>' &&
                    (element.innerHTML = '')
                element.removeAttribute('class')
            }
            break
        }
        case 'class': {
            // works only if props {id} is exist
            if (arguments[0].id) {
                /* const pattern = className
                const regExp = new RegExp(pattern, 'g')
                element.className = element.className.replace(regExp, '') */
                const element = document.getElementById(id)
                element.removeAttribute('class')
            }
            break
        }
    }
}