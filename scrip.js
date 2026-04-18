⚙️ 3. script.js
JavaScript
function buyData() {
    let network = document.getElementById("network").value;
    let phone = document.getElementById("phone").value;
    let plan = document.getElementById("plan").value;

    if (phone === "") {
        alert("Please enter phone number");
        return;
    }

    let cashback = Math.floor(plan * 0.1); // 10% cashback

    alert(
        "Data Purchase Successful!\n\n" +
        "Network: " + network +
        "\nPhone: " + phone +
        "\nAmount: ₦" + plan +
        "\nCashback: ₦" + cashback
    );
}

function buyAirtime() {
    let phone = document.getElementById("airtimePhone").value;
    let amount = document.getElementById("amount").value;

    if (phone === "" || amount === "") {
        alert("Fill all fields");
        return;
    }

    let discount = amount * 0.1;

    alert(
        "Airtime Purchase Successful!\n\n" +
        "Phone: " + phone +
        "\nAmount: ₦" + amount +
        "\nDiscount: ₦" + discount
    );
}
