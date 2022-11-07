let variable;
variable = false;

if (typeof variable == 'number') {
    console.log(`${variable} - число`);
} 
if (typeof variable == 'string') {
    console.log(`${variable} - строка`);
}
if (variable == true || variable == false) {
  console.log(`${variable} - логический тип`);
}

