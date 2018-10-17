function getUser(id){
    return new Promise((resolve,reject)=>{
        $.getJSON({
            URL : `https://www.github.com/user/${id}`,
            success : resolve,
            reject: reject
        })
    })
}
function getWeather(user){
    return new Promise((resolve,reject)=>{
        $.getJSON({
            URL: getLocationURL(user.location.split('')),
            success : resolve,
            error : reject
        })
    })
}
