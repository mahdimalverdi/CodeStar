const colors = {
    frontend: {
        light: '#f3440e',
        dark: '#f02e08',
    },
    software: {
        light: '#1151b2',
        dark: '#0e38a1',
    },
    magenta: {
        light: '#b30068',
        dark: '#4d0029',
    },
    purple: {
        light: '#30134d',
        dark: '#200040',
    },
    blue: {
        light: '#1a3366',
        dark: '#001233',
    },
    midnightBlue: {
        light: '#2980b9',
        dark: '#2c3e50',
    },
    green: {
        light: '#053305',
        dark: '#002600',
    },
    darkGreen: {
        light: '#0f9b0f',
        dark: '#053305',
    },
    orange: {
        light: '#ff9716',
        dark: '#ca792f',
    },
    orangered: {
        light: '#ff9500',
        dark: '#ff6016',
    },
    darkOrange: {
        light: '#fe8c00',
        dark: '#f83600',
    },
};

export function generateLinearBackground(firstColor: string, secondColor: string, direction: string = 'to bottom right') {
    return `linear-gradient(${direction}, ${firstColor}, ${secondColor})`;
}

export default colors;
