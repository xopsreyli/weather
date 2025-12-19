type TemperatureType = {
    temperature: number,
    tempClass?: string,
    badgeClass?: string,
}

const Temperature = ({temperature, tempClass, badgeClass}: TemperatureType) => {
    return (
        <div className={tempClass}>
            {temperature}
            <sup className={badgeClass}>°C</sup>
        </div>
    );
};

export default Temperature;