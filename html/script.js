const showWindow2 = () => {
    document.getElementById('window').classList.toggle("hide")
    document.getElementById('window').style.visibility = 'hidden'

    document.getElementById('window2').classList.toggle("show")
    document.getElementById('window2').style.visibility = 'visible'
}

const showWindow3 = () => {
    document.getElementById('window2').classList.toggle("hide")
    document.getElementById('window2').style.visibility = 'hidden'

    document.getElementById('window3').classList.toggle("show")
    document.getElementById('window3').style.visibility = 'visible'
}

const exit = () => {
    document.getElementById('window2').classList.toggle("hide")
    document.getElementById('window2').style.visibility = 'hidden'

    document.getElementById('window3').classList.toggle("hide")
    document.getElementById('window3').style.visibility = 'hidden'

    document.getElementById('window').style.visibility = 'visible'
}
