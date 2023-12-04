const user = {
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
}
const user2 = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
}
user2.__proto__ = user;
const getKeys = (obj) => {
    const resultArr = []
    for (const key in obj) {
        resultArr.push(key)
    }
    console.log(resultArr)
}
getKeys(user2)

