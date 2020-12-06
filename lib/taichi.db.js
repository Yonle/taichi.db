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

const fs = require("fs")
// Load FS

var fdb = 'node_modules/taichi.db/db.json'
// fdb is Filename
// We prefer var because const cannot change the value.


// For make it works at some multiple JSON file, we prefer function.
module.exports = function (filename) {

  if (filename) {
    // If it provides Filename
    if (typeof(filename) !== 'string') {
      // If the type of Filename isn't string, Throw a Error.
      throw new Error('The \'path\' argument must be of type string. Received ' + typeof(filename) + '.');
      return false;
    } else {
      // Set the Filename Target.
      fdb = filename
    }
  }

  // Parse the JSON File.
  var db = JSON.parse(fs.readFileSync(fdb))

  // Return all objects
  return {
    // If get Function is Called
    get: function(value) {
      // Refresh
      refresh()
      // Check the Value
      check(value)
      // If there's no value, Check again
      if (!db[value]) {
        refresh(value)
      }
      // Return the value if it's exict.
      return db[value]
    },

    // If set function is called,
    set: function(name, value) {
      // Check the object name for set it.
      check(name)
      // Check the value for set it...
      check(value)
      // Refresh
      refresh()

      // Set the Value
      db[name] = value;
      // Now tell to the Machine to write the file.
      return write()
    },


    // Push is like a Pushing array, But this one is different.
    push: function(name, value) {
      // Check the Value.
      check(name)
      check(value)
      refresh()
      // If there's no value, Create array Valie.
      if (!db[name]) {
        db[name] = [value]
        // Write
        return write()
      }

      db[name].push(value)
      return write()
    },

    // Asking for a Whole file Output? Just return the Whole object.
    all: function() {
      refresh();
      return db;
    },

    // If client call rm (Or it calls Remove)
    rm: function(value) {
      // Check the Value.
      check(value)
      // Remove it
      db[value] = undefined;
      // Write it...
      write()
      // Then refresh.
      return refresh()
    },


    // Import the code from the file....
    import: async function(filename) {
      // check the filename
      check(filename)
      // Parse the file
      var res = await JSON.parse(fs.readFileSync(filename))
      // Now write it into our DB file.
      await fs.writeFileSync(fdb, JSON.stringify(res), "utf8")
      // Then refresh
      return refresh()
    },

    // Export (Like backup)
    export: async function(filename) {
      if (!filename) {
        // If there's no filename provided, We save it into taichi.db.json file instead.
        await fs.writeFileSync("taichi.db.json", JSON.stringify(db), "utf8")
        return true
      }
      // Else, we will save it into the provided Filename.
      await fs.writeFileSync(filename, JSON.stringify(db), "utf8")
      return true;
    }
  }

//=========== The Machine =============//


 function check(val) {
   // If the type of value isn't string, object, or number, We throw the error.
   if (typeof(val) === 'string' || typeof(val) === 'object' || typeof(val) === 'number' || typeof(val) === 'boolean') {
     // Refresh
     refresh()
   } else {
     // If the type of value isn't string, object, or number, We throw the error.
     // Refresh first
     refresh()
     throw new TypeError("The Arguments must be of a type string or instance of object, boolean, or number. Received " + typeof(val));
     return false;
   }
 }

 async function refresh(val) {
     // val is optional. it's just for checking the Value.
     // Overwrite db variable
     db = await JSON.parse(fs.readFileSync(fdb))
     // if there's no value provided, return nothing.
     if (!val) return;
     if (!db[val]) return;
     return db[val];
 }


 async function write() {
    // write the current value into file.
    await fs.writeFileSync(fdb, JSON.stringify(db), "utf8")
    // Refresh after Writing.
    refresh()
 }


};
