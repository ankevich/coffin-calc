const showWindow2 = () => {
    document.getElementById('window').style.visibility = 'hidden'
    document.getElementById('window2').style.visibility = 'visible'
}

const showWindow3 = () => {
    document.getElementById('window2').style.visibility = 'hidden'
    document.getElementById('window3').style.visibility = 'visible'
}

const exit = () => {
    document.getElementById('window2').style.visibility = 'hidden'
    document.getElementById('window3').style.visibility = 'hidden'
    document.getElementById('window').style.visibility = 'visible'
}
