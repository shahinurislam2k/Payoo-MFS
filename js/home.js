// step - 1
document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
 // step - 2
        const addMoneyInput = document.getElementById('input-add-money').value;
        const pinNumberInput = document.getElementById('input-pin-number').value;

        // console.log(addMoneyInput, pinNumberInput);

// step - 3  Verify pin Number 
        if(pinNumberInput === '1234'){
            console.log('adding money to your account')

// step - 4 Current balance
            const balance = document.getElementById('account-balance').innerText;
            console.log(balance);

// step - 5 string to number
            // const newBalance = balance + addMoneyInput;
            const addMoneyNumber = parseFloat(addMoneyInput);
            const balanceNumber = parseFloat(balance);
            

// step - 6 
            const newBalance = balanceNumber + addMoneyNumber;
            console.log(newBalance);


// step - 7
            document.getElementById('account-balance').innerText = newBalance;


        }
        else{
            alert('Failed to add money! Please try again.')
        }


})
