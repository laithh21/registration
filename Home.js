import React, { Component } from "react";
class Home extends Component {
  state = {
      list:[{}];
  };

var  mail=document.getElementById(mail);
var name=document.getElementById(name);
var phone=document.getElementById(phone);
var address=document.getElementById(address);
var submit=document.getElementById(submit);
var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


  submit.handleName=(event)=>{
      if(name!==''|| name!== null){
          this.submit;
      }else{
         name.innerHTML="enter your name";
      }
  }
  submit.handlePhone=(event)=>{
      if(phone===[0-9]){
          this.submit;
      }else{
         phone.innerHTML="enter your name";
      }
  }
  submit.handleAddress=(event)=>{
      if(address!==''){
          this.submit;
      }else{
         address.innerHTML="enter toyr address";
      }
  }
  submit.handleMail=(event)=>{
      if(mail.match(pattern)){
          this.submit;
      }else{
          mail.innerHTML='enter your valid email';
      }
  }

  render() {
    return (
      <div className="home">
        <div className="name">
          <h4>your name</h4>
          <input></input>
        </div>
        <div className="mail">
          <h4>e.mail</h4>
          <input></input>
        </div>
        <div className="phone">
          <h4>number phone</h4>
          <input></input>
        </div>
        <div className="address">
          <h4>address</h4>
          <input></input>
        </div>
        <div className="notes">
          <h4>noted</h4>
          <input></input>
        </div>
        <div className="done">
          <button type="button" onClick={this.submit}>
            submit
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
