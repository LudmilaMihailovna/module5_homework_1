let myMap = new Map();
myMap.set('1a', 25);
myMap.set('1б', 24);
myMap.set('2a', 25);
myMap.set('2б', 23);
myMap.set('3a', 23);
myMap.set('3б', 24);
myMap.set('4a', 25);
myMap.set('4б', 24);
for (let nameKeys of myMap.keys()) {
  console.log(`Ключ — ${nameKeys}, значение — ${myMap.get(nameKeys)}`);
}