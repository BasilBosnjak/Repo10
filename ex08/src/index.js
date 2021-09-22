function getUserName(email){

    var username = "";

        username = {
            "user1@mail.com" : "user1",
            "user2@mail.com" : "user2",
            "user3@mail.com" : "user3",
            "user4@mail.com" : "user4",
            "user5@mail.com" : "user5",
            "user6@mail.com" : "user6"

        };
    
    username = username[email];
    return username;
}

console.log(getUserName("user1@mail.com"));
console.log(getUserName("user2@mail.com"));
console.log(getUserName("user3@mail.com"));
console.log(getUserName("user4@mail.com"));
console.log(getUserName("user5@mail.com"));
console.log(getUserName("user6@mail.com"));
console.log(getUserName(""));
module.exports = getUserName;