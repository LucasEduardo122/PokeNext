import Card from "../pages/components/Card";
import Image from 'next/image'
import styles from './styles/home.module.css'

export async function getStaticProps() {
    const maxPokemons = 251;
    const api = "https://pokeapi.co/api/v2/pokemon/"

    const dados = await fetch(`${api}/?limit=${maxPokemons}`);

    const data = await dados.json();

    data.results.forEach((item, index) => {
      item.id = index + 1;
    });

    return {
      props: {
        pokemons: data.results,
      }
    }
}

export default function Home({pokemons}) {
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.url.split("/")[6]} pokemon={pokemon} />
        ))}
      </div>
    </>
  )
}
