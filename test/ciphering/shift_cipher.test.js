const ciphering = require('../../src/ciphering');
const Shift = require('../../src/ciphering/shift_cipher');

jest.mock('../../src/ciphering/shift_cipher.js');

beforeEach(() => {
    Shift.mockClear();
})

test('Mock shift class encrypt', () => {
    ciphering('abc', 'C1');

    expect(Shift).toHaveBeenCalledWith(1);
    expect(Shift).toHaveBeenCalledTimes(1);
});

test('Mock shift class decrypt', () => {
    ciphering('abc', 'C0');

    expect(Shift).toHaveBeenCalledWith(25);
    expect(Shift).toHaveBeenCalledTimes(1);
});

test('Mock method parse of Shift class', () => {
    ciphering('abc', 'C0');

    const mockShiftInstance = Shift.mock.instances[0];
    const mockParse = mockShiftInstance.parse;
    expect(mockParse.mock.calls[0][0]).toEqual('abc');
    expect(mockParse).toHaveBeenCalledTimes(1);
});