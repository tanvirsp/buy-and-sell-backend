const jwt=require('jsonwebtoken');

exports.EncodeToken=(email, role, user_id)=>{
    
    const KEY=process.env.ACCESS_TOKEN;
    const EXPIRE={expiresIn: '1d'}
    const PAYLOAD={email:email, role: role, user_id:user_id}
    return jwt.sign(PAYLOAD,KEY,EXPIRE)
}




exports.DecodeToken=(token)=>{
    try {
        const KEY=process.env.ACCESS_TOKEN;
        return jwt.verify(token,KEY)
    }
    catch (e) {
        return null
    }
}