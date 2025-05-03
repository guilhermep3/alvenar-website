import { containerStyle } from "@/utils/container-style"
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import { Logo } from "./logo"
import { Button } from "./ui/button"

export const Footer = () => {

   return (
      <footer className="bg-zinc-800">
         <div className={containerStyle + ' flex flex-col justify-center items-center gap-14'}>
            <div className="flex flex-col sm:flex-row justify-between w-full gap-10">
               <div className="flex-1 flex flex-col justify-center items-start gap-4">
                  <Logo />
                  <p>emailalvenar@email.com</p>
                  <Button label="Contato" size={1} link="/contact" />
               </div>
               <div className="flex-1">
                  <p className="text-lg font-bold mb-4">Páginas</p>
                  <ul className="flex flex-col gap-2">
                     <li className="hover:underline w-fit">
                        <Link href={'/'}>Início</Link>
                     </li>
                     <li className="hover:underline w-fit">
                        <Link href={'/about'}>Sobre</Link>
                     </li>
                     <li className="hover:underline w-fit">
                        <Link href={'/shop'}>Loja</Link>
                     </li>
                     <li className="hover:underline w-fit">
                        <Link href={'/contact'}>Contatos</Link>
                     </li>
                  </ul>
               </div>
               <div className="flex-1">
                  <p className="text-lg font-bold mb-4">Redes sociais</p>
                  <ul className="flex flex-col gap-2">
                     <li className="hover:underline w-fit">
                        <Link href={'#'} className="flex gap-2">
                           <FontAwesomeIcon icon={faInstagram} size="1x" className="text-[var(--primary)]" />Instagram</Link>
                     </li>
                     <li className="hover:underline w-fit">
                        <Link href={'#'} className="flex gap-2">
                           <FontAwesomeIcon icon={faFacebook} size="1x" className="text-[var(--primary)]" />Facebook
                        </Link>
                     </li>
                     <li className="hover:underline w-fit">
                        <Link href={'#'} className="flex gap-2">
                           <FontAwesomeIcon icon={faInstagram} size="1x" className="text-[var(--primary)]" />Instagram
                        </Link>
                     </li>
                     <li className="hover:underline w-fit">
                        <Link href={'#'} className="flex gap-2">
                           <FontAwesomeIcon icon={faInstagram} size="1x" className="text-[var(--primary)]" />Instagram
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="flex justify-center items-center gap-4">
               <p className="text-sm text-zinc-300">© Copyright</p>
               <p className="text-sm text-zinc-300">Desenvolvido por <a href="https://github.com/guilhermep3" target="_blank" className="underline">Guilherme Pereira</a>
               </p>
               <Link href={'https://www.linkedin.com/in/guilherme-pereira3/'} target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-blue-600" />
               </Link>
            </div>
         </div>
      </footer>
   )
}