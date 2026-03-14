export function loadNavbar() {

  const user = JSON.parse(localStorage.getItem("user"));

  let userSection = `<li><a href="login.html">Login</a></li>`;

  if(user){
      userSection = `
        <li id="userProfile">
          <img src="${user.picture}" width="30" style="border-radius:50%;vertical-align:middle;">
          <span>${user.name}</span>
          <button onclick="logout()" style="margin-left:10px;">Logout</button>
        </li>
      `;
  }

  const navbar = `
    <nav class="navbar">
        <h2>Learning Platform</h2>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="courses.html">Courses</a></li>
            <li><a href="cheatsheets.html">Cheat Sheets</a></li>
            ${userSection}
        </ul>
    </nav>
  `;

  document.getElementById("navbar").innerHTML = navbar;
}
window.logout = function(){
    localStorage.removeItem("user");
    window.location.href = "login.html";
}