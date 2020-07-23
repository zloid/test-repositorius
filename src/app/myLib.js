import iCreateElement from '../utils/iCreateElement'
// define own lib
const myLib = {
    iRnd: () => alert(Math.random()),
    create: iCreateElement
}

export default (window.myLib = myLib)
