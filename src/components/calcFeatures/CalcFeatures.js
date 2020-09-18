import { createPopper } from '@popperjs/core'

const CalcFeatures = () => {
    // async callback must be here, because this must be run after all, in the end of UI render
    setTimeout(() => {
        const button = document.getElementById('popcorn')
        const tooltip = document.getElementById('tooltip')

        let popperInstance = null

        function create() {
            popperInstance = createPopper(button, tooltip, {
                modifiers: [
                    {
                        name: 'offset',
                        options: {
                            offset: [0, 8],
                        },
                    },
                ],
            })
        }

        function destroy() {
            if (popperInstance) {
                popperInstance.destroy()
                popperInstance = null
            }
        }

        function show() {
            tooltip.setAttribute('data-show', '')
            create()
        }

        function hide() {
            tooltip.removeAttribute('data-show')
            destroy()
        }

        const showEvents = ['mouseenter', 'focus']
        const hideEvents = ['mouseleave', 'blur']

        showEvents.forEach((event) => {
            button.addEventListener(event, show)
        })

        hideEvents.forEach((event) => {
            button.addEventListener(event, hide)
        })
    }, 0)

    return `<div>
    
    <hr />

    <div id="popcorn" aria-describedby="tooltip" class="badge badge-primary">
        Calc's features
    </div>

    <div id="tooltip">
    - Click on screen for get result
    <br />    
    - Keyboard enable
        <div id="arrow" data-popper-arrow></div>
    </div>
    
    </div>`
}

export default CalcFeatures
