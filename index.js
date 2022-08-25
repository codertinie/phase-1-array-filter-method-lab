// Code your solution here
function findMatching(driverName, someString) {
    return driverName.filter(
      (matchingList) => matchingList.toLowerCase() === someString.toLowerCase()
    );
  }

  function fuzzyMatch(driverName, anotherString){
    return driverName.filter(
        (matchingList) => matchingList.toLowerCase().indexOf(anotherString.toLowerCase()) === 0
    );
  }

  function matchName(driverName, yetAnotherString){
    return driverName.filter(
        (collection) => collection.name === yetAnotherString
    );
  }