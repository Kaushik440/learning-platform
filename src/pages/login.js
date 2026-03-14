function handleCredentialResponse(response) {

    const user = parseJwt(response.credential);

    const userData = {
        name: user.name,
        email: user.email,
        picture: user.picture
    };

    // Save user
    localStorage.setItem("user", JSON.stringify(userData));

    console.log("Login success:", userData);

    // Redirect to home page
    window.location.href = "index.html";
}

function parseJwt(token) {

    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

    const jsonPayload = decodeURIComponent(
        atob(base64)
        .split('')
        .map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );

    return JSON.parse(jsonPayload);
}
window.handleCredentialResponse = handleCredentialResponse;