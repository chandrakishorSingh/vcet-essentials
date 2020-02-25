let roomNumbers: number[] = [
    212,
    515,
    213,
    502,
    201,
    510,
    210,
    512,
    210,
    509,
    204,
    312
];

roomNumbers = roomNumbers.sort((a, b) => a > b ? 1 : (a === b ? 0 : -1));

export default roomNumbers;
