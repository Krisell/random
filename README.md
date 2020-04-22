# Generate random data – Not for cryptographic purpose

# Installation
```npm install @krisell/random```

# How to use
```js
import Random from '@krisell/random'

Random.randomString() // Gives a random 20 character long string
Random.randomString(30) // Gives a random 30 character long string
Random.randomDigits(4) // Gives a random 4 digit code
Random.integerBetween(12, 36) // Gives random integers in the interval [12, 36], i.e. including 12 and 36
```

The intended distribution is uniform (all outcomes equally likely), but the used random function is not cryptographically secure. *Do not use* this for chryptographic purposes.
