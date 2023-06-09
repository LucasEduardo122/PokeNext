import styles from "../../styles/card.module.css";

import Image from "next/image";
import Link from "next/link";

export default function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <Image
        src={`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.url.split("/")[6]}.png`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.url.split("/")[6]}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.url.split("/")[6]}`}>
        <a className={styles.btn}>Detalhes</a>
      </Link>
    </div>
  );
}