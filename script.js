// Setting click-event
const numbers = document.querySelectorAll(".number")
// Tambahkan event listener
// Tambah argument event
// dalam function "inputNumber" ubah updateScreen menjadi currentNumber
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
    })
})

const calculatorScreen = document.querySelector('.calculator-screen')
// Ubah angka yang ditampilkan di layat dengan memperbarui atribut nilai dati tag input
// Jalankan function "updateScreen" menggunakan event.target.value
const updateScreen = (number) => {
    calculatorScreen.value = number
}
// Perbaiki angka yang ditampilkan dapat diawali dengan angka 0 dengan if statement
const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number
    } else {
        currentNumber += number
    }
}
// Definisikan 3 variable, "prevNumber", "currentNumber", dan "calculationOperator"
let prevNumber = ''
let calculationOperator = ''
let currentNumber= '0'
// Jalankan function inputOperator saat di klik
const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})
// Berikan nilai yang tersimpan di currentNumber ke prevNumber
// Berikan operator ke calculationOperator sebagai suatu argumen
// Kosongkan currentNumber
const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = '0'
}
// Tambahkan click event ke suatu element
// Jalankan function calculate saat tombol sama dengan(=) di Klik
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})
// Definisikan function Calculate yaitu penambahan, pengurangan, perkalian, dan pembagian
// Perbarui variable currentNumber dengan hasilnya tersebut
// Nilai dari calculationOperator seharusnya kosong
// Ganti angka menjadi inteder dengan method parseInt
// Ganti method parseInt dengan method parseFloat
const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat (prevNumber) + parseFloat (currentNumber)
            break
        case "-":
            result = parseFloat (prevNumber) - parseFloat (currentNumber)
            break
        case "*":
            result = parseFloat (prevNumber) * parseFloat (currentNumber)
            break
        case "/":
            result = parseFloat (prevNumber) / parseFloat (currentNumber)
            break
        default:
            return
    }
    currentNumber = result
    calculationOperator = ''
}
// Tambahkan click event
// Definisikan function clearAll dan tetapkan angka 0 ke currentNumber lalu kosongkan 2 variable yang lain
const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})
// Tambahkan click event 
// Defisinikan function inputDecimal ke currentNumber
const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}
// langkah untuk menguji program
// 1. Tekan semua angka dan pastikan angka muncul saat ditekan
// 2. Uji dengan menambahkan, mengurangkan, mengkali dan membagi
// 3. Uji coba angka decimalnya
