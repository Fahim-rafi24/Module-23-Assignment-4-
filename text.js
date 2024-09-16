
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