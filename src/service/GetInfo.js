const getName = async () => {
  return await fetch("https://bayna-s-profile-v3.herokuapp.com/api/name", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
};
const getAge = async () => {
  return await fetch("https://bayna-s-profile-v3.herokuapp.com/api/age", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
};
const getMajor = async () => {
  return await fetch("https://bayna-s-profile-v3.herokuapp.com/api/major", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
};
const getProfile = async () => {
  return await fetch("https://bayna-s-profile-v3.herokuapp.com/api/profile", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
};
const getDiscreption = async () => {
  return await fetch(
    "https://bayna-s-profile-v3.herokuapp.com/api/description",
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    }
  );
};
const getImage = async () => {
  return await fetch("http://localhost:3000/api/picture", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
};
export const infoService = {
  getName,
  getAge,
  getMajor,
  getProfile,
  getDiscreption,
  getImage,
};
