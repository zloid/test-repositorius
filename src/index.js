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
iCreateElement(1, 111)
iCreateElement(999, 2)

iCreateElement({ tag: 'button', inner: 'hello' })
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
