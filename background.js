const loginBtn = document.getElementById("login");
loginBtn.addEventListener('click', function() {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const traArea = document.getElementById("transaction-area");
    traArea.style.display = "block";
})

document.getElementById("deposit-btn").addEventListener('click', function() {
    const depositAmount = parseFloat(document.getElementById("input-deposit").value);
    // console.log(depositAmount);
    if (!isNaN(depositAmount)) { // checking for reasonable value
    const preDeposit = parseFloat(document.getElementById("deposit-amount").innerText);
    const totalDeposit = depositAmount + preDeposit;
    // console.log(document.getElementById("deposit-amount").innerText);
    
    document.getElementById("deposit-amount").innerText = totalDeposit;
    document.getElementById("input-deposit").value = "";

    let balance = parseFloat(document.getElementById("balance-amount").innerText);
    // console.log(balance);
    balance = balance + depositAmount;
    document.getElementById("balance-amount").innerText = balance;
    }
    else {
        alert("Enter a valid amount")
    }
})

document.getElementById("withdraw-btn").addEventListener('click', function() {
    const withdrawAmount = parseFloat(document.getElementById("withdraw-input").value);
    // console.log(depositAmount);
    if (!isNaN(withdrawAmount)) { // checking for reasonable value
    const currentWithdrawAmount = parseFloat(document.getElementById("withdraw-amount").innerText);
    const totalWithdraw = withdrawAmount + currentWithdrawAmount;
    // console.log(document.getElementById("deposit-amount").innerText);
    
    document.getElementById("withdraw-amount").innerText = totalWithdraw;
    document.getElementById("withdraw-input").value = "";

    let balance = parseFloat(document.getElementById("balance-amount").innerText);
    // console.log(balance);
    balance = balance - withdrawAmount;
    document.getElementById("balance-amount").innerText = balance;
    }
    else {
        alert("Enter a valid amount")
    }
})
