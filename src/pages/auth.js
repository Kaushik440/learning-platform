export function getUser() {
return JSON.parse(localStorage.getItem("user"));
}

export function logout() {
localStorage.removeItem("user");
window.location.href = "login.html";
}

export function requireLogin() {
const user = getUser();

```
if (!user) {
    alert("Please login first!");
    window.location.href = "login.html";
}
```

}
