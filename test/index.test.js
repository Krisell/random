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