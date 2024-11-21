document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const usernameInput = document.getElementById("username");
  const postInput = document.getElementById("postInput");
  const postButton = document.getElementById("postButton");
  const postList = document.getElementById("postList");

  let currentUser = null;

  // Handle Account Creation
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    currentUser = usernameInput.value;
    alert(`Account created for ${currentUser}`);
    usernameInput.value = "";
    signupForm.style.display = "none";
  });

  // Handle Posting
  postButton.addEventListener("click", function () {
    if (!currentUser) {
      alert("You need to create an account first!");
      return;
    }

    const postContent = postInput.value;
    if (postContent.trim() === "") {
      alert("Post cannot be empty.");
      return;
    }

    const li = document.createElement("li");
    li.textContent = `${currentUser}: ${postContent}`;
    postList.appendChild(li);
    postInput.value = "";
  });
});
