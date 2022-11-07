let massiv = [6, 6, 6, 6, 6, 6];
let j=0;
for (let i=1; i<massiv.length; i++) {
  if (massiv[0] == massiv[i]) {
    j=j+1;
  }
}
if (j== massiv.length-1) {
  console.log('все элементы массива одинаковые');
} else {
  console.log('элементы массива не одинаковые');
}