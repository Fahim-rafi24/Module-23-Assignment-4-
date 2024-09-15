
// No 01.
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


// NO 02.






















