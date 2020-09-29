export const CalcButtons = () => /*html*/ `<div>    
    <div class="row">
        <div class="col">
            <button
                role="calcBtnSeven"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                7
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnEight"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                8
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnNine"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                9
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnDivision"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                ÷
            </button>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <button
                role="calcBtnFour"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                4
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnFive"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                5
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnSix"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                6
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnMultiply"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                *
            </button>
        </div>
    </div>

    <div class="row">
        <div class="col">
            <button
                role="calcBtnOne"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                1
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnTwo"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                2
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnThree"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                3
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnMinus"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                -
            </button>
        </div>
    </div>

    <div class="row">
        <div class="col"></div>
        <div class="col">
            <button
                role="calcBtnZero"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                0
            </button>
        </div>
        <div class="col"></div>
        <div class="col"></div>
    </div>

    <div class="row">
        <div class="col">
            <button
                role="calcBtnClear"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.clearAll()"
            >
                C
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnEqual"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.doEqual()"
            >
                =
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnDecimalPoint"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                .
            </button>
        </div>

        <div class="col">
            <button
                role="calcBtnPlus"
                class="calc-btn btn btn-outline-secondary btn-lg btn-block"
                onclick="window.myLib.buttonToDisplay.btnToDspl(this.textContent)"
            >
                +
            </button>
        </div>
    </div>
</div>`