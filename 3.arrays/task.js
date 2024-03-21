function compareArrays(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;

    return arr1.every((value, index) => value === arr2[index]);
  
}

function getUsersNamesInAgeRange(users, gender) {
    const userFilter = users.filter(user => user.gender == gender);

    return (userFilter.length > 0)? userFilter.reduce((sum, user) => sum + user.age, 0) / userFilter.length: 0;

}
// return users.filter(user => user.gender === gender)
//     .map(user => user.age)
//     .reduce((acc, age, index, arr) => acc + age / arr.length, 0);
  

function testCase(){
    console.log("Class 1:")
    //Test one:
    let actual_1 = compareArrays([9, 2, 4, 8, 2], [9, 2, 4]);
    let expected_1 = false;

    (actual_1 == expected_1)?
    console.log("Все ОК, тест 1"): console.log("Всё плохо, тест 1");

    //Test two:
    let actual_2 = compareArrays([8, 1, 2], [8, 1, 2]);
    let expected_2 = true;

    (actual_2 == expected_2)?
    console.log("Все ОК, тест 2"): console.log("Всё плохо, тест 2");

    console.log("Class 2:")
    const people = [
        {firstName: "Александр", secondName: "Карпов", age: 17, gender: "мужской"},
        {firstName: "Егор", secondName: "Морозов", age: 21, gender: "мужской"},
        {firstName: "Мелисса", secondName: "Леонова", age: 40, gender: "женский"},
        {firstName: "Мелания", secondName: "Савельева", age: 37, gender: "женский"},
        {firstName: "Мария", secondName: "Овчинникова", age: 18, gender: "женский"},
        {firstName: "Марьяна", secondName: "Котова", age: 17, gender: "женский"},
        {firstName: "Фёдор", secondName: "Селезнев", age: 50, gender: "мужской"},
        {firstName: "Георгий", secondName: "Петров", age: 35, gender: "мужской"},
        {firstName: "Даниил", secondName: "Андреев", age: 49, gender: "мужской"},
        {firstName: "Дарья", secondName: "Савельева", age: 25, gender: "женский"},
        {firstName: "Михаил", secondName: "Шаров", age: 22, gender: "мужской"},
        {firstName: "Владислав", secondName: "Давыдов", age: 40, gender: "мужской"},
        {firstName: "Илья", secondName: "Казаков", age: 35, gender: "мужской"},
        {firstName: "Евгений", secondName: "Кузьмин", age: 19, gender: "мужской"},
      ]

    // Test three:
    let actual_3 = getUsersNamesInAgeRange(people, "мужской");
    let expected_3 = 32;

    (actual_3 == expected_3)?
    console.log("Все ОК, тест 3"): console.log("Всё плохо, тест 3");

    //Test four:
    let actual_4 = getUsersNamesInAgeRange(people, "женский");
    let expected_4 = 27.4;

    (actual_4 == expected_4)?
    console.log("Все ОК, тест 4"): console.log("Всё плохо, тест 4");

    //Test five:
    let actual_5 = getUsersNamesInAgeRange([], "мужской");
    let expected_5 = 0;

    (actual_5 == expected_5)?
    console.log("Все ОК, тест 5"): console.log("Всё плохо, тест 5");

    //Test six:
    let actual_6 = getUsersNamesInAgeRange(people, "it");
    let expected_6 = 0;

    (actual_6 == expected_6)?
    console.log("Все ОК, тест 6"): console.log("Всё плохо, тест 6");
}
testCase();