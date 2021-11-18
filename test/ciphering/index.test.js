const ciphering = require("../../src/ciphering");
const Cipher = require("../../src/ciphering/cipher");

describe('Shift ciphering', () => {
    test('Should be cipher "abc" to "bcd"', () => {
        const res = ciphering('abc', 'C1');

        expect(res).toBe('bcd');
    });

    test('Should be cipher "abc" to "zab"', () => {
        const res = ciphering('abc', 'C0');

        expect(res).toBe('zab');
    });

    test('Should be cipher "Abc" to "Ijk"', () => {
        const res = ciphering('Abc', 'R1');

        expect(res).toBe('Ijk');
    });

    test('Should be cipher "abc" to "stu"', () => {
        const res = ciphering('Abc', 'R0');

        expect(res).toBe('Stu');
    });

    test('Should be cipher "12345" to "12345"', () => {
        const res = ciphering('12345', 'C1');

        expect(res).toBe('12345');
    });
});

describe('Atbash ciphering', () => {
    test('Should be cipher "Abc" to "Zyx"', () => {
        const res = ciphering('Abc', 'A');

        expect(res).toBe('Zyx');
    });

    test('Should be cipher "12345" to "12345"', () => {
        const res = ciphering('12345', 'A');

        expect(res).toBe('12345');
    });
});

describe('Cipher class not implemented methods', () => {
    test('Upper case string error', () => {
        const cipher = new Cipher();
        expect(() => {
            cipher.parse('ABC');
        }).toThrow(Error);
    });

    test('Lower case string error', () => {
        const cipher = new Cipher();
        expect(() => {
            cipher.parse('abc');
        }).toThrow(Error);
    });
});