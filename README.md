![taichi.db logo](https://cdn.glitch.com/fd41d1c0-05df-4445-b6b4-275daa0a6f28%2F20201202_181053.png?v=1606907546345)
A quick, simple, and Realtime database manager build with JSON wrapper and easy for use.
## ☯ Feature
 - Quick, Lightweight, Simple, and Realtime Database Manager,
 - Build with 0 Dependencies,
 - Easy to use,
 - Open Source!
## ☯ Getting Started
```bash
npm i taichi.db
```
**NOTE**: Before Upgrading, Please do Backup data if you don't want lose any data.
## ☯ Docs
|Method|Description|Parameters|return|
|------|-----------|----------|------|
|`get`|A function that gets the name of the object in the database.|A parameter that gets the object name|string, number, boolean, or object|
|`set`|A function that can change the value of the name of the object.|a parameter that takes the name of the object and value to change|-|
|`push`|A push array function from the name of the object|A parameter that gets an object name with value for push|-|
|`all`|A function that gets all objects from the database|-|Object|
|`rm`|A function that removes the name of the object with the value in the database|A parameter that gets the name of the object in the database.|-|
|`import`|A function that imported JSON files|A parameter that gets the file name for import|-|
|`export`|A function that exports the database into JSON file|A parameter that gets the file name for export (Optional)|-|
## ☯ Example
```javascript
const taichidb = require('taichi.db')
const db = taichidb('student.json') // Filename is optional. If it's not provide any filename, Taichi db will uses default path (at node_modules/taichi.db/db.json)

// Object example
db.set('Michael', {
  grade: '7',
  age: 14,
  gender: 'Male',
  attitude_value: 'B',
  total_scores: 778
})
// You don't need Async in Taichi.db.

// Get value
var michael = db.get('Michael')
// Do anything...


// Remove example
db.rm('Michael')
```

## ☯ License
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
## ☯ Community
 - [Discord](https://discord.gg/9S3ZCDR)
 - [Telegram](https://t.me/taichidb)

