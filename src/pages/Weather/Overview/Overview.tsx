import styles from './Overview.module.css'
import ScrollBox from "../../../components/ui/ScrollBox/ScrollBox.tsx";
import HourlyForecast from "./Forecasts/HourlyForecast/HourlyForecast.tsx";
import DetailBackground from "../../../components/ui/DetailBackground/DetailBackground.tsx";
import TitledSection from "../../../components/ui/TitledSection/TitledSection.tsx";
import {axes} from "../../../enums/axes/axes.ts";
import {useWeather} from "../../../contexts/Weather/Weather.ts";
import DailyForecast from "./Forecasts/DailyForecast/DailyForecast.tsx";
import CloudCoverage from "./Details/CloudCoverage/CloudCoverage.tsx";
import Visibility from "./Details/Visibility/Visibility.tsx";
import Cloud from "../../../components/icons/Cloud/Cloud.tsx";
import Eye from "../../../components/icons/Eye/Eye.tsx";
import Precipitation from "./Details/Precipitation/Precipitation.tsx";
import DropWater from "../../../components/icons/DropWater/DropWater.tsx";
import Humidity from "./Details/Humidity/Humidity.tsx";
import HumidityIcon from "../../../components/icons/Humidity/Humidity.tsx";
import FeelsLike from "./Details/FeelsLike/FeelsLike.tsx";
import Thermometer from "../../../components/icons/Thermometer/Thermometer.tsx";
import Sun from "../../../components/icons/Sun/Sun.tsx";
import UVIndex from "./Details/UVIndex/UVIndex.tsx";
import PressureIcon from "../../../components/icons/Pressure/Pressure.tsx";
import Pressure from "./Details/Pressure/Pressure.tsx";
import WindIcon from "../../../components/icons/Wind/Wind.tsx";
import Wind from "./Details/Wind/Wind.tsx";

const Overview = () => {
    const {forecast} = useWeather()

    return (
        <div className={styles.box}>
            <div className={styles['details-box']}>
                <ScrollBox axis={axes.Y}>
                    <div className={styles.details}>
                        <div className={styles['cloud-coverage-box']}>
                            <DetailBackground>
                                <TitledSection
                                    titleIcon={<Cloud customClass={styles['cloud-title-icon']} />}
                                    title={'Cloud coverage(%)'}
                                >
                                    <CloudCoverage />
                                </TitledSection>
                            </DetailBackground>
                        </div>
                        <div className={styles['visibility-box']}>
                            <DetailBackground>
                                <TitledSection
                                    titleIcon={<Eye customClass={styles['visibility-title-icon']} />}
                                    title={'visibility'}
                                >
                                    <Visibility />
                                </TitledSection>
                            </DetailBackground>
                        </div>
                        <div className={styles['precipitation-box']}>
                            <DetailBackground>
                                <TitledSection
                                    titleIcon={<DropWater customClass={styles['precipitation-title-icon']} />}
                                    title={'precipitation'}
                                >
                                    <Precipitation />
                                </TitledSection>
                            </DetailBackground>
                        </div>
                        <div className={styles['humidity-box']}>
                            <DetailBackground>
                                <TitledSection
                                    titleIcon={<HumidityIcon customClass={styles['humidity-title-icon']} />}
                                    title={'humidity'}
                                >
                                    <Humidity />
                                </TitledSection>
                            </DetailBackground>
                        </div>
                        <div className={styles['feelslike-box']}>
                            <DetailBackground>
                                <TitledSection
                                    titleIcon={<Thermometer customClass={styles['feelslike-title-icon']} />}
                                    title={'feels like'}
                                >
                                    <FeelsLike />
                                </TitledSection>
                            </DetailBackground>
                        </div>
                        <div className={styles['uv-box']}>
                            <DetailBackground>
                                <TitledSection
                                    titleIcon={<Sun customClass={styles['uv-title-icon']} />}
                                    title={'UV-Index'}
                                >
                                    <UVIndex />
                                </TitledSection>
                            </DetailBackground>
                        </div>
                        <div className={styles['pressure-box']}>
                            <DetailBackground>
                                <TitledSection
                                    titleIcon={<PressureIcon customClass={styles['pressure-title-icon']} />}
                                    title={'pressure'}
                                >
                                    <Pressure />
                                </TitledSection>
                            </DetailBackground>
                        </div>
                        <div className={styles['wind-box']}>
                            <DetailBackground>
                                <TitledSection
                                    titleIcon={<WindIcon customClass={styles['wind-title-icon']} />}
                                    title={'wind'}
                                >
                                    <Wind />
                                </TitledSection>
                            </DetailBackground>
                        </div>
                    </div>
                </ScrollBox>
            </div>
            <div className={styles['forecasts-box']}>
                <ScrollBox axis={axes.Y}>
                    <div className={styles.forecasts}>
                        <DetailBackground>
                            <TitledSection
                                title={'24-Hours Forecast'}
                                showDivider
                            >
                                <HourlyForecast />
                            </TitledSection>
                        </DetailBackground>
                        <DetailBackground>
                            <TitledSection
                                title={`${forecast.forecastday.length}-Day Forecast`}
                                showDivider
                            >
                                <DailyForecast />
                            </TitledSection>
                        </DetailBackground>
                    </div>
                </ScrollBox>
            </div>
        </div>
    );
};

export default Overview;