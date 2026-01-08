export const colors: string[] = [
    '#6f00ee',
    '#003fb2',
    '#1e90ff',
    '#87cefa',
    '#fff',
    '#fdfd8c',
    '#eedf38',
    '#ed7a1c',
    '#e02620',
]

export const getTemperatureColor = (temp: number) => {
    switch (true) {
        case temp >= 30:
            return '#e02620'
        case temp >= 20:
            return '#ed7a1c'
        case temp >= 10:
            return '#eedf38'
        case temp > 0:
            return '#fdfd8c'
        case temp === 0:
            return '#fff'
        case temp <= -30:
            return '#6f00ee'
        case temp <= -20:
            return '#003fb2'
        case temp <= -10:
            return '#1e90ff'
        case temp < 0:
            return '#87cefa'
        default:
            return '#fff'
    }
}