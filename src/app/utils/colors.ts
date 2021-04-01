const colors = {
    magenta: {
        light: '#ff0095',
        dark: '#ff0040',
    },
    purple: {
        light: '#30134d',
        dark: '#200040',
    },
    blue: {
        light: '#1a3366',
        dark: '#001233',
    },
    blueGreen: {
        light: '#00ffb8',
        dark: '#0089ff',
    },
    lime: {
        light: '#00ffaa',
        dark: '#00ff55',
    },
    green: {
        light: '#053305',
        dark: '#002600',
    },
    orange: {
        light: '#ff9716',
        dark: '#ca792f',
    },
    orangered: {
        light: '#ff9500',
        dark: '#ff6016',
    },
};

export function generateLinearBackground(firstColor: string, secondColor: string, direction: string = 'to bottom right') {
    return `linear-gradient(${direction}, ${firstColor}, ${secondColor})`;
}

export default colors;
