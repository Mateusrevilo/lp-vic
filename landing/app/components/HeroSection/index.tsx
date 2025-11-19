import styles from "./HeroSection.module.css";
import Image from "next/image";
import Vitoria from "./icon/Vitoria.png";
import Logo from "./icon/logo-Photoroom.png";
import type { Hero } from "@/types/heros/Hero";

type Props = { hero: Hero };

const HeroSection = ({ hero }: Props) => {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <Image
                    src={Logo}
                    alt="Conto das Pratas"
                    className={styles.logo}
                    priority
                />

                <h1 className={styles.text}>Há Uma Nova História</h1>
                <h1 className={styles.text}>Conheça o Conto de Pratas!</h1>

                <button className={styles.btnText}>
                    {hero.btnText}
                </button>
            </div>

            <Image
                src={Vitoria}
                alt="Modelo"
                className={styles.person}
                priority
            />
        </section>
    );
};

export default HeroSection;