function otpGenerator(){
    let myInput =document.getElementById('myInput');
    let otp = document.getElementById('otp');
    let myBtn = document.getElementById('myBtn')
// click section
    otp.addEventListener('click',(e) => {
        const number = [1,2,3,4,5,6,7,8,9];
        let txt = '';
        for(let i = 0; i < 6;i++){
            txt += Math.floor(Math.random(number[i])*9);
        }
        myInput.value=txt;
     
    })
    // Copy section
    myBtn.addEventListener('click',(e) => {
        myInput.select();
        document.execCommand('copy')
    })
}
otpGenerator()
