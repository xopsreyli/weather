export const convertTimeTo24Format = (time: string) => {
    const [timeStr, period]: string[] = time.split(' ')
    const [hoursStr, minutes]: string[] = timeStr.split(':')
    let hours = Number(hoursStr)

    if (hours === 12) {
        hours = 0
    }

    if (period === 'PM') {
        hours += 12;
    }

    const resultHours = hours < 10 ? '0' + hours : hours;

    return `${resultHours}:${minutes}`
}