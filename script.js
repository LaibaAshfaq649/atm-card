document.getElementById('btn-update').addEventListener('click', function () {
    const institutionName = document.getElementById('institution-name').value;
    const cardId = document.getElementById('card-id').value;
    const accountHolder = document.getElementById('account-holder').value;
    const validTill = document.getElementById('valid-till').value;
    const securityCode = document.getElementById('security-code').value;

    if (institutionName) {
        document.getElementById('display-institution').innerText = institutionName;
    }
    if (cardId) {
        document.getElementById('display-card-id').innerText = cardId;
    }
    if (accountHolder) {
        document.getElementById('display-account-holder').innerText = accountHolder;
    }
    if (validTill) {
        document.getElementById('display-valid-till').innerText = validTill;
    }
    if (securityCode) {
        document.getElementById('display-security-code').innerText = securityCode;
    }

    document.getElementById('credit-card').classList.toggle('flip');
});