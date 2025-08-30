async function fetchRegistrationData(username, password) {
  const registrationDataResponse = await fetch(
    "https://www.fulek.com/data/api/user/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }
  );

  const registrationData = await registrationDataResponse.json();

  return registrationData;
}

async function handleRegister(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const username = formData.get("username");
  const password = formData.get("password");

  const { statusCode } = await fetchRegistrationData(username, password);

  if (statusCode === 200) {
    window.location.href = "login.html";
  } else {
    console.error("Registration failed:", data);
  }
}
