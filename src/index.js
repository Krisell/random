const Random = {
    integerBetween (min, max) {
      return Math.floor(Math.random() * (max + 1 - min) + min)
    },

    randomDigits (number) {
      return Array(number).fill(0).map(el => Math.floor(Math.random() * 10)).join('')
    },

    randomString(length) {
      let stringLength = length || 20 // Default length
      let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      return Array(stringLength)
        .fill(0)
        .map(el => el = possible.charAt(Math.floor(Math.random() * possible.length)))
        .join('')
    }
}

export default Random