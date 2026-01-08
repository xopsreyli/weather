export const LEVELS = {
    low: 'low',
    moderate: 'moderate',
    high: 'high',
    very_high: 'very high',
    excessive: 'excessive',
} as const

export const COLORS = {
    [LEVELS.low]: '#05a417',
    [LEVELS.moderate]: '#eedf38',
    [LEVELS.high]: '#ed7a1c',
    [LEVELS.very_high]: '#e02620',
    [LEVELS.excessive]: '#9e3ac3',
} as const

export const SUGGESTIONS = {
    [LEVELS.low]: 'No protection needed. Safe to be outside.',
    [LEVELS.moderate]: 'Wear sunglasses and use sunscreen.',
    [LEVELS.high]: 'Use sunscreen, hat, and limit sun exposure.',
    [LEVELS.very_high]: 'Extra protection required. Avoid midday sun.',
    [LEVELS.excessive]: 'Avoid being outdoors. Maximum sun protection needed.',
} as const
