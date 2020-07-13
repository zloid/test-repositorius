// tst
import { foo } from './tst'
foo()
console.log('calc-correct-branch: ',
    (() => {
        return 111 + 1
    })()
)


