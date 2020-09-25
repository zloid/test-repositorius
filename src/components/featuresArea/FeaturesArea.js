export default () => /* html */ `<div>
    <hr role="featuresHr" />

    <div
        role="calcFeaturesForUsers"
        id="calcFeatures"
        aria-describedby="tooltip"
        class="badge badge-primary"
    >
        Calc's features
    </div>

    <div role="calcFeaturesForUsers" id="calc-tooltip">
        - Click on calc's screen for get result
        <br />
        - Have a keyboard? Click it!
        <div id="arrow" data-popper-arrow></div>
    </div>
</div>`
