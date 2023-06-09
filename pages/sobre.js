import Image from "next/image";

import styles from '../styles/about.module.css';

export default function Sobre() {
    return(
        <div className={styles.about}>
            <h1>Sobre</h1>
            <p>Lorem, algo</p>
            <Image src="/images/charizard.png" width="300" height="300" alt="charizard"/>
        </div>
    )
}