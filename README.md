![taichi.db logo](https://cdn.glitch.com/f5388e9a-24f4-48f8-b9f9-0fae6857b5ad%2F20201129_124656.png?v=1606629310700)
A quick, simple, and Realtime database manager build with JSON wrapper and easy for use.
## ☯ Getting Started
```bash
npm i taichi.db
```
**NOTE**: Before Upgrading, Please do Backup data if you don't want lose any data.
## ☯ Some Docs
```js
const taichidb = require("taichi.db")


//Create/Update Value!
taichidb.set("test", "this is the result!")

//Get the value....
taichidb.get("test")
//Output: "this is the result!"




//Array EXAMPLE//

//Try create array value with `push` function. 
taichidb.push("alot of value", "PUSH AGAIN!!")

//Get the Array value
taichidb.get("alot of value")
//Output: ["PUSH AGAIN!!"]

//Push value
taichidb.push("alot of value", "AGAIN!!!")
//Get the Pushed Value
taichidb.get("alot of value")
//Output: ["PUSH AGAIN!!", "AGAIN!!!"]



//Get all Value
taichidb.all()
// Output ? Try yourself ;)

//Import your JSON db to our DB!
//Your DB is Private. We don't read your DB. And your DB isn't public.
taichidb.import("filename.json")
//me.db will overwritted. your JSON file isn't overwritted anymore.

//Backup / Export your Taichi.db as File!
taichidb.export("filename.json")

//Remove some value
taichidb.rem("alot of value")
//This is just made the output of value as `null`. 


// ADVANCED METHOD

taichidb.set(628991, { HP: 100 })
//Custom Set

//Read
taichidb.get(628991, "HP")


// Custom JSON file //
taichidb.cdb("mydatabase.json")

/* TIP:
If you're host at glitch.com, Like auto reinstall Packages, 
Use cdb function for saving your changes in realtime at your JSON file.
*/
```

## ☯ Community
Any question or Doubt can join our [Discord Server](https://discord.gg/9S3ZCDR)
