document.getElementById('btn-login')
        .addEventListener('click', function(event){
            console.log('login button click');
            event.preventDefault();

            const phoneNumber = document.getElementById('phone-number').value;
            const pinNumber = document.getElementById('pin-number').value;

            // console.log(phoneNumber, pinNumber);



            if(phoneNumber === '5' && pinNumber === '1234'){
                console.log('Your are login in');
                window.location.href = '/home.html';
            }
            else{
                alert('wrong phone number or pin');

            }
        

})
