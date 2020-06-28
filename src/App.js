import React, { useState, useEffect } from 'react'
import data from './data/data.json'
import expectationsData from './data/life-expectancy-stats.json'
// TODO:
// Найти данные о средней продолжительности жизни в странах, желательно json
// Сверстать мокап:
// - расположить два элемента на одной строчке
// + получить года из json
// + получить страны из json
// + сделать выпадающий список с годами
// + сделать выпадающий список со странами
// - загрузить файл с данными о продолжительности жизни
// - написать функцию, которая будет принимать год и страну, а возвращать продолжительность жизни
// - используя эту функцию посчитать сколько жить осталось


// Сделать мокап динамическим
// - как добавить input в середину строки
// - сделать нажатие клавиши
// - сделать массив с годами, сослаться на него
// + вычислить какой сейчас год
// + вытащить выбранный год из select
// + посчитать возраст после выбора года
// + посчитать сколько лет осталось и вевести это в строку

// Подсоеденить данные к коду
// Вывести "Ты уже должен быть мёртв" если возраст > средней продолжительности жизни

// Оубликовать на github
// Добавить ссылку на сайт (сделать сайт)
// + Добавить источники данных https://datasets.iisg.amsterdam/dataset.xhtml?persistentId=hdl:10622/LKYT53

const getLifeExpectancy = (countryName, year) => {
    // Отфильтровать все страны где название совпадает с нашим
    const matchingCountries = expectationsData.filter((x) =>x.name === countryName)
    
    // Вытащить обьект с данными по этой стране из массива совпадающих стран
   const countryData = matchingCountries[0]
    
    // Вытащить из страны ожидаемую продолжительность исходя из года
    const lifeExpectancy = countryData[year]
    
    // Преобразовать продолжительность из строки в число с плавающей запятой (Float)
    const result = parseFloat(lifeExpectancy)
    
    // Вернуть результат
    return result
}

function App() {
    const [name, setName] = useState('')
    const [year, setYear] = useState('2000')
    const [country, setCountry] = useState('Russia')
    const [hideAnswer, setAnswerHidden] = useState(true)
    
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    
    const age = currentYear - year
    const lifeExpectancy = getLifeExpectancy(country, year)
    const remainingAge = lifeExpectancy - age

    return (
        <div>
            <h1>Гроб-калькулятор ⚰️🧮</h1>
            <h3>Имя</h3>
            <input onChange={(event) => setName(event.target.value)}></input>
            <h3>Год рождения</h3>
            <select onChange={(event) => setYear(event.target.value)}>
                <option disabled selected>
                    Выберите год
                </option>
                {data.years.map((year) => (
                    <option>{year}</option>
                ))}
            </select>
            <h3>Страна</h3>
            <select onChange={(event) => setCountry(event.target.value)}>
                <option disabled selected>
                    Выберите страну
                </option>
                {data.countries.map((country) => (
                    <option>{country}</option>
                ))}
            </select>
            <p>
                <button onClick={() => setAnswerHidden(false)}>Посчитать</button>
            </p>
            <p hidden={hideAnswer}>
                Привет, {name}, {remainingAge > 0 ? `тебе осталось жить примерно ${remainingAge} лет.`
                                                : `ты вообще должен уже лежать в ⚰️, узбагойся!`}
                <br/>
                {remainingAge > 0 ? `Ты должен дотянуть до ${lifeExpectancy}.`
                                  : `Ты должен был умереть в ${lifeExpectancy} лет.`}
            </p>
        </div>
    )
}

export default App
