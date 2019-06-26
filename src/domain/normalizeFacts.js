import * as r from 'ramda';

const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const removeCharacters = (str) => {
  return r.cond([
    [r.equals(':'), () => str.substr(1)],
    [r.equals('-'), () => str.substr(1)],
    [r.equals('that'), () => str.substr(4)],
    [r.equals('That'), () => str.substr(4)],
    [r.equals('of'), () => str.substr(2)],
    [r.equals('Of'), () => str.substr(2)],
    [r.equals('about'), () => str.substr(5)],
    [r.equals('About'), () => str.substr(5)],
    [r.T, () => str]
  ])(r.head(r.split(' ', str)));
};

export const normalizeFacts = (facts: Array<string>) => {

  return r.uniq(r.map((fact) => {
    return r.pipe(
      r.trim,
      removeCharacters,
      capitalizeFirstLetter,
      removeCharacters,
      r.trim,
      capitalizeFirstLetter,
    )(fact.substr(3));
  })(facts));
}