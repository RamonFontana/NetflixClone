import React from 'react';
import style from '../../styles/Header.module.scss'

export default ({black}) => {
    return (
        <header className={`${style.header} ${black && style.black}`}>
            <div className={style.headerLogo}>
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="" />
                </a>
            </div>
            <div className={style.headerUser}>
                <a href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7t8L5Dt5Mh7la3Upv6L7bSRkUxLBkELmU84CSLcUbkY64AevRv5nthfdMup6aG38WMlY&usqp=CAU" alt="" />
                </a>
            </div>
        </header>
    );
}