'use strict';

describe('peopleObjects', function(){

	afterEach(function(){
		//clean up
		peopleObjects = {};
		keyCount = 0;
	});

	it('Should be able to add a person to the stack', function(){
		var name, age, gender, key;

		//given
		name = 'Bruce Wayne';
		age = 32;
		gender = 'male';

		//when
		key = createNewPerson(name, age, gender);
		
		//then
		expect(key).toEqual(0);
		expect(Object.size(peopleObjects)).toBe(1);
	});

	it('Should be able remove a person from the stack', function(){
		var name, age, gender, key;

		//given
		name = 'Selina Kyle';
		age = 28;
		gender = 'female';

		//when
		key = createNewPerson(name, age, gender);
		
		//then
		expect(key).toEqual(0);
		expect(Object.size(peopleObjects)).toBe(1);

		//when
		removePerson(key);

		//then
		expect(Object.size(peopleObjects)).toBe(0);
	});
});