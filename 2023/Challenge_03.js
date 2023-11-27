import  {passwords}  from "./Datos/data.js"
function testPassword() {
    let cont = 1;
    let response = ""
    for (let password of passwords.split("\n")) {
        const char = password.split(":")[0].split(" ")[1]
        const min = password.split(":")[0].split(" ")[0].split("-")[0]
        const max = password.split(":")[0].split(" ")[0].split("-")[1]
        const charRepeat = password.split(":")[1].split("").filter(x => x == char)
        if (!(charRepeat.length >= min && charRepeat.length <= max))
            response += `${cont++}: ${password}\n`

    }
    return response
}
console.log(testPassword())