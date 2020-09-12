import selectCorrectRegExpForCalcScreen from '../../src/features/buttonToDisplay/selectCorrectRegExpForCalcScreen'

describe('selectCorrectRegExpForCalcScreen.js', () => {
    it('if exist some -e-exponential notation, then ~> "8.1e - 9" ~> "8.1e-9 "', () => {
        // run function
        const data = selectCorrectRegExpForCalcScreen({
            displayData: '8.1e - 9',
        })
        // expectation
        expect(data).toBe('8.1e-9')
    })
})
