import React from "react";
import styles from '../styles/Home.module.css'
import Header from "./components/header";
import MainContent from "./components/main";
import Footer from "./components/footer";

function Main() {

    return (
        <div className={styles.container}>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    )
}

export default React.memo(Main)