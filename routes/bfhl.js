const express=require('express');
const router=express.Router();

const fullName="john_doe";
const dob="17091999";
const email="john@xyz.com";
const rollNumber="ABCD123";

router.post('/',(req,res)=>{
  try{
    const {data}=req.body;
    if(!data||!Array.isArray(data)){
      return res.status(400).json({is_success:false,error:"Invalid data format"});
    }

    const even_numbers=[];
    const odd_numbers=[];
    const alphabets=[];
    const special_characters=[];
    let sum=0;
    let concatString="";

    data.forEach(item=>{
      const strItem=String(item);
      if(/^\d+$/.test(strItem)){
        const num=parseInt(strItem);
        sum+=num;
        if(num%2===0)even_numbers.push(strItem);
        else odd_numbers.push(strItem);
      }else if(/^[a-zA-Z]+$/.test(strItem)){
        alphabets.push(strItem.toUpperCase());
        concatString+=strItem;
      }else{
        special_characters.push(strItem);
      }
    });

    const reversedConcat=concatString
      .split('')
      .reverse()
      .map((ch,i)=>(i%2===0?ch.toUpperCase():ch.toLowerCase()))
      .join('');

    res.status(200).json({
      is_success:true,
      user_id:`${fullName.toLowerCase()}_${dob}`,
      email,
      roll_number:rollNumber,
      odd_numbers,
      even_numbers,
      alphabets,
      special_characters,
      sum:String(sum),
      concat_string:reversedConcat
    });

  }catch(err){
    res.status(500).json({is_success:false,error:err.message});
  }
});

module.exports=router;
