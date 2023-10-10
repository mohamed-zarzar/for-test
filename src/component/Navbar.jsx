import React, { useState } from 'react'
import style from '../component/navbar.module.css'




const lists = [
    {
        title :'momo',
        text: "mohamed is coming due to eating some thing lol"
    },
    {
        title :'lol',
        text: "mohamed is coming due to eating some thing lol"
    },
    {
        title :'dad',
        text: "mohamed is coming due to eating some thing lol"
    },
];


const OneList =  (list) => {
    const [isShow,setIsShow] = useState(false);
    const handelShow = () => {
        setIsShow(e => !e);
    }
    return (
        <li className={style.singleList} onClick={handelShow}>
            {list.title}
            <p className={isShow ?style.parInListActive:style.parInList}>{list.text}</p>
        </li>
    )
} 

const Navbar = (props) => {
    const {isOpen} =props;
    return (
        <div className={isOpen ? style.mainActive : style.mainNotActive}>
            <h2 className={style.title}>Navbar</h2>
            <ul className={style.list}>
                {
                    lists.map((list,index)=>(
                        <OneList {...list} key={index}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar