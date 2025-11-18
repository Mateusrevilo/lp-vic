import HeroSection from "./components/HeroSection";
import DescricaoPrata from "./components/Cards/DescricaoPrata";
import DescricaoSemiJoia from "./components/Cards/DescricaoSemiJoia";
import DescricaoBijuteria from "./components/Cards/DescricaoBijuteria";
import Catalogo from "./components/Catalogo";


export default function Home() {

  //Aqui estão os dados da HeroSection
  const contentHero = {
    title: "Conto de Pratas",
    subtitle: "Pratas e Acessórios",
    btnText: "Compre Agora"
  }

  //Aqui estão os cards de diferenca entre pratas e semijoias

  //card de Pratas
  const cardPrata = {
    id: 0,
    titulo: "Pratas",
    texto: "Durabilidade e Investimento de Longo Prazo",
    texto2: "Brilho e Elegância Atemporal",
    texto3: "É Hipoalergênica",
    texto4: "Extrema Versatilidade",
    texto5: "Acessibilidade como Joia"
  }

  //card de semiJoia

  const cardSemiJoia = {
    id: 1,
    titulo: "Semijoias",
    texto: "Versatilidade para Combinar",
    texto2: "Hipoalergenicidade",
    texto3: "Potencial de Revitalização (Limpeza)",
    texto4: "Acessibilidade com Status de Joia",
    texto5: "Durabilidade Estrutural"
  }

  // Card de BiJuteria

  const cardBijuteria = {
    id: 2,
    titulo: "Bijuterias",
    texto: "Durabilidade Extremamente Baixa",
    texto2: "Risco Alto de Alergias e Irritações na Pele",
    texto3: "Escurecimento Rápido e Irreversível",
    texto4: "Falta de Sustentabilidade",
    texto5: "Aparência e Acabamento Inferiores"
  }


  const aneis = [
    {
      id: 0,
      img: "/assets/aneis/concha-com-zircônia-branca.jpg",
      nome: "Concha com Zircônia Branca",
      btn: "Compre agora!"
    },
    {
      id: 1,
      img: "/assets/aneis/folhas-vazadas.jpg",
      nome: "Folhas Vazadas",
      btn: "Compre agora!"
    },
    {
      id: 2,
      img: "/assets/aneis/mola-ponto-de-luz.jpg",
      nome: "Mola Ponto de Luz",
      btn: "Compre agora!"
    }
  ]


















  return (
    <div>
      <HeroSection hero={contentHero} />
      <section>
        <h2 className="text-center p-4">Excelência e Qualidade</h2>
        <div className="flex justify-center gap-3 ">
          <DescricaoPrata descricao={cardPrata} />
          <DescricaoSemiJoia descricao={cardSemiJoia} />
          <DescricaoBijuteria descricao={cardBijuteria} />
        </div>
      </section>
      <Catalogo catalogo={aneis} />

    </div>
  );
}
