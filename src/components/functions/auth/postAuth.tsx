export const postAuth = (url: string, email: string, password: string) => {
  const body = {
    email,
    password,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      const { message, token } = data;
      console.log(message);
      localStorage.setItem("token", token);
    })
    .catch((err) => {
      console.log(err);
    });
};
