const userModel = require("../models/user.model");
const { getToken } = require("./token");


exports.adduser_c =async(data)=>{
    try{
        if(!data.email || data.email=='')
    {
        
        return {
            status:'success',
            error:true,
            message:"Invalid Email Address Provided.",
        };
    }
    if(!data.name || data.name=='')
    {
        return {
            status:'success',
            error:true,
            message:"Invalid Name, Please enter valid name."
        };
    }
    if(!data.password || data.password=='')
    {
        return {
            status:'success',
            error:true,
            message:"Please Enter valid Password."
        };
    }
    if(!data.mobile || data.mobile=='')
    {
        return {
            status:'success',
            error:true,
            message:"Please Enter valid Mobile Number."
        };
    }
    if(!data.address || data.address=='')
    {
        return {
            status:'success',
            error:true,
            message:"Please Enter valid Address."
        };
    }
    if(!data.pincode || data.pincode=='')
    {
        return {
            status:'success',
            error:true,
            message:"Please Enter valid Pin Code."
        };
    }
    if(!data.gender || data.gender=='')
    {
        return {
            status:'success',
            error:true,
            message:"Please Select gender."
        };
    }
    if(!data.cpassword || data.cpasswrod=='' || data.cpassword!=data.password)
    {
        return {
            status:'success',
            error:true,
            message:"Invalid confirm password"
        }
    }
    const check=await userModel.findOne({email:data.email});
    if(check)
    {
        return {
            status:'success',
            error:true,
            message:'Email address is already registered. Please login to your account.'
        }
    }
    const user = {
        name: data.name,
        email: data.email,
        password: data.password,
        address:data.address,
        mobile:data.mobile,
        pincode:data.pincode
    }
        const result = await userModel.create(user);
        if(result){
            const token = await getToken(data);
            return {
                status:'success',
                error:false,
                message:token
            };
        }
        else{
            return {
                status:'success',
                error:false,
                message:'Error in creating new user in database.'
            };
        }
    }
    catch(error){
        console.log(`Exception in adduser_c : ${error}`);
        return {
            status:'error',
            error:false,
            message:'Error in creating new user in database.'
        };;
    }   
}