// tst
// import { foo } from './tst'
import iCreateElement from './scripts/iCreateElement/iCreateElement'

document.body.style.background = 'papayawhip'
// foo()
console.log(
    'calc-correct-branch: ',
    (() => {
        return 111 + 1
    })()
)
iCreateElement(999, 2)

iCreateElement({ tag: 'p', only: true })

iCreateElement({
    tag: 'div',
    inner: 'html id',
    id: 'my-best-id    ',
})

iCreateElement({ tag: 'p', only: true })

iCreateElement({ id: 'root', className: 'cls', inner: 'rooot', tag: 'button' })

iCreateElement({
    tag: 'button',
    inner: `he-l-lo`,
    parentId: '#root',
})
iCreateElement({ tag: 'button', inner: `he-l-lo22`, parentId: '#root' })

/*
// const btn = () => iCreateElement({ tag: 'button', inner: 'array loop' })
const btn = iCreateElement
;[...Array(5)].forEach(() =>
    btn({ inner: '<input placeholder="iPlcHldr" /> <b>lorem' })
)

iCreateElement({ tag: 'hr', inner: '' })
iCreateElement({ tag: 'table', inner: '<td>tbl</td>' })

iCreateElement({ tag: 'strong', inner: 'hell' })

iCreateElement({
    inner: '<span class="i-class"><p>any html ckjhbode</p></span>',
})
// appending: by the rule
// create: custom DOM elements
iCreateElement({
    tag: 'button',
    className: 'myButton',
    inner: 'just a button',
})
// create and append new element to previous button
iCreateElement({
    tag: 'strong',
    inner: ' very strong ',
    parentId: '.myButton',
})
iCreateElement({
    tag: 'strong',
    inner: ' very strong ',
    parentId: '.myButton',
})
iCreateElement({
    tag: '         button',
    inner: ' 222 ',
    parentId: '      .myButton          ',
    className: 'hal',
})
iCreateElement({
    tag: '         button',
    inner: ' 333 ',
    parentId: '      .hal          ',
})
iCreateElement({
    tag: '         button',
    inner: ' 333 ',
    parentId: '      .hal          ',
})
iCreateElement({
    tag: '         button',
    inner: ' 333 ',
    parentId: '      .hal          ',
})
iCreateElement({})
iCreateElement({ inner: 1 })
iCreateElement({ inner: '3', tag: 'h2' })
iCreateElement({ inner: '4', tag: 'button' })
iCreateElement({ tag: 'br', className: '' })
iCreateElement({ inner: '<a href="/">5.1</a>', parentId: '.hal' })

iCreateElement({ inner: '2', tag: 'hr' })
iCreateElement({ tag: 'i', inner: Math.random(), className: 'btn-cls' })
iCreateElement({ tag: 'p', inner: '' })
iCreateElement({ tag: 'i', inner: Math.random(), className: 'btn-cls' })

iCreateElement({ tag: 'br', only: true })
iCreateElement({ tag: 'br', only: true, parentId: '.hal' })
iCreateElement({ tag: 'br', only: true, parentId: '.hal' })
iCreateElement({ tag: 'hr', only: true, parentId: '.hal' })
iCreateElement({ tag: 'i', inner: 1 / 0, className: 'btn-cls' })

;[...Array(9)].forEach(() => {
    document.body.innerHTML += `<button>i button - ${Math.random()}</button>`
})


iCreateElement({})
iCreateElement({})
iCreateElement({})
iCreateElement({})
iCreateElement({ tag: 'button', inner: 'i Maria', className: 'hello' })

iCreateElement({ tag: 'hr', inner: '' })
iCreateElement({ tag: 'hr', only: true })

iCreateElement({ tag: 'button', inner: 'i not a Maria', parentId: '.hello' })
iCreateElement({ tag: 'button', inner: 'i not a Maria', parentId: '.hello' })
iCreateElement({ tag: 'button', inner: 'i not a Maria', parentId: '.hello' })
iCreateElement({ tag: 'button', inner: 'i not a Maria', parentId: '.hello' })
iCreateElement({ tag: 'button', inner: 'i not a Maria', parentId: '.hello' })

// iCreateElement({ inner: '987654321', parentId: '.i-h4' })


const someBtn = document.createElement('button')
someBtn.innerHTML = 'some btn 324'
document.body.appendChild(someBtn)

iCreateElement({ tag: 'h3', only: true })

iCreateElement({ tag: 'h3', only: false })

iCreateElement({ tag: 'h4', className: 'i-h4', inner: 'iii h4' })

const btn2 = document.querySelector('.i-h4')
// console.log(btn2.appendChild())
btn2.innerHTML += ': yyy<button>bb</button>'
iCreateElement({tag: 'button', parentId: '.i-h4'})
*/
