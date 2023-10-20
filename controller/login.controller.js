const userModel = require("../models/user.model");
const token=require("./token");

exports.login_c = async(data)=>{
    try{
    if(!data.email || data.email=='')
    {
        return {
            status:'success',
            error:true,
            message:"Invalid Email Address Provided."
        };
    }

    if(!data.password || data.passwrod=='')
    {
        return {
            status:'success',
            error:true,
            message:"Please provide valid password "
        };
    }

    const result = await userModel.findOne({
        email:data.email
    });
    console.log(result);
    if(result)
    {
        if(result.password == data.password)
        {
            const newtoken=await token.getToken(result);
            return {
                status:'success',
                error:false,
                message:'Login Successfull.',
                token:newtoken
            };
        }
        else{
            return {
                status:'success',
                error:true,
                message:'Invalid Password'
            };
        }
    }
    else{
        return {
            status:'success',
            error:true,
            message:'Email is not registered with us.'
        };
    }}
    catch(error){
        console.log(`Exception in loagin_C ${error}`);
        return {
            status:'error',
            error:true,
            message:'Exception Occured.'
        }
    }
}