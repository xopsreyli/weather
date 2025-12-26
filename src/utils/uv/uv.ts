import {LEVELS, SUGGESTIONS, COLORS} from "../../enums/uv/uv.ts";

export const getUVLevel = (uv: number) => {
    const roundedUV = Math.round(uv);
    
    if (roundedUV <= 2) {
        return LEVELS.low;
    } else if (roundedUV >= 3 && roundedUV <= 5) {
        return LEVELS.moderate;
    } else if (roundedUV >= 6 && roundedUV <= 7) {
        return LEVELS.high;
    } else if (roundedUV >= 8 && roundedUV <= 10) {
        return LEVELS.very_high;
    } else {
        return LEVELS.excessive;
    }
}

export const getUVSuggestion = (uv: number) => {
    const level = getUVLevel(uv);

    return SUGGESTIONS[level];
}

export const getUVColor = (uv: number) => {
    const level = getUVLevel(uv);

    return COLORS[level];
}