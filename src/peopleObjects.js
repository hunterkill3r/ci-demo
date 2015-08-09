'use strict';

var peopleObjects = {};
var keyCount = 0;

Object.size = function(){
	var size = 0, 
		key;
    for (key in peopleObjects) {
        if (peopleObjects.hasOwnProperty(key)) 
        	size++;
    }
    return size;
};

function createNewPerson(name, age, gender){
	var newPeopleObject = {
		name: name,
		age: age,
		gender: gender
	};
	var newKey = keyCount++;
	peopleObjects[newKey] = newPeopleObject;
	return newKey;
}	

function removePerson(id){
	delete peopleObjects[id];
}
