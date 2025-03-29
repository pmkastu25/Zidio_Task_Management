export const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type":"application/json"
    },
}