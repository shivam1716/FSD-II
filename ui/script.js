function toggleQuantity(checkbox)
{
    let row = checkbox.parentElement.parentElement;
    let qty = row.querySelector(".qty");

    if(checkbox.checked)
    {
        qty.disabled = false;
        qty.value = 1;
        qty.focus();
    }
    else
    {
        qty.disabled = true;
        qty.value = "";
    }
}

function payBill()
{
    let rows = document.querySelectorAll("tbody tr");

    let total = 0;
    let bill = "";

    rows.forEach(function(row){

        let checkbox = row.querySelector("input[type='checkbox']");
        let qty = row.querySelector(".qty");
        let price = parseInt(row.querySelector(".price").innerText);

        if(checkbox.checked)
        {
            let quantity = parseInt(qty.value);

            if(isNaN(quantity) || quantity<=0)
            {
                quantity = 1;
            }

            let amount = quantity * price;

            total += amount;

            bill += row.cells[1].innerText +
                    " (x" + quantity + ") = ₹" +
                    amount + "<br>";
        }

    });

    if(total==0)
    {
        document.getElementById("result").innerHTML =
        "Please select at least one book.";
    }
    else
    {
        document.getElementById("result").innerHTML =
        bill +
        "<hr><b>Total Bill = ₹" + total + "</b>";
    }
}

function resetForm()
{
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let qty = document.querySelectorAll(".qty");

    checkboxes.forEach(function(box){
        box.checked = false;
    });

    qty.forEach(function(q){
        q.disabled = true;
        q.value = "";
    });

    document.getElementById("result").innerHTML = "";
}