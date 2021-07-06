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
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
        var contact = {
            id: id,
            nameFirst: nameFirst,
            nameLast: nameLast
        } 
        return contact;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact) {
            return contacts.push(contact);
        },
        findContact: function(fullName) {
/*
 *fullName is equal to contacts.nameFirst+contacts.nameLast
 *if (contacts[i].nameFirst + contacts[i].nameLast === fullName)
 *return "contact object" for that name
*/                
            for (var i = 0; i < contacts.length; i++) {
                
                if (fullName === contacts[i].nameFirst + ' ' + contacts[i].nameLast) {
                    return contacts[i];
                } else {
                    return undefined;
                }
            }
            
        },
        removeContact: function(contact) {
//use a for loop to iterate over the contacts array            
            for (var i = 0; i < contacts.length; i++) {
/*
    use an if else statement to compare the  object.key values of the new 
    contact object against the same object.keys from each contact object in the 
    contacts array and (if the new contact object is found inside the contacts
    array) return the contacts array with the contact object deleted               
*/    
                if (contacts[i].nameFirst === contact.nameFirst && contacts[i].nameLast === contact.nameLast) {
                    return contacts.splice(i, 1)// delete or spliced contacts array
                }
            }
        },
/* 
 *      5. add a printAllContactNames() Function to your makeContactList() factory. 
 *         The printAllContactNames() Function should return a String formated 
 *         with all the full-names of the separated with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
*/        
        printAllContactNames: function() {
//create string variable 'myContacts' to store the full name data of everyone in 
//the contacts array
            var mostMyContacts = '';
/*
    use a for loop to iterate over the 'contacts' array to access the individual 
    'contact' objects and then access the 'nameFirst' and 'nameLast' key values 
    with dot notation
*/          for (var i = 0; i < contacts.length-1; i++) {
                mostMyContacts += contacts[i].nameFirst + ' ' + contacts[i].nameLast + '\n';
                //myContacts += mostMyContacts.concat(contacts[contacts.length-1].nameFirst + ' ' + contacts[contacts.length-1].nameLast);
            } return mostMyContacts += contacts[contacts.length-1].nameFirst + ' ' + contacts[contacts.length-1].nameLast;
               //NEED TO USE += OPERATOR             //add final full name iteration here manually;
            
        }
    };
}

//NO, JUST ADD  and access nameFirst and name last specifically at the
            //final index OF THE STRING SO NO VARIABLE i needs to be involved


//return and reassign myContacts? 
//if else statement to prevent last full name from getting a line-break at the end
//use a second for loop to specify the final full name iteration without a 
      //line break.
      //also make sure to end the previous forloop one cycle early to account for
      //this



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
