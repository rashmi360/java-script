const submitBtn = document.getElementById("submitBtn");
const rightSide = document.querySelector(".right-side");

submitBtn.addEventListener("click", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const mobile = document.getElementById("Mobile-Number").value;

    const formData = {

        Name:name,
        Email:email,
        Address:address,
        Phone:mobile

    };

    localStorage.setItem("form",JSON.stringify(formData));

    if(!document.querySelector(".load-btn")){

        const btn = document.createElement("button");

        btn.innerText="Load Data";

        btn.classList.add("load-btn");

        btn.addEventListener("click",loadData);

        rightSide.appendChild(btn);

    }

});

function loadData(){

    const data = JSON.parse(localStorage.getItem("form"));

    let card = document.querySelector(".data-card");

    if(!card){

        card=document.createElement("div");

        card.classList.add("data-card");

        rightSide.appendChild(card);

    }

    card.innerHTML=`

        <h3>Saved Information</h3>

        <p><strong>Name:</strong> ${data.Name}</p>

        <p><strong>Email:</strong> ${data.Email}</p>

        <p><strong>Address:</strong> ${data.Address}</p>

        <p><strong>Mobile Number:</strong> ${data.Phone}</p>

    `;

}