import Token from  './Token'
import AppStorage from './AppStorage'
class User{
    login(data){
        axios.post('api/auth/login',data)
        .then(res => this.responseAfterlogin(res) )
        .catch(error => console.log(error.response.data))
     }
     responseAfterlogin(res){
         const access_token= res.data.access_token
         const username= res.data.user
         if(Token.isValid(access_token)){
             console.log(access_token)
             AppStorage.store(access_token,username)
         }
     }
     hasToken(){
         const storedToken=AppStorage.getToken();
         if(storedToken){
             return Token.isValid(storedToken) ? true : false
         }
         return false;
     }
     login(){
         return this.hasToken()
     }
     logout(){
         AppStorage.clear()
     }
     name(){
         if(this.login()){
             return AppStorage.getUser()
         }
     }
     id(){
         if(this.login()){
             const payload = Token.payload(AppStorage.getToken())
             return payload.sub
         }
     }
}
export default User=new User()