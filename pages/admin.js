import axios from 'axios'
import React from 'react'

export default function Admin() {
    function checkLogin(){
        axios.get('/api/isLogin')
        .then(res => {
            if(res.status === 200 && res.data.name){
                //로그인
            } else{
                //로그인안댐
            }
        })

    }

    useEffect(()=>{
        checkLogin();
    },[])
    return <>admin</>;
}
