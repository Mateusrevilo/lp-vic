import { Catalogo } from "@/types/catalogo/Catalogo"
import Image from "next/image"


type Props = {
    catalogo: Catalogo
}

const ProdutoCatalogo = ({ catalogo }: Props) => {
    return (
        <div className="shadow-xl/20 p-4 w-48 h-80 justify-center ">
            <div key={catalogo.id}>
                <Image
                    src={catalogo.img}
                    alt={catalogo.nome}
                    width={300}
                    height={300}
                />
                <div>
                    {catalogo.nome}
                </div>
                <button>
                    {catalogo.btn}
                </button>
            </div>
        </div>
    )
}

export default ProdutoCatalogo