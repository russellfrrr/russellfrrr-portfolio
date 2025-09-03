/* PASSPORT MANAGEMENT SYSTEM
    by: Russell Ferrero
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//ASK WRAPPER FUNCTION FOR RL.QUESTION
const ask = (question) => {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
};

//passport profiles db
let passports = [];

//-------------------- VALIDATION/INPUT FUNCTIONS --------------------
const inputName = async () => {
    let firstName, lastName;

    do{
    firstName = await ask('First Name: ');
    if(!isNaN(firstName)){
        console.log('Invalid input, please try again!');
        firstName = null;
    }
    }while(!firstName);

    do{
    lastName = await ask('Last Name: ');
    if(!isNaN(lastName)){
        console.log('Invalid input, please try again!');
        lastName = null;
        }
    }while(!lastName);
    return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
}

const validationAge = async () => {
    let age;
    do{
        const input = await ask('Age: ');
        const ageNum = parseInt(input);

        if(isNaN(ageNum) || ageNum <= 0){
            console.log('Invalid input, please try again!');
        }else{
            age = ageNum;
        }
    }while(!age);

    return age;
}

const inputNationality = async () =>{
    let nationality;
    do{
        nationality = (await ask('Nationality: ')).toUpperCase();
        if(!isNaN(nationality)){
            console.log('Invalid input, please try again.');
            nationality = null;
        }
    }while(!nationality);
   return nationality;
}

const validationGender = async () => {
    let gender; 
    do{
        const input = (await ask('Gender (M/F): ')).toLowerCase();
        
        if(input !== 'm' && input !== 'f'){
            console.log('Invalid input, please try again!');
        }else{
            gender = input.toUpperCase();
        }
    }while(!gender);

    return gender;
}

const validationDate = async () => {
    let month, day, year;
    console.log('Enter the following input for your Date of Birth.');

    do{
    let m = parseInt(await ask('Month (1-12): '));
    if(m <= 0 || m > 12){
        console.log('Invalid input, please try again!');
    }else{
        month = m;
        }
    }while(!month);

    do{
        let d = parseInt(await ask('Day (1-31): '));
        if(d <= 0 || d > 31){
            console.log('Invalid input, please try again!');
        }else{
            day = d;
        }
    }while(!day);

    do{
        let y = parseInt(await ask('Year (1900-2025): '));
        if(y < 1900 || y > 2025){
            console.log('Invalid input, please try again!');
        }else{
            year = y;
        }
    }while(!year);

    return `${month}/${day}/${year}`;
}

const inputPlace = async () => {
    let city, country;
    console.log('Enter the following input for your Place of Birth.');
    do{
        city = (await ask('City: ')).toUpperCase();
        if(!isNaN(city)){
            console.log('Invalid input, please try again.');
            city = null;
        }
    }while(!city);

    do{
        country = (await ask('Country: ')).toUpperCase();
        if(!isNaN(country)){
            console.log('Invalid input, please try again.')
            country = null;
        }
    }while(!country);
    // return (await ask('Place of Birth: ', rl)).toUpperCase();
    return `${city}, ${country}`;
}

const validationPassNum = async () => {
    let passNum;
    do{
        let input = (await ask('Enter a 6-digit number for your Passport No.: ')).trim();

        if(input.length !== 6){
            console.log('Invalid input, please try again!');
            passNum = null;
        }else if(passports.find(ownPassports => ownPassports.pPassNum === input)){
            console.log('This passport number already exists! Try another.');
            passNum = null;
        }else{
            passNum = input; 
        }
    }while(!passNum);

    return passNum;

}

const searchPassport = async () => {
    let passNum, passport;

    do{
       const input = (await ask('Enter your 6-digit passport number: ')).trim();
       passport = passports.find(pass => pass.pPassNum === input);

       if(!passport){
        console.log(`Passport doesn't exist! Create one first. `);
       }else{
        passNum = input;
       }
    }while(!passNum);

    return passport;
}



//-------------------- CORE PROGRAM --------------------

//MAIN MENU
const menu = async() => {
    
    do{
    console.log(`---PASSPORTS MANAGEMENT SYSTEM--- 
    1. Add new Passport 
    2. Update a Passport 
    3. Delete a Passport 
    4. View my Passport 
    5. View all Passports
    6. Exit\n`);

    let choice = await ask('Input choice: ');
    switch(choice){
    case '1':
        await addPass();
        break;
        
    case '2':
        await updatePass();
        break;
        
    case '3':
        await deletePass();
        break;
        
    case '4':
        await viewOwnPass();
        break;
        
    case '5':
        await viewPass();
        break;
        
    case '6':
        console.log('Thank you for using our services!');
        rl.close();
         return;
            
    default: 
        console.log('Invalid Input. Try again.');
        }
    }while(true);

}  


//ADD PASSPORT PROFILE
const addPass = async() => {

    //Properties
    let pName = await inputName();
    let pAge = await validationAge();
    let pNationality = await inputNationality();
    let pGender = await validationGender();
    let pDateOfBirth = await validationDate();
    let pPlaceOfBirth = await inputPlace();
    let pPassNum = await validationPassNum();

    //Object of a Passport Profile
    let ownPassports = {
    pName,
    pAge,
    pNationality,
    pGender,
    pDateOfBirth,
    pPlaceOfBirth,
    pPassNum   
    }

    passports.push(ownPassports);

    console.log('Your passport has been created!');
}


//UPDATE PASSPORT PROFILE
const updatePass = async() => {

    let passport = await searchPassport();
    

    let newName = await inputName();
    let newAge = await validationAge();
    let newNationality = await inputNationality();
    let newGender = await validationGender();
    let newDateOfBirth = await validationDate();
    let newPlaceOfBirth = await inputPlace();
    let newPassNum = await validationPassNum ();

 
    passport.pName = newName;
    passport.pAge = newAge;
    passport.pNationality = newNationality;
    passport.pGender = newGender;
    passport.pDateOfBirth = newDateOfBirth;
    passport.pPlaceOfBirth = newPlaceOfBirth;
    passport.pPassNum = newPassNum; 

    console.log('Your passport profile has been updated!');
}


//DELETE PASSPORT PROFILE
const deletePass = async() => {

    let passport = await searchPassport();

    let deleteChoice;
    do{
    deleteChoice = (await ask('Are you sure you want to delete your profile? (Y/N): ')).toLowerCase();

        if(deleteChoice === 'y'){
            passports = passports.filter(pass => pass !== passport);
            console.log('Your profile has been deleted. ');
            return;
        }else if(deleteChoice === 'n'){
            console.log('Deletion cancelled.');
            return;
        }else{
            console.log('Invalid input! Please try again.');
        }
    }while(deleteChoice !== 'y' && deleteChoice !== 'n');
}


//VIEW OWN PASSPORT
const viewOwnPass = async() => {
    
    let passport = await searchPassport();

        if(!passport){
            console.log(`Your name doesn't exist in our records. Create a passport first!`);
        }else{
            console.table(passport);
        }
}


//VIEW ALL PASSPORTS 
const viewPass = async() => {
    const adminPass = 'upliftcodecamp';
    
    let inputPass = await ask('Enter administrator password to access passport list: ');

    if(inputPass === adminPass){
        console.table(passports);
    }else{
        console.log('Incorrect password. Access denied!');
    }
}


//START OF APP
menu();



