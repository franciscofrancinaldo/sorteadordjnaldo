function generateNumber() {
    const minEl = document.querySelector('.input-min')
    const maxEl = document.querySelector('.input-max')
    const resultEl = document.querySelector('#result')

    const min = Number(minEl.value)
    const max = Number(maxEl.value)

    if (Number.isNaN(min) || Number.isNaN(max)) {
        resultEl.textContent = 'Resultado: Preencha os dois valores.'
        return
    }

    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        resultEl.textContent = 'Resultado: Use números inteiros.'
        return
    }

    if (min > max) {
        resultEl.textContent = 'Resultado: o mínimo deve ser menor ou igual ao máximo.'
        return
    }

    const sorteado = Math.floor(Math.random() * (max - min + 1)) + min
    resultEl.textContent = `Resultado: ${sorteado}`
}