// tst
import { foo } from './tst'
// import iCreateElement from './scripts/iCreateElement/iCreateElement'
foo()
console.log(
    'calc-correct-branch: ',
    (() => {
        return 111 + 1
    })()
)

// iCreateElement()
// iCreateElement()
// console.log(`iCreateElement()`, iCreateElement)
// iCreateElement()
