// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    return {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast
    }
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    // An array to hold the contacts
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            // Push contact into the contacts array
            contacts.push(contact);
        },
        findContact: function(fullName) {
            // Use a for loop to iterate over the contact list
            for (let i=0; i < contacts.length; i++) {
            // Declare a fullNameString variable that is the nameFirst + nameLast
                let fullNameString = contacts[i].nameFirst + " " + contacts[i].nameLast;
            // If the fullNameString is equal to the fullName
                if (fullNameString === fullName) {
            // Return the object
                    return contacts[i];
                } else {
            // Else return undefined
                    return undefined;
                }
            }
        },
        removeContact: function(contact) {
            // Use a for loop to iterate over the contacts array
            for (let i=0; i < contacts.length; i++) {
            // If contacts[i] === contact
                if (contacts[i] === contact) {
            // Use splice to remove the contact
                    contacts.splice(i, 1);
                }
            }
        },
        printAllContactNames: function() {
            // Create an empty array
            let nameArray = [];
            // Use a for loop to iterate over the contacts array
            for (let i=0; i < contacts.length; i++) {
            // Create a full name string by adding contacts[i].nameFirst + " " + contacts[i].nameLast
                let fullName = contacts[i].nameFirst + " " + contacts[i].nameLast;
            // Push the full name string to the array
                nameArray.push(fullName);
            }
            // Use .join(\n) to join the array into a string with a single name on each line
            return nameArray.join("\n");
            // Return that string
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
