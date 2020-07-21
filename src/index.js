import Reef from 'reefjs'
// own
import iCreateElement from './utils/iCreateElement'
import App from './app/App'
// styles
import './bootstrap.css'
// own styles
import './own.css'

// create DOM element <div id="root"></div>
// iCreateElement({ id: 'app', className: '', inner: '' })
iCreateElement({ id: 'root', fix: 'all' })
// <div id="root"><div class="badge badge-primary">Hello, world!</div></div>
App.render()

// iCreateElement({ id: 'toor', fix: 'all', tag: 'p', inner: 'hello' })

// iCreateElement({ id: 'root', fix: 'all' })

/*
// bg
document.body.style.background = 'papayawhip'

iCreateElement({ id: 'app', inner: '' })

var app = new Reef('#app', {
    template: '<h1>Hello, world!</h1>',
})

// Some data
var app = new Reef('#app', {
    data: {
        greeting: 'Hello',
        name: 'world',
    },
    template: function(props) {
        // return `<h1>${props.greeting}, ${props.name}!</h1>`;
        return `
            <div class="container">i cnt - ${props.greeting} - ${props.name} <button id="btn333">bbee</div>
        `
    },
})

new Reef('#btn333', {
    template: function(props) {
        return `
         <p>ku ku</p>
        `
    },
})

// Nested component
new Reef('#btn333', {
    data: {
        todos: ['Swim', 'Climb', 'Jump', 'Play'],
    },
    template: function(props) {
        return `
			<ul>
				${props.todos
                    .map(function(todo) {
                        return `<li>${todo}</li>`
                    })
                    .join('')}
                <div class="row">
                    <div class="col">
                    
                        col1
                     </div>
                     <div class="col">
                    
                        col2
                     </div>
                     
                    rrr
                </div>
			</ul>`
    },
    attachTo: app,
})

app.render()

iCreateElement({ className: 'badge_1 badge badge-primary' })


let hel = 666

iCreateElement({
    inner: `
    <div class="container">
    <div class="row">
                    <div class="col">
                    ${hel}
                        col1
                     </div>
                     <div class="col">
                    
                        col2
                     </div>                     
                    rrr ${hel}
                </div>
                </div>
                `,
    parentId: '.badge_1',
})

iCreateElement({ tag: 'button', inner: 'click this', id: 'clbb' })
document.querySelector('#clbb').addEventListener('click', ev => {
    app.data.greeting = 'Hiiiiiiiiiiii'
})

iCreateElement({
    inner: '123123',
    className: 'row_2 row',
    parentId: '.container',
})

iCreateElement({
    inner: `
    <button>ibb11.1
        <button>heeee2.2
            <button>heeee3.3</button>
        </button>
    </button>
`,
    parentId: '.container',
})
*/

/*

// container, main
iCreateElement({ className: 'container', inner: '' })
// row_1, main, screen
iCreateElement({ inner: '', className: 'row_1 row', parentId: '.container' })
// col_1
iCreateElement({
    inner: 'col_1 col',
    className: 'col_1 col',
    parentId: '.row_1',
})
 
// row_2, main, buttons
iCreateElement({ inner: '', className: 'row_2 row', parentId: '.container' })
// col_2
iCreateElement({
    inner: 'col_2 col',
    className: 'col_2 col',
    parentId: '.row_2',
})
// col_2
iCreateElement({
    inner: 'col_2 col',
    className: 'col_2 col',
    parentId: '.row_2',
})
// col_2
iCreateElement({
    inner: 'col_2 col',
    className: 'col_2 col',
    parentId: '.row_2',
})

/* 
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

iCreateElement({ id: 'root', className: 'cls', inner: 'rooot ', tag: 'button' })

iCreateElement({
    tag: 'button',
    inner: `he-l-lo`,
    parentId: '#root',
    className: 'btn btn-success'
})
iCreateElement({ tag: 'button', inner: `he-l-lo22`, parentId: '#root' })

iCreateElement({ tag: 'p', only: true })

iCreateElement({ tag: 'button', inner: 'root_2', id: '#root_2' })

iCreateElement({tag: 'p', only: true})

iCreateElement({
    tag: 'button',
    inner: `2he-l-lo33.1`,
    id: 'diii',
    className: 'btn btn-success'
})
 */

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
