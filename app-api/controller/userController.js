const dbconnect=require('../DbConnection/dbconnection');
const token=require('./token');


exports.adduser = async (req,res,data)=>{
    if(!data.email || data.email=='')
    {
        res.json({
            error:true,
            message:"Invalid Email Address Provided."
        });
        return;
    }
    if(!data.name || data.name=='')
    {
        res.json({
            error:true,
            message:"Invalid Name, Please enter valid name."
        });
        return;
    }
    if(!data.password || data.password=='')
    {
        res.json({
            error:true,
            message:"Please Enter valid Password."
        });
        return;
    }
    if(!data.mobile || data.mobile=='')
    {
        res.json({
            error:true,
            message:"Please Enter valid Mobile Number."
        });
        return;
    }
    if(!data.address || data.address=='')
    {
        res.json({
            error:true,
            message:"Please Enter valid Address."
        });
        return;
    }
    if(!data.pincode || data.pincode=='')
    {
        res.json({
            error:true,
            message:"Please Enter valid Pin Code."
        });
        return;
    }
    if(!data.gender || data.gender=='')
    {
        res.json({
            error:true,
            message:"Please Select gender."
        });
        return;
    }
    if(!data.cpassword || data.cpasswrod=='' || data.cpassword!=data.password)
    {
        res.json({
            error:true,
            message:"Invalid confirm password"
        });
        return;
    }
    const result = await dbconnect.insertUser(data);
    if(result)
    {
        var message = await token.getToken(data);
        console.log(`Message : ${message}`);
        res.json({
            error:false,
            message: message
        });
    }
    else{
        res.json({
            error:true,
            message:'Error in creating user'
        });
        return;
    }
}