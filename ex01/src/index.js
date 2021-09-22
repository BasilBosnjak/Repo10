var myPet = {
    species: "Shiba Inu",
    name: "Kylo",
    legs: 4,
    friends: ["Rex", "Pete"]
}

function myFunction(myObj) {
    return myObj;
}

console.log(myFunction(myPet));
module.exports = { myPet, myFunction };