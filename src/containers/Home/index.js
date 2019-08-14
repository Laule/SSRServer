import React from 'react';
// 同构： 一套React代码在服务器端执行一次，在客户端执行再执行一次。
const Home = () =>{
    return (
        <div>
            <div>Jia Zhi Yu && Liu Yuan Jin</div>
            <button onClick={()=>{alert('hello')}}>
                click me !
            </button>
        </div>
    )
};

export default Home;
