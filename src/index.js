// tst
import { foo } from './tst'
import iCreateElement, {
    someFun,
} from './scripts/iCreateElement/iCreateElement'

// import { someFun } from './scripts/iCreateElement/iCreateElement'
foo()
console.log(
    'calc-correct-branch: ',
    (() => {
        return 111 + 1
    })()
)
iCreateElement(1, 111)
iCreateElement(999, 2)
someFun(1)
