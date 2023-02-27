export const fetchProductions = () => {
    return fetch("/productions")
        .then(resp => resp.json())
        .catch(error => alert(error))
}
export const createProduction = prod => {
    return fetch('/productions',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(prod)
    })
    .then(resp => resp.json())
    .catch(error => alert(error))
}
export const updateProduction = prod => {
    return fetch(`/productions/${prod.id}`,{
        method:'PATCH',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(prod)
    })
    .then(resp => resp.json())
    .catch(error => alert(error))
}
export const destroyProduction = id => {
        //DELETE to `/productions/${params.id}`
        return fetch(`/productions/${id}`,{
          method:'DELETE',
          headers: {'Content-Type': 'application/json'}
        })
        .then(resp => ({resp, id}))
        .catch(error => alert(error))
}