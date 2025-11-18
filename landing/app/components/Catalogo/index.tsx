import type { Catalogo } from "@/types/catalogo/Catalogo";
import Image from "next/image";

type Props = {
    catalogo : Catalogo
}


const Catalogo = ({catalogo} : Props) => {
 




    return(
        <section>
            <div>
                <div>
                   <Image src={catalogo.img} alt={catalogo.nome} />
                   <div>
                    {catalogo.nome}
                    <button>{catalogo.btn}</button>
                   </div>
                </div>
                 <div>
                   <Image src={catalogo.img} alt={catalogo.nome} />
                   <div>
                    {catalogo.nome}
                    <button>{catalogo.btn}</button>
                   </div>
                </div>
                 <div>
                   <Image src={catalogo.img} alt={catalogo.nome} />
                   <div>
                    {catalogo.nome}
                    <button>{catalogo.btn}</button>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Catalogo