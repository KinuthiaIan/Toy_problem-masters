
function salary(bs,benefits){
    totalTaxbleIncome = bs+benefits;
    //calculating payee
    let payee;
    if(totalTaxbleIncome <= 24000){
        payee = 10/100 * totalTaxbleIncome
        console.log('payee:',payee)
    } else if(totalTaxbleIncome > 24000 && totalTaxbleIncome<= 32333){
        payee = 25/100 * totalTaxbleIncome;
        console.log('payee:',payee)
    } else if(totalTaxbleIncome > 32333 && totalTaxbleIncome <= 500000){
        payee = 30/100 * totalTaxbleIncome;
        console.log('payee:',payee);
    } else if (totalTaxbleIncome > 500000 && totalTaxbleIncome <= 800000){
        payee = 32.5/100 * totalTaxbleIncome;
        console.log('payee:',payee)
    } else if(totalTaxbleIncome > 800000){
        payee = 35/100 * totalTaxbleIncome;
        console.log('payee:', payee)
    } else{
        console.log('You are not under any tax bracket')
    }

//NHIF DEDEUCTIONS
    let NHIF;
    if(totalTaxbleIncome < 10000){
        NHIF = 150;
        console.log('Total NHIF Deductions:',NHIF);
    } else if(totalTaxbleIncome > 10000 && totalTaxbleIncome <= 30000){
        NHIF = 900;
        console.log('Total NHIF Deductions:',NHIF)
    } else if(totalTaxbleIncome > 30000 && totalTaxbleIncome <=60000){
        NHIF = 1200
        console.log('Total NHIF Deductions:',NHIF)
    } else if(totalTaxbleIncome > 60000 && totalTaxbleIncome <=99999){
        NHIF = 1600
        console.log('Total NHIF Deductions:',NHIF)
    } else {
        NHIF = 1700;
        console.log('Total NHIF Deductions:',NHIF)
    }

    //NSSF DEDUCTIONS
    let NSSF;
    NSSF = 6/100 * bs;
    console.log('Total NSSF Deductions:',NSSF)

    //GROSS SALARY
    GS = totalTaxbleIncome;
    console.log('Gross salary:', GS)

    //NET SALARY
    netSalary = GS-NSSF-NHIF
    console.log('Your Net Salary:', netSalary)
};


salary(40000,3000)
