// token
export const token = JSON.parse(localStorage.getItem("userToken"));
// config header
export const config={
    headers:{
        authorization:`Bearer ${token}`
    }
}