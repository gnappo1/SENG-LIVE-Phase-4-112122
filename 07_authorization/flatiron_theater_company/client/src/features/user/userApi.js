export const fetchCurrentUser = () => {
    return fetch("/authorized_user")
    .then((res) => res.json())
    .catch(err => alert(err))
}
export const loginUser = (user) => {
    return fetch(`/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
    })
    .then((res) => res.json())
    .catch(err => alert(err))
}
export const signupUser = (user) => {
    return fetch(`/signup`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
    })
    .then((res) => res.json())
    .catch(err => alert(err))
}
export const logoutUser = (user) => {
    return fetch(`/logout`, {
        method:"DELETE"
    })
    .catch(err => alert(err))
}