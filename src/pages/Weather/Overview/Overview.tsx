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

const Overview = () => {
    const {forecast} = useWeather()

    return (
        <div className={styles.box}>
            <div className={styles['details-box']}>
                <ScrollBox axis={axes.Y}>
                    <div className={styles.details}>
                        <div className={styles['cloud-coverage-box']}>
                            <DetailBackground>
                                <CloudCoverage />
                            </DetailBackground>
                        </div>
                        <div className={styles['visibility-box']}>
                            <DetailBackground>
                                <Visibility />
                            </DetailBackground>
                        </div>
                    </div>
                </ScrollBox>
            </div>
            <div className={styles['forecasts-box']}>
                <ScrollBox axis={axes.Y}>
                    <div className={styles.forecasts}>
                        <DetailBackground>
                            <TitledSection title={'24-Hours Forecast'}>
                                <HourlyForecast />
                            </TitledSection>
                        </DetailBackground>
                        <DetailBackground>
                            <TitledSection title={`${forecast.forecastday.length}-Day Forecast`}>
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