import React from 'react'
import { useState, useRef } from 'react'
import '../Right/Rightcss.css'
function Rightjs() {
  let [nameerr, setnameerr]=useState(false);
  let [usernameerr, setusernameerr]=useState(false);
  let [mailerr, setmailerr]=useState(false);
  let [mobileerr, setmobileerr]=useState(false);
  let [checkboxerr, setcheckboxerr]=useState(false);
  let [name, setname]=useState("");
  let [username, setusername]=useState("");
  let [email, setemail]=useState("");
  let [mob, setmob]=useState("");
  let [check, setcheck]=useState(false);
  let inputref=useRef();
  let [count, setcount]=useState(0);
 function signupfn()
 {
   let namedata=name.trim();
   let nameflag=0;
   
    for(let i=0; i<namedata.length; i++)
   {
    if(!((namedata[i]>='a' && namedata[i]<='z') || (namedata[i]>='A' && namedata[i]<='Z') || (namedata[i]<=' ')))
    {
      nameflag=1;
      setnameerr(true);
      break;
    }
   }
   if(namedata.length===0)
   {
    nameflag=1;
    setnameerr(true);
   }
   if(nameflag===0)
   {
    setnameerr(false);
   }
  
  let usernameflag=0;
   console.log("name check done")
 
    namedata=username.trim();
    
     for(let i=0; i<namedata.length; i++)
    {
     if(!((namedata[i]>='a' && namedata[i]<='z') || (namedata[i]>='A' && namedata[i]<='Z') || (namedata[i]<='9' && namedata[i]>='0')))
     {
      usernameflag=1;
       setusernameerr(true);
       break;
     }
    }
    if(namedata.length===0)
   {
    usernameflag=1;
    setusernameerr(true);
   }
    if(usernameflag===0)
    {
      setusernameerr(false);
    }
   let mailflag=0;
   if(!(email.trim().match((/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))))
    {
      setmailerr(true);
      mailflag=1;
      console.log("mail check done");
    }
    if(mailflag===0)
    {
      setmailerr(false);
    }
    let mobflag=0;
    if(!(mob.length===10))
      {
        setmobileerr(true);
        mobflag=1;
        console.log("mob check done");
       
      }
      if(mobflag===0)
      {
        setmobileerr(false);
      }

      let checkboxflag=0;
      if(!check)
      {setcheckboxerr(true);
        checkboxflag=1;
        
      }
      if(checkboxflag===0)
      {
        setcheckboxerr(false);
      }
      
      if(!(nameflag || usernameflag || mailflag || mobflag || checkboxflag))
      {
        console.log(count);
        let dstorekey="p"+count.toString();
        localStorage.setItem(dstorekey, [name,username, email, mob]);
        setcount(count+1);
        setname("");
        setusername("");
        setemail("");
        setmob("");
        setcheck(false);
        inputref.current.checked=false;
        console.log(inputref.current.value);
        setnameerr(false);
        setusernameerr(false);
        setmailerr(false);
        setmobileerr(false);
        setcheckboxerr(false);
      }

   
   
 }
  return (
    <>
        <div className='righth1'>Super app</div>
        <div className='righth2'>Create your new account</div>
        <div className='mail'>Email</div>
        <div className='google' >Google</div>
        <div className="separator">|</div>
        <div className="formelements">
            <input type="text" placeholder='Name' value={name} onChange={(e)=>{setname(e.target.value)}}/>
            <input type="text" placeholder='UserName'  value={username}  onChange={(e)=>{setusername(e.target.value)}}/>
            <input type="email" placeholder='Email'  value={email}  onChange={(e)=>{setemail(e.target.value)}}/>
            <input type="number" placeholder='Mobile'  value={mob}  onChange={(e)=>{setmob(e.target.value)}}/>
        </div>
        <div className='tickmark'> 
        <input ref={inputref} type="checkbox" name="check" id="check" value={check} onClick={(e)=>{setcheck(!check)}}/>
        <div className='checkmark'>Share my registration data with Superapp</div>
        </div>
        <button className='signupbtn' onClick={signupfn}>SIGN UP</button>
        <div className="terms">By clicking on Sign up. you agree to Superapp <span className="terms2">Terms and Conditions of Use</span> </div>
        <div className="policy">To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span className="policy2">Privacy Policy</span> </div>
        {nameerr && (<div className="errname">Only alphabets</div>)}
        {usernameerr && (<div className="errusername">Only alaphanumeric</div>)}
        {mailerr && (<div className="errmail">Please enter a valid email</div>)} 
        {mobileerr && (<div className="errmobile">Please enter 10 digits</div>)} 
        {checkboxerr && (<div className="errcheckbox">Please click on the checkbox</div>)} 
       
    </>
  )
}

export default Rightjs