export const wordsToTitleCase = (text: string): string => {
    return text.replace(/\w\S*/g, (word: string) =>
        word.length > 2 ? capitalizeFirstLetter(word) : word.toLowerCase()
    );
};

export const pascalCaseToTitleCase = (text: string): string => {
    const matches = text.match(/[A-Z][a-z]*/g);
    if (!matches) return text;

    return matches.map(capitalizeFirstLetter).join(' ');
};

const capitalizeFirstLetter = (word: string): string => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
};
