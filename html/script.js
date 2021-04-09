const startWindow = document.getElementById('window')
const form = document.getElementById('window2')
const congrats = document.getElementById('window3')

const showWindow2 = () => {
    startWindow.classList.toggle("hide")
    startWindow.style.visibility = 'hidden'

    form.classList.toggle("show")
    form.style.visibility = 'visible'
}

const showWindow3 = () => {
    form.classList.toggle("hide")
    form.style.visibility = 'hidden'

    congrats.classList.toggle("show")
    congrats.style.visibility = 'visible'
}

const exit = () => {
    form.classList.toggle("hide")
    form.style.visibility = 'hidden'

    congrats.classList.toggle("hide")
    congrats.style.visibility = 'hidden'

    startWindow.style.visibility = 'visible'
}
