const colors = {
    purple: {
        light: '#30134d',
        dark: '#200040',
    },
    blue: {
        light: '#1a3366',
        dark: '#001233',
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
