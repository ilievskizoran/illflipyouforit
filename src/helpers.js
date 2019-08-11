export function roll() {
  return Math.random() >= 0.5 ? 'heads' : 'tails';
}

export function capitalise(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
