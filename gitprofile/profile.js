const input = document.getElementById("username");
const searchBtn = document.getElementById("searchBtn");
const container = document.querySelector(".container");

const avatar = document.getElementById("avatar");
const nameEl = document.getElementById("name");
const login = document.getElementById("login");
const bio = document.getElementById("bio");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");
const profileLink = document.getElementById("profileLink");

async function getProfile() {

    const username = input.value.trim();

    if (username === "") {
        alert("Please enter a GitHub username");
        return;
    }

    try {

        const response = await fetch(`https://api.github.com/users/${username}`);

        if (!response.ok) {
            throw new Error("User Not Found");
        }

        const data = await response.json();

        container.classList.add("active");

        avatar.src = data.avatar_url;
        avatar.alt = data.login;

        nameEl.textContent = data.name || data.login;
        login.textContent = "@" + data.login;

        bio.textContent = data.bio || "No bio available.";

        followers.textContent = data.followers;
        following.textContent = data.following;
        repos.textContent = data.public_repos;

        profileLink.href = data.html_url;

    } catch (error) {

        container.classList.remove("active");

        alert("GitHub user not found!");
    }
}

searchBtn.addEventListener("click", getProfile);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        getProfile();
    }
});