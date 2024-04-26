function getElementWidth(content, padding, border) {
  return parseFloat(content) + parseFloat(padding) + parseFloat(border);
}

getElementWidth("50px", "8px", "4px"); 
getElementWidth("60px", "12px", "8.5px"); 
getElementWidth("200px", "0px", "0px"); 

console.log(getElementWidth("50px", "8px", "4px")); // Повинно повертати 62
console.log(getElementWidth("60px", "12px", "8.5px")); // Повинно повертати 80.5
console.log(getElementWidth("200px", "0px", "0px")); // Повинно повертати 200
