const generateBtn = document.querySelector('.dice-icon')
const adviceID = document.querySelector('.id')
const adviceContent = document.querySelector('.advice-content')

async function generateAdvice(a) {
    const randomNumber = Math.floor(Math.random() * 224)
    const response = await fetch(`https://api.adviceslip.com/advice/${randomNumber}`)
    const data = await response.json()
    return data.slip
}

const adviceData = async () => {
    const advice = await generateAdvice()
    adviceID.textContent = advice.id
    adviceContent.textContent = advice.advice
}


window.onload = adviceData()
generateBtn.addEventListener('click', adviceData)