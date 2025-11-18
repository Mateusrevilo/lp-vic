import { Descricao } from "@/types/descricao/Descricao"
import { FaCheck } from 'react-icons/fa';

type Props = {
    descricao: Descricao
    
}

const DescricaoPrata = ({ descricao }: Props) => {

    return (
       <div className="shadow-xl/30 w-80 p-8 rounded-md" key={descricao.id}>
            <div>
                <h3 className="p-2 text-center">{descricao.titulo}</h3>
                <div>
                    <ul>
                        <li className="flex justify-start "><FaCheck className="text-green-500 w-4 h-4 mt-1 shrink-0 mr-2" />{descricao.texto}</li>
                        <li className="flex justify-start "><FaCheck className="text-green-500 w-4 h-4 mt-1 shrink-0 mr-2" />{descricao.texto2}</li>
                        <li className="flex justify-start "><FaCheck className="text-green-500 w-4 h-4 mt-1 shrink-0 mr-2" />{descricao.texto3}</li>
                        <li className="flex justify-start "><FaCheck className="text-green-500 w-4 h-4 mt-1 shrink-0 mr-2" />{descricao.texto4}</li>
                        <li className="flex justify-start "><FaCheck className="text-green-500 w-4 h-4 mt-1 shrink-0 mr-2" />{descricao.texto5}</li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default DescricaoPrata