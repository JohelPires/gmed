// export function money(num) {
//     num = parseFloat(num)
//     return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
// }

export function money(number) {
    if (typeof number !== 'number') {
        throw new Error('Input must be a number')
    }

    const options = {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }

    return new Intl.NumberFormat('pt-BR', options).format(number)
}
