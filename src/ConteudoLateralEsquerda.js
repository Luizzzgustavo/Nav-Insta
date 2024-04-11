import logo from './imagens/images.png';
import Menu from './TextMenu';
import './ConteudoLateralEsquerda.css'
import { PiHouseFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";

export default function ConteudoLateralEsquerda() {
    return (
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo' />
            <ul>
                <Menu icon={<PiHouseFill style={{
                    fontSize: '30px',
                    position: 'relative',
                    top: '5px',
                    left: '-15px'
                }}/>} nome="Home"/>

                <Menu icon={<FaSearch 
                style={{
                    fontSize: '30px',
                    position: 'relative',
                    top: '5px',
                    left: '-15px'
                }}/>} nome="Buscar" />
                
                <Menu icon={<FaFacebookMessenger
                style={{
                    fontSize: '30px',
                    position: 'relative',
                    top: '5px',
                    left: '-15px'
                }}
                />} nome="Mensagem" />

                <Menu icon={<FaRegHeart
                style={{
                    fontSize: '30px',
                    position: 'relative',
                    top: '5px',
                    left: '-15px'
                }}
                />} nome="Notificação" />

                <Menu icon={<SiAddthis
                style={{
                    fontSize: '30px',
                    position: 'relative',
                    top: '5px',
                    left: '-15px'
                }}
                />} nome="Criar" />

            </ul>
        </div>
    )
}

// export default ConteudoLateralEsquerda;