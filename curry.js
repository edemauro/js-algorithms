let dragons = [
  { name: 'Tyrion', breath: 'fire'},
  { name: 'Hodor', breath: 'fire'},
  { name: 'Jon', breath: 'lightning'}
];

let hasElement =
  (elem) =>
    (x) => elem === x.breath;

console.log(dragons.filter(hasElement('lightning'))); 