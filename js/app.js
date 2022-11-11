const submitBtn = document.getElementById('submitBtn')

const collectData =()=>{
    const startTemp = document.getElementById('startTemp').value
    const startUnit = document.getElementById('startUnit').value
    const endUnit = document.getElementById('endUnit').value
    const convertedTemp = document.getElementById('convertedTemp')

    var tempVar;

    switch (startUnit && endUnit) {
        // Fahrenheit to Others
        case 'F' && 'C':
            tempVar = (startTemp - 32) * 5/9
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'F' && 'K':
            tempVar = (startTemp - 32) / 1.8 + 273.15
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'F' && 'N':
            tempVar = (startTemp - 32) * (11/60)
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'F' && 'R':
            tempVar = startTemp + 459.67
            convertedTemp.innerHTML+= tempVar + '°'
            break;

        // Celsius to Others
        case 'C' && 'F':
            tempVar = startTemp * (9/5) + 32
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'C' && 'K':
            tempVar = startTemp + 273.15
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'C' && 'N':
            tempVar = startTemp * 0.33
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'C' && 'R':
            tempVar = (startTemp + 273.15) * 1.8
            convertedTemp.innerHTML+= tempVar + '°'
            break;

        // Kelvin to Others
        case 'K' && 'C':
            tempVar = startTemp - 273.15
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'K' && 'F':
            tempVar = startTemp * 1.8 - 459.67
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'K' && 'N':
            tempVar = (startTemp - 273.15)* 0.33333
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'K' && 'R':
            tempVar = startTemp * 1.8
            convertedTemp.innerHTML+= tempVar + '°'
            break;

        // Newton to Others
        case 'N' && 'C':
            tempVar =  startTemp * 100/33
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'N' && 'K':
            tempVar = startTemp * (100/33) + 273.15
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'N' && 'F':
            tempVar = startTemp * (60/11) + 32
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'N' && 'R':
            tempVar = startTemp * 60/11 + 491.67
            convertedTemp.innerHTML+= tempVar + '°'
            break;

        // Rankine to Others
        case 'R' && 'C':
            tempVar = (startTemp - 491.67) / 1.8
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'R' && 'K':
            tempVar = Rankine / 1.8 
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'R' && 'N':
            tempVar = (startTemp - 491.67) * 0.18333333333
            convertedTemp.innerHTML+= tempVar + '°'
            break;
        case 'R' && 'F':
            tempVar = startTemp - 459.67
            convertedTemp.innerHTML+= tempVar + '°'
            break;

        default:
            convertedTemp.innerHTML+="ERROR"
            break;
    }
}

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault();    
    collectData()

})