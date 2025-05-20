const {
    reverseString,
    isPalindrome,
    truncateString,
    countCharacters,
} = require('../src/stringUtils');

describe('reverseString', () => {
    test('inverte una stringa normale', () => {
        expect(reverseString('ciao')).toBe('oaic');
    });

    test('inverte una stringa vuota', () => {
        expect(reverseString('')).toBe('');
    });

    test('inverte una stringa con spazi', () => {
        expect(reverseString('a b c')).toBe('c b a');
    });

    test('inverte una stringa con caratteri speciali', () => {
        expect(reverseString('!@#')).toBe('#@!');
    });
});

describe('isPalindrome', () => {
    test('riconosce una stringa palindroma semplice', () => {
        expect(isPalindrome('anna')).toBe(true);
    });

    test('riconosce una stringa palindroma con maiuscole', () => {
        expect(isPalindrome('Anna')).toBe(true);
    });

    test('riconosce una stringa palindroma con spazi', () => {
        expect(isPalindrome('i topi non avevano nipoti')).toBe(true);
    });

    test('riconosce una stringa NON palindroma', () => {
        expect(isPalindrome('ciao')).toBe(false);
    });

    test('stringa vuota è palindroma', () => {
        expect(isPalindrome('')).toBe(true);
    });

    test('stringa con un solo carattere è palindroma', () => {
        expect(isPalindrome('a')).toBe(true);
    });
});

describe('truncateString', () => {
    test('tronca una stringa più lunga del massimo', () => {
        expect(truncateString('esempio', 4)).toBe('esem...');
    });

    test('non tronca se la stringa è corta', () => {
        expect(truncateString('ciao', 10)).toBe('ciao');
    });

    test('tronca una stringa esattamente della lunghezza massima', () => {
        expect(truncateString('ciao', 4)).toBe('ciao');
    });

    test('tronca una stringa vuota', () => {
        expect(truncateString('', 2)).toBe('');
    });

    test('tronca con maxLength 0', () => {
        expect(truncateString('abc', 0)).toBe('...');
    });
});

describe('countCharacters', () => {
    test('conta i caratteri di una stringa semplice', () => {
        expect(countCharacters('banana')).toEqual({ b: 1, a: 3, n: 2 });
    });

    test('conta i caratteri di una stringa vuota', () => {
        expect(countCharacters('')).toEqual({});
    });

    test('conta i caratteri con spazi e simboli', () => {
        expect(countCharacters('a a!')).toEqual({ a: 2, ' ': 1, '!': 1 });
    });

    test('conta i caratteri con caratteri unicode', () => {
        expect(countCharacters('àèì')).toEqual({ 'à': 1, 'è': 1, 'ì': 1 });
    });

    test('conta i caratteri ripetuti', () => {
        expect(countCharacters('aaa')).toEqual({ a: 3 });
    });
});