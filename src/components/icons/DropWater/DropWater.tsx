type DropWaterProps = {
    customClass?: string,
}

const DropWater = ({customClass}: DropWaterProps) => {
    return (
        <svg className={customClass} viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg"
             xmlnsXlink="http://www.w3.org/1999/xlink">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M3,10.333 C3,13.463 5.427,16 8.418,16 C11.41,16 14,13.463 14,10.333 C14,7.204 8.418,0 8.418,0 C8.418,0 3,7.204 3,10.333 Z"
                    fill="#434343">
                </path>
            </g>
        </svg>
    );
};

export default DropWater;