import Random from '../lib/index.js'

test("Integer between keeps it's promise", () => {
    let hits = {}

    for (let i = 0; i < 500; ++i) {
        let number = Random.integerBetween(1, 20)

        hits[number] = (hits[number] || 0) + 1
    }

    let sum = 0
    for (let i = 1; i <= 20; ++i) {
        sum += hits[i]
        expect(hits[i]).toBeGreaterThan(0)
    }
    expect(sum).toBe(500)
})

test('a one number interval returns that number', () => {
    expect(Random.integerBetween(23, 23)).toBe(23)
})

test('min and max are included', () => {
    let TIMES = 1000
    let MIN = 20
    let MAX = 21

    let occurences = {}

    for (let i = 0; i < TIMES; ++i) {
        let randomNumber = Random.integerBetween(MIN, MAX)
        occurences[randomNumber] = (occurences[randomNumber] || 0) + 1
    }

    expect(occurences[MIN]).toBeGreaterThan(0)
    expect(occurences[MAX]).toBeGreaterThan(0)
    expect(occurences[MAX] / occurences[MIN]).toBeLessThan(1.1)
})

test('a ten number interval returns all "evenly"', () => {
    let TIMES = 1000
    let MIN = 20
    let MAX = 30

    let occurences = {}

    for (let i = 0; i < TIMES; ++i) {
        let randomNumber = Random.integerBetween(MIN, MAX)
        occurences[randomNumber] = (occurences[randomNumber] || 0) + 1
    }
    
    let sum = 0
    for (let i = MIN; i <= MAX; ++i) {
        expect(occurences[i]).toBeGreaterThan(0)
        sum += occurences[i]
    }

    // Assert no values outside interval
    expect(sum).toBe(TIMES)
})

test('Random digits gives correct length', () => {
    for (let i = 0; i < 100; ++i) {
        let string = Random.randomDigits(10)
        expect(string.length).toBe(10)

        string.split('').map(Number).forEach(digit => {
            expect(digit).toBeLessThan(10)
            expect(digit).toBeGreaterThanOrEqual(0)
        })
    }
})

test('Random string gives correct length', () => {
    for (let i = 0; i < 100; ++i) {
        let string = Random.randomString(10)
        expect(string.length).toBe(10)
    }
})