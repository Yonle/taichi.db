/*
MIT License

Copyright (c) 2020 Yonle

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/




/*
                       How to Run this File
              Put this file at node_modules/taichi.db/
                 Or you can Simply change fdb Value.
*/





/*
                          W A R N I N G

               THIS FILE IS FOR ADVANCED USER ONLY
THIS FILE DOESN'T HAVE ANY COMMENT, AND DOESN'T FORMATTED VERY WELL.
READING CODE IN THIS FILE CAN MAKES YOU STRESS AND GOT HEART ATTACK.


               READ THIS FILE AT YOUR OWN RISK!!!!
*/

const fs = require("fs")
var fdb = "node_modules/taichi.db/db.json"
var db = JSON.parse(fs.readFileSync(fdb))
module.exports = {


get: function(value, value2, value3) {
refresh()
check(value)
if (!db[value]) {
refresh(value)
}
if (value3) {
if (!db[value]) return;
if (!db[value][value2]) return;
if (!db[value][value2][value3]||db[value][value2][value3] == null) return;
 return db[value][value2][value3];
}
if (value2) {
if (!db[value]) return;
if (!db[value][value2]||db[value][value2] == null) return;
return  db[value][value2];
}
if (db[value] == null) return;
return db[value]
},

cdb: function(filename) {
if (typeof(filename) !== 'string') {
throw new TypeError('The "path" argument must be of type string. Received '+typeof(filename));
return false;
}
if (filename) {
try {
db = JSON.parse(fs.readFileSync(filename))
} catch (error) {
return error;
}
refresh()
}
refresh()
fdb = filename
refresh()
return db;
},

set: function(name, value, value3, value4){
check(name)
check(value)
refresh()
if (value4) {
if (!db[name]) {
db[name] = {[value]: {[value3]: value4}}
return write()
}

 db[name][value][value3] = value4
return write();
}

if (value3) {
if (!db[name]) {
db[name] = {[value]: value3}
 db[name][value]= value3
write()
return}

 db[name][value] = value3
return write()
}

db[name] = value;
return write()
},

push: function(name, value){
check(name)
check(value)
refresh()

if (!db[name]) {
 db[name] = [value]
write()
return;}
db[name].push(value)
write()
},


all: function() {
  return db;
},

rem: function(value) {
check(value)
db[value] = undefined
write()
refresh()
},

import: async function(filename) {
check(filename)
var res = await JSON.parse(fs.readFileSync(filename))
await fs.writeFileSync(fdb, JSON.stringify(res), "utf8")
},

export: async function(filename) {
if (!filename) {
await fs.writeFileSync("taichi.db.json", JSON.stringify(db), "utf8")
return true}
await fs.writeFileSync(filename, JSON.stringify(db), "utf8")
return true;
}
}






//=========== The Machine =============//



function check(val) {
if (typeof(val) !== 'string'||typeof(val) !== 'object') {
throw new TypeError("The Arguments must be of a type string or instance of object. Received "+typeof(val));
return false}
refresh()
}

async function refresh(val) {
db = await JSON.parse(fs.readFileSync(fdb))
if(!val) return;
if (!db[val]) return;
return db[val];
}

async function write() {
await fs.writeFileSync(fdb, JSON.stringify(db), "utf8")
refresh()
}


setInterval(function() {

refresh()
}, 0)
