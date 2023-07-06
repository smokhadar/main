const viewProfileHandler = async(event) => {
    event.preventDefault();
    document.location.replace('/profile');
}

document
.querySelector("#profile-button")
.addEventListener("click", viewProfileHandler);
