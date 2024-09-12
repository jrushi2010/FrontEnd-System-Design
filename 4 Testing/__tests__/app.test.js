const sortingByAge = require('../app');

test("Testing if the first user is Sachin after sorting", () => {
    const sortedData = sortingByAge();

    expect(sortedData[0].name).toBe("Sachin");
});

test("Testing if the lasr user is Tejas after sorting", () => {
    const sortedData = sortingByAge();

    expect(sortedData[3].name).toBe("Tejas");
});

test("testing if the sorted data has length of 4", () => {
    const sortedData = sortingByAge();

    expect(sortedData).toHaveLength(4);
});