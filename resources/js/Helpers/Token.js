class Token{
    payload(token){
        const payload=token.split('.')[1]
        return JSON.parse(atob(payload))
    }
    isValid(token){
        const payload= this.payload(token);
        if(payload){
            return payload.iss == "http://localhost:8000/api/auth/login" ? true : false
        }
        return false

    }
}
export default Token= new Token()