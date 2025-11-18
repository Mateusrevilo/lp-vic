import type { Catalogo } from "@/types/catalogo/Catalogo";
import ProdutoCatalogo from "../Cards/ProdutoCatalogo";

type Props = {
    catalogo : Catalogo[]
}


const Catalogo = ({catalogo} : Props) => {

    return(
        <section>
            <div>
               <div>
                {catalogo.map((item) =>(<ProdutoCatalogo key={item.id} catalogo={item} />))}
               </div>
              

            </div>
        </section>
    )
}

export default Catalogo