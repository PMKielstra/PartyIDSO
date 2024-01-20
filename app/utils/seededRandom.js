// SplitMix32 seeded PRNG -- in no way secure and should not be used
// https://stackoverflow.com/a/47593316/3137493
export function splitmix32(a) {
    return function() {
      a |= 0; a = a + 0x9e3779b9 | 0;
      var t = a ^ a >>> 16; t = Math.imul(t, 0x21f0aaad);
          t = t ^ t >>> 15; t = Math.imul(t, 0x735a2d97);
      return ((t = t ^ t >>> 15) >>> 0) / 4294967296;
    }
}

export function seeded_random_permutation(seed, arr) {
    const rng = splitmix32(seed);
    const length = arr.length
    for(var i = 0; i < length - 1; i++) {
        var j = i + Math.floor((length - i) * rng());
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
function random_permuted_alphabet(seed) {
    return seeded_random_permutation(seed, [...alphabet]);
}

export function random_alphabet(seed) {
    const permuted_alphabet = random_permuted_alphabet(seed);
    const alphabet_map = new Map();
    alphabet.map((letter, i) => alphabet_map.set(letter, permuted_alphabet[i]));
    return alphabet_map;
}

export function random_letters(seed, n) {
    const permuted_alphabet = random_permuted_alphabet(seed);
    return permuted_alphabet.slice(0, n);
}
