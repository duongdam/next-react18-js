import React from 'react';
import styles from "../../../styles/Home.module.css";

function MainContent(props) {
    return (
        <main className={styles.main}>
            This is content profile
        </main>
    );
}

export default React.memo(MainContent);