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