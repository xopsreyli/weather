export const LEVELS = {
    low: 'low',
    moderate: 'moderate',
    high: 'high',
    very_high: 'very high',
    excessive: 'excessive',
} as const

export const COLORS = {
    [LEVELS.low]: '#00ff00',
    [LEVELS.moderate]: '#ffff00',
    [LEVELS.high]: '#ff8000',
    [LEVELS.very_high]: '#ff0000',
    [LEVELS.excessive]: '#d400d4',
} as const

export const SUGGESTIONS = {
    [LEVELS.low]: 'No protection needed. Safe to be outside.',
    [LEVELS.moderate]: 'Wear sunglasses and use sunscreen.',
    [LEVELS.high]: 'Use sunscreen, hat, and limit sun exposure.',
    [LEVELS.very_high]: 'Extra protection required. Avoid midday sun.',
    [LEVELS.excessive]: 'Avoid being outdoors. Maximum sun protection needed.',
} as const
