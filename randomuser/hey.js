const userImage = document.getElementById("userImage");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPhone = document.getElementById("userPhone");
const userCell = document.getElementById("userCell");
const userLocation = document.getElementById("userLocation");
const btn = document.getElementById("btn");

async function getUser() {
    try {
        const response = await fetch(`https://randomuser.me/api/`);
        const data = await response.json();

        const user = data.results[0]
          
        userImage.src = user.picture.large
        userName.textContent = user.name.first
        userName.textContent = user.name.last 
        userEmail.textContent = user.email
        userLocation.textContent = user.location.city + "," + user.location.country
        userPhone.textContent = user.phone
        userCell.textContent = user.cell
}
  catch (error) {
        console.log("Error:", error);
    }
}
getUser();
   btn.addEventListener("click", getUser);
   getUser();
