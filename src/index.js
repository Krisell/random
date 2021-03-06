const Random = {
    integerBetween (min, max) {
      return Math.floor(Math.random() * (max + 1 - min) + min)
    },

    randomDigits (number) {
      return Array(number).fill(0).map(el => Math.floor(Math.random() * 10)).join('')
    },

    randomString (length = 20) {
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      return Array(length)
        .fill(0)
        .map(el => el = possible.charAt(Math.floor(Math.random() * possible.length)))
        .join('')
    }
}

export default Random