import selectCorrectRegExpForCalcScreen from '../../src/features/buttonToDisplay/selectCorrectRegExpForCalcScreen'

describe('selectCorrectRegExpForCalcScreen.js', () => {
    
    it('RegExp for calcScreen is work: "Error" ~> "" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: 'Error',
        })
        // expectation
        expect(data).toBe('')
    })
    it('RegExp for calcScreen is work: "Error123" ~> "123" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: 'Error123',
        })
        // expectation
        expect(data).toBe('123')
    })
    it('RegExp for calcScreen is work: "/" ~> "÷" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '1 / 2 / 999',
        })
        // expectation
        expect(data).toBe('1 ÷ 2 ÷ 999')
    })
    it('RegExp for calcScreen is work: "," ~> "." ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: ' 4,5 + 2.1 + 3,,,4 ',
        })
        // expectation
        expect(data).toBe('4.5 + 2.1 + 3.4')
    })
    it('RegExp for calcScreen is work: "000" ~> "0" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '00000',
        })
        // expectation
        expect(data).toBe('0')
    })
    it('RegExp for calcScreen is work: "02" ~> "2" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '02',
        })
        // expectation
        expect(data).toBe('2')
    })
    it('RegExp for calcScreen is work: "+ 02" ~> "+ 2" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '+ 02',
        })
        // expectation
        expect(data).toBe(' + 2')
    })
    it('RegExp for calcScreen is work: "- 02" ~> "- 2" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '- 02',
        })
        // expectation
        expect(data).toBe(' - 2')
    })
    it('RegExp for calcScreen is work: "* 02" ~> "* 2" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '* 02',
        })
        // expectation
        expect(data).toBe('2 * 2')
    })
    it('RegExp for calcScreen is work: "÷/ 02" ~> "÷ 2" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '÷ 02',
        })
        // expectation
        expect(data).toBe('2 ÷ 2')
    })
    it('RegExp for calcScreen is work: "1+++++2----3÷÷÷÷*÷4***5+-÷6" ~> "1 + 2 - 3 ÷ 4 * 5 ÷ 6" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '1+++++2----3÷÷÷÷*÷4***5+-÷6',
        })
        // expectation
        expect(data).toBe('1 + 2 - 3 ÷ 4 * 5 ÷ 6')
    })
    it('RegExp for calcScreen is work: "1..........2" ~> "1.2" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '1..........2',
        })
        // expectation
        expect(data).toBe('1.2')
    })
    it('v4432, RegExp for calcScreen is work: "1..........2" ~> "1.2"', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '1..........2 * 3,,,,,,4,,,....5',
        })
        // expectation
        expect(data).toBe('1.2 * 3.45')
    })
    it('RegExp for calcScreen is work: ".7" ~> "0.7" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '.7',
        })
        // expectation
        expect(data).toBe('0.7')
    })
    it('v345321, RegExp for calcScreen is work: ".7" ~> "0.7" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '.7 + .',
        })
        // expectation
        expect(data).toBe('0.7 + 0.')
    })
    it('v345321, RegExp for calcScreen is work: ".7" ~> "0.7" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '.7 + .',
        })
        // expectation
        expect(data).toBe('0.7 + 0.')
    })
    it('v2164, RegExp for calcScreen is work: ".7" ~> "0.7" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '.7 + .123',
        })
        // expectation
        expect(data).toBe('0.7 + 0.123')
    })
    it('RegExp for calcScreen is work: "" ~> "" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '',
        })
        // expectation
        expect(data).toBe('')
    })
    it('if exist some -e-exponential notation, then ~> "8.1e - 9" ~> "8.1e-9 "', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '8.1e - 9',
        })
        // expectation
        expect(data).toBe('8.1e-9')
    })
    // /////////////////////EXAMPLE//////////////////////////
    it('RegExp for calcScreen is work: "  " ~> "" ', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '',
        })
        // expectation
        expect(data).toBe('')
    })
})
