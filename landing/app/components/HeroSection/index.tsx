import styles from "./HeroSection.module.css";
import Image from "next/image";
import Vitoria from "./icon/Vitoria.png";
import Logo from "./icon/logo-Photoroom.png"
import type { Hero } from "@/types/heros/Hero";

type Props = {
    hero: Hero;
};


const HeroSection = ({ hero }: Props) => {
    return (
        <section className={styles.hero}>
            <Image src={Logo}
                alt="Conto das Pratas"
                className={styles.logo} />

            <div className={styles.content}>
                <h1 className={styles.text}>Há Uma Nova História. Conheça o Conto de Pratas!</h1>
                <button className={styles.btnText}>
                    {hero.btnText}
                </button>
            </div>

            <div className={styles.person}>
                <Image
                    src={Vitoria}
                    alt="Modelo"
                    fill
                    style={{ objectFit: "contain" }}
                    priority
                />
            </div>

        </section>
    );
};

export default HeroSection;