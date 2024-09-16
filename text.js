
// No 01. Help The Zoo Manager To Calculate Income Of Zoo
function calculateMoney(ticketSale) {
    if (typeof ticketSale !== 'number') {
        return "Invalid Number : It's Not A Number";
    }
    else if(ticketSale >= 0){
        // Income Per Ticket
        const perTicketPrice = 120;

        // total Income from Ticket Sells
        const totalIncome = ticketSale * perTicketPrice;

        // cost for Guard
        const CostForSecurityGuard = 500;
        // cost for Staff
        const totalWorkingStaff = 8;
        const CostPerWorkingStaff = 50;
        const CostForWorkingStaff = totalWorkingStaff * CostPerWorkingStaff;
        // Total Cost Per-Day
        const totalCost = CostForSecurityGuard + CostForWorkingStaff;

        // result is
        const result = totalIncome - totalCost;
        return result;
    }
    else{
        return "Invalid Number : It's Not A Prositive Number";
    }
}



// NO 02. Identify Good Name or Bad Name
function checkName(name) {
    if (typeof name !== "string") {
        return "Invalid String : It's Not A String";
    }
    const lowerName = name.toLowerCase();
    if ( lowerName[(lowerName.length - 1)] =="a" || lowerName[(lowerName.length - 1)] =="y" || lowerName[(lowerName.length - 1)] =="i" || lowerName[(lowerName.length - 1)] =="e" || lowerName[(lowerName.length - 1)] =="o" || lowerName[(lowerName.length - 1)] =="u" || lowerName[(lowerName.length - 1)] =="w" ){
        return "Good Name";
    }
    else{
        return "Bad Name";
    }
}



//  No 03. Identify All Virus in my Array & Delete All Them In Array
function deleteInvalids(arr) {
    if (Array.isArray(arr) !== true) {
        return "Invalid Object : Give me Correct Array";
    }
    // 
    let returnArr = [];
    for (const number of arr) {
        if (typeof number == "number" && !isNaN(number)) {
            returnArr.push(number);
        }
    }
    return returnArr;
}



// No 04. Make A Great Password Function
function password(obj) {
    // 
    if (Array.isArray(obj) === true) {
        return "Invalid Object : Give me Correct Object";
    }
    // 
    else if (typeof obj !== "object") {
        return "Invalid Object : Give me Correct Object";
    }
    // main body
    else{
        if (Object.keys(obj).length !== 3) {
            return "Please Provide All Correct Information ..";
        }
        else{
            let result = '';
            for (const key in obj) {
                if (key === 'name') {
                    result = result + obj[key] + '@';
                }
                else if (key === 'siteName') {
                    let capitalizedSiteName = obj[key].charAt(0).toUpperCase() + obj[key].slice(1).toLowerCase();
                    result = capitalizedSiteName + '#' + result;
                    // result = obj[key] + '#' + result;
                }
                else if (key === 'birthYear') {
                    let birthYearLength  = obj[key].toString().length;
                    if (birthYearLength !== 4) {
                        return "Please Provide Correct Year .."
                    }
                    else{
                        result = result + obj[key];
                    }
                }
                else{
                    return "Please Provide Correct Element .."
                }
            }
            return result;
        }
    }
}



//  No 05. Monthly Savings Calculator for a Freelancer
function monthlySavings( arr , livingCost ) {
    if (Array.isArray(arr) === true && typeof livingCost === 'number') {
        let totalIncome = 0;
        for (const num of arr) {
            if (num >= 3000) {
                // 20 % gov Tax 
                totalIncome = totalIncome + ( ( num / 100 ) * 80 );
            }
            else{
                totalIncome = totalIncome + num;
            }
        }
        let savings = totalIncome - livingCost;
        if (savings <= 0) {
            return 'Earn More..'
        }
        else{
            return savings;
        }
    }
    else{
        return 'Get Vallid Input First..'
    }
    
}