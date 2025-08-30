async function fetchLoginData(username, password) {
  const loginDataResponse = await fetch(
    "https://www.fulek.com/data/api/user/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  );

  const loginData = await loginDataResponse.json();

  return loginData;
}

async function handleLogin(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const username = formData.get("username");
  const password = formData.get("password");

  const { data, statusCode } = await fetchLoginData(username, password);

  if (!data || statusCode === 404) {
    const formErrorElement = document.getElementById("form-error");

    formErrorElement.textContent = "User not found";
  } else {
    const { token } = data;

    sessionStorage.setItem("token", token);
    sessionStorage.setItem("username", username);

    window.location.href = "index.html";
  }
}
