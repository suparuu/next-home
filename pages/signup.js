
import { Button, ButtonToolbar, Container, FormControl, InputGroup } from "react-bootstrap";
import Image from "next/image";
import sign from "@/styles/sign.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useRouter } from "next/router";


export default function Signup() {
const router = useRouter();

    function goToWrite(e){
        console.log('asd')
        router.push({
            pathname: "./write"
        }
        )
    }
    function goBack(){
      router.back();
    }

    function sendData(e){
      e.preventDefault()
      console.log(e.target.id.value)
      console.log(e.target.pw.value)


    }
    return(
      //   <section className={sign.signup}>
      //   <div className={sign.imgbox}>
      //       <Image src='./arrowback.svg'
      //           width={24}
      //           height={24}></Image>
      //   </div>
      //   <div className={sign.signupflexbox01}>
      //     <h2 className={sign.textcenter}>로그인</h2>
      //  <form >
      //     <div className={sign.inputflexbox}>
      //       <input className={sign.inputborder} placeholder="   이름" name="name"></input>
      //     </div>
      //     <div className={sign.inputflexbox}>
      //       <input className={sign.inputborder} placeholder="   아이디" name="id"></input>
      //     </div>

      //       <div className={sign.loginbutton}>
      //       <input className={sign.signupbutton} style={{background : "#D9D9D9" , color : "#fff" }} type="submit" value="로그인" />
      //     <input className={sign.signupbutton}
      //      style={{background : "#1E1E1E" , color : "#fff" }}
      //      type="submit"
      //      value="이메일로 회원가입"
      //      onClick={()=>goToWrite()} />
      //     <input className={sign.signupbutton} type="submit" value="카카오로 시작하기" />
      //       </div>
      // </form>
      //   </div>
      //   </section>

      <section className={sign.signup}>
      <div className={sign.imgbox}>
          <Image src='./arrowback.svg'
              width={24}
              height={24}
              onClick={()=>{goBack()}}></Image>
      </div>
      
      <div className={sign.signupflexbox01}>
        <h2 className={sign.textcenter}>로그인</h2>
     <form onSubmit={sendData}>
      <div className={sign.helplz}>
        <div className={sign.inputflexbox}>
          <input className={sign.inputborder} placeholder="   아이디" name="id"></input>
        </div>
        <div className={sign.inputflexbox}>
          <input className={sign.inputborder} placeholder="   비밀번호" name="pw"></input>
        </div>

          <div className={sign.loginbutton}>
          <input className={sign.signupbutton} style={{background : "#1e1e1e" , color : "#fff" }} type="submit" value="로그인" />
        <input className={sign.signupbutton}
         style={{background : "#d9d9d9"  }}
         type="button"
         value="이메일로 회원가입"
         onClick={()=>goToWrite()} />
        <input className={sign.signupbutton} type="button" value="카카오로 시작하기" />
          </div>
          </div>
    </form>
      </div>
      </section>

    )
}