function zipList(list1, list2){
  const totalList = [];
  for (let i = 0; i < list1.length; i++) {
    totalList.push(list1[i], list2[i]);
  }
  return totalList;
}

function zipListTheSimpleWay(list1, list2){
  return _.flatten(_.zip(list1, list2));
}
const testArr1 = [1, 3, 5, 7];
const testArr2 = [2, 4, 6, 8];
console.log(zipList(testArr1, testArr2));
console.log(zipListTheSimpleWay(testArr1, testArr2));
