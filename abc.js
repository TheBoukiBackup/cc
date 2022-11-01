const fs = require("fs")
const file = "./n.py"

var c = fs.readFileSync(file).toString()

var regex = /\\x../g

c.split("\n").forEach(function (r) {
    var ss = regex.exec(r) || [null]
    if (ss.input) {
       var cc = eval(`"${ss[0]}"`)
       fs.writeFileSync("./n.py", c.replace(ss[0], cc))
    }
}) 
