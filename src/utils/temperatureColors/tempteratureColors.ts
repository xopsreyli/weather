export const colors: string[] = [
    '#5400ff',
    '#0000ff',
    '#1e90ff',
    '#83d6fa',
    '#fff',
    '#fdfd8c',
    '#ffff00',
    '#ffa500',
    '#ff0000',
]

export const getTemperatureColor = (temp: number) => {
    switch (true) {
        case temp >= 30:
            return '#ff0000'
        case temp >= 20:
            return '#ffa500'
        case temp >= 10:
            return '#ffff00'
        case temp > 0:
            return '#fdfd8c'
        case temp === 0:
            return '#fff'
        case temp <= -30:
            return '#5400ff'
        case temp <= -20:
            return '#0000ff'
        case temp <= -10:
            return '#1e90ff'
        case temp < 0:
            return '#83d6fa'
        default:
            return '#fff'
    }
}