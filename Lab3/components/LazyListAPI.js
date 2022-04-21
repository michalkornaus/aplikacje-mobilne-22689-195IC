const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function* genItems() {
  let cnt = 0;

  while (true) {
    yield generateString(50);
  }
}

function generateString(length) {
  let result = ' ';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const items = genItems();

export function fetchItems() {
  return Promise.resolve({
    json: () =>
      Promise.resolve({
        items: new Array(50).fill(null).map(() => items.next().value)
      })
  });
}