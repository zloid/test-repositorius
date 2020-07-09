'use strict'
// test
import { foo } from './test'

document.body.innerHTML = 'hello webpack!'
setTimeout(function() {
    document.body.innerHTML = foo()
    console.log(foo())
}, 999)

document.body.style.background = '#ddd'
setTimeout(() => {
    document.body.style.background = '#f4ecd7'
}, 2000)

setTimeout(() => {
    console.log('hello')
}, 3000)
