/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(animals, name) {
    for (let i=0; i < animals.length; i++){
        if (animals[i].name.toLowerCase() === name.toLowerCase()) {
            return animals[i];
        }
    }
    return null;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement) {
    for (let i=0; i < animals.length; i++){
        if (animals[i].name.toLowerCase() === name.toLowerCase()) {
            animals.splice(i, 1, replacement);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name) {
    for (let i=0; i < animals.length; i++){
        if (animals[i].name.toLowerCase() === name.toLowerCase()) {
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal) {
    // check that animal object has a name property with a length > 0
    if (animal.hasOwnProperty("name") && animal.name.length > 0) {
    // check that animal object has a species property with a length > 0
        if (animal.hasOwnProperty("species") && animal.species.length > 0) {
    // check that animal object has a unique name
            if ( search(animals, animal.name) === null) {
    // add the animal object to the animal array
                animals.push(animal);
            }
        }
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
