import iCreateElement from '../iCreateElement.js'
import { screen } from '@testing-library/dom'

describe('iCreateElement()', () => {
    // basic tests
    it('created new HTMLElement in DOM: <div><i>my custom HTMLElement is ...</i></div>', () => {
        // test: before
        const before = screen.queryByText(/^my custom HTMLElement is ...$/i)
        expect(before).toBe(null)
        // create: DOM-node
        iCreateElement({})
        // test: after
        const after = screen.getByText(/^my custom HTMLElement is ...$/i)
        expect(after.tagName).toBe('I')
        expect(after.textContent).toBe('my custom HTMLElement is ...')
        // debug
        screen.debug()
        console.log(216837)
        // clear DOM
        document.body.innerHTML = ''
    })
    it('created new HTMLElement in DOM: <h3>hello h3</h3>', () => {
        // test: before
        const before = screen.queryByText(/^hello h3$/i)
        expect(before).toBe(null)
        // create: DOM-node
        iCreateElement({
            tag: 'h3',
            inner: 'hello h3',
        })
        // test: after
        const after = screen.getByText(/^hello h3$/i)
        expect(after.tagName).toBe('H3')
        expect(after.textContent).toBe('hello h3')
        // debug
        screen.debug()
        console.log(12987)
        // clear DOM
        document.body.innerHTML = ''
    })
    it('quick inserting any html code in DOM', () => {
        // test: before
        const before = screen.queryByText(/^any html code$/i)
        expect(before).toBe(null)
        // create: DOM-node
        iCreateElement({
            inner: '<span class="i-class"><p>any html code</p></span>',
        })
        // test: after
        const after = screen.getByText(/^any html code$/i)
        expect(after.textContent).toBe('any html code')
        expect(after.tagName).toBe('P')
        // debug
        screen.debug()
        console.log(213978)
        // clear DOM
        document.body.innerHTML = ''
    })
    // html classes
    it('default class of created node element must be a defaultClass', () => {
        // create: DOM-node
        iCreateElement({ tag: 'div', inner: 'html class' })
        // test
        const element = screen.getByText(/^html class$/i)
        expect(element.className).toBe('defaultClass')
        // debug
        screen.debug()
        console.log(1209834)
        // clear DOM
        document.body.innerHTML = ''
    })
    it('new class of created node element must be a my-best-html-class', () => {
        // create: DOM-node
        iCreateElement({
            tag: 'div',
            inner: 'html class',
            className: 'my-best-html-class',
        })
        // test
        const element = screen.getByText(/^html class$/i)
        expect(element.className).toBe('my-best-html-class')
        // debug
        screen.debug()
        console.log(978011)
        // clear DOM
        document.body.innerHTML = ''
    })
    // appending
    it('appending rules', () => {
        // DOM is clear
        expect(document.body.innerHTML).toBe('')
        // create: some DOM element
        iCreateElement({})
        // appending: by default
        expect(document.body.innerHTML).toBe(
            '<div class="defaultClass"><i>my custom HTMLElement is ...</i></div>'
        )
        // clear DOm
        document.body.innerHTML = ''
        // DOM is clear
        expect(document.body.innerHTML).toBe('')
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
            inner: 'very strong',
            parentId: '.myButton',
        })
        expect(document.body.innerHTML).toBe(
            '<button class="myButton">just a button<strong class="defaultClass">very strong</strong></button>'
        )
        //debug
        screen.debug()
        console.log(674852)
        // clear DOm
        document.body.innerHTML = ''
    })
})
