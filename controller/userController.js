// const dbconnect=require('../DbConnection/dbconnection');
const token=require('./token');
const userDBaction=require('../DbConnection/userDBaction');


exports.login = async (req,res,data)=>{
    if(!data.email || data.email=='')
    {
        res.json({
            status:'success',
            error:true,
            message:"Invalid Email Address Provided."
        });
        return;
    }

    if(!data.password || data.passwrod=='')
    {
        res.json({
            status:'success',
            error:true,
            message:"Please provide valid password "
        });
        return;
    }

    result = await userDBaction.validateLoginData(data.email);
    if(result.length>=1)
    {
        if(result[0].password==data.password)
        {
            const newtoken=await token.getToken({email:data.email,password:data.password});
            res.json({
                status:'success',
                error:false,
                message:'Login Successfull.',
                token:newtoken
            });
        }
        else{
            res.json({
                status:'success',
                error:true,
                message:'Invalid Password'
            });
        }
    }
    else{
        res.json({
            status:'success',
            error:true,
            message:'Email is not registered with us.'
        });
    }
    console.log('Result Sent');
    // res.json({
    //     error:false,
    //     message:'Login Success'
    // })
}

exports.adduser = async (req,res,data)=>{
    if(!data.email || data.email=='')
    {
        
        res.json({
            status:'success',
            error:true,
            message:"Invalid Email Address Provided.",
        });
        return;
    }
    if(!data.name || data.name=='')
    {
        res.json({
            status:'success',
            error:true,
            message:"Invalid Name, Please enter valid name."
        });
        return;
    }
    if(!data.password || data.password=='')
    {
        res.json({
            status:'success',
            error:true,
            message:"Please Enter valid Password."
        });
        return;
    }
    if(!data.mobile || data.mobile=='')
    {
        res.json({
            status:'success',
            error:true,
            message:"Please Enter valid Mobile Number."
        });
        return;
    }
    if(!data.address || data.address=='')
    {
        res.json({
            status:'success',
            error:true,
            message:"Please Enter valid Address."
        });
        return;
    }
    if(!data.pincode || data.pincode=='')
    {
        res.json({
            status:'success',
            error:true,
            message:"Please Enter valid Pin Code."
        });
        return;
    }
    if(!data.gender || data.gender=='')
    {
        res.json({
            status:'success',
            error:true,
            message:"Please Select gender."
        });
        return;
    }
    if(!data.cpassword || data.cpasswrod=='' || data.cpassword!=data.password)
    {
        res.json({
            status:'success',
            error:true,
            message:"Invalid confirm password"
        });
        return;
    }
    const check=await userDBaction.checkDuplicateEmail(data.email);
    if(check.length>=1)
    {
        res.json({
            status:'success',
            error:true,
            message:'Email address is already registered. Please login to your account.'
        })
    }
    else{
    const result = await userDBaction.insertUser(data);
    if(result)
    {
        const message = await token.getToken(data);
        console.log(`Message : ${message}`);
        res.json({
            status:'success',
            error:false,
            message: message
        });
    }
    else{
        res.json({
            status:'error',
            error:true,
            message:'Error in creating user'
        });
        return;
    }
}
}