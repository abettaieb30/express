const express= require('express');
const app= express();
const d = new Date( Date.now());
/////////////////
app.listen ( 5000 , ( err )=>
  err ? console.log ( err ) : console.log ( ' server is running on port 5000 ' )
) ;
/////////////////
const middleware = (req , res , next) => {
  const day =d.getDay();
  const hour =d.getHours();
  if ((day >=1 && day<=6 )  && (hour >=09 && hour<=17 )  === true ){
      next();
       }
      else {
      return res.send('you are not authorizied !') ;
  };
  
};
app.use(middleware) ;
////////////////////////

app.get('/Home',(req,res)=>{
  res.sendFile(__dirname+'/static/Home.html')
});

app.get('/OurServices',(req,res)=>{
  res.sendFile(__dirname+'/static/OurServices.html')
});

app.get('/Contact',(req,res)=>{
  res.sendFile(__dirname+'/static/Contact.html')
});

app.get('/style.css',(req,res)=>{
  res.sendFile(__dirname+'/static/style.css')
});