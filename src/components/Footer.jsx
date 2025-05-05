import Logo from "./Logo"

import logoFooter from "../assets/logo-footer.svg";
import logoIntagram from "../assets/instagram.svg";
import logoFaceBook from "../assets/facebook.svg";
import logoTwitter from "../assets/twitter.svg";

const Footer = () => {
    return (
        <footer className="footer" >
            <div className="container mx-auto px-3 py-3">

                <div className="grid mx-6">
                    <div className="col-12 lg:col-3 mb-4  lg:mb-0">
                        <Logo logo={logoFooter} />

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laudantium a, tempore quibusdam officia asperiores dolore consectetur architecto odit exercitationem sint fuga, facere in nesciunt aut, reiciendis dicta doloremque aspernatur!</p>

                        <div className="flex gap-4" >
                            <a href="#">
                                <img src={logoIntagram} alt="" />
                            </a>

                            <a href="#">
                                <img src={logoFaceBook} alt="" />
                            </a>
                            <a href="#">
                                <img src={logoTwitter} alt="" />
                            </a>

                        </div>
                    </div>
                    <div className="col-12 lg:col-9">
                        <div className="grid">
                            <div className="col-12 md:col-4 mb-4 md:mb-0">
                                <h3 className="text-xl font-semibold mb-3 pb-2 relative">
                                    Informação
                                </h3>

                                <ul className="list-none p-0 m-0 text-gray-300">
                                    <li className="mb-2">
                                        <a className="cursor-pointer">
                                            Sobre Drip Store
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="cursor-pointer">
                                            Segurança
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="cursor-pointer">
                                            Wishlist
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="cursor-pointer">
                                            Blog
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="cursor-pointer">
                                            Trabalhe conosco
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="cursor-pointer">
                                            Meus Pedidos
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 md:col-4 mb-4 md:mb-0">
                                <h3 className="text-xl font-semibold mb-3 pb-2 relative">
                                    Categorias
                                </h3>

                                <ul className="list-none p-0 m-0 text-gray-300">
                                    <li className="mb-2">
                                        <a className="cursor-pointer">
                                            Camisetas
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="cursor-pointer">
                                            Calças
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="cursor-pointer">
                                            Bonés
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="cursor-pointer">
                                            Headphones
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className="cursor-pointer">
                                            Tênis
                                        </a>
                                    </li>

                                </ul>
                            </div>
                            <div className="col-12 md:col-4">
                                <h3 className="text-xl font-semibold mb-3 pb-2 relative">
                                    Contato
                                    <span className="block absolute bottom-0 left-0 w-2rem h-2px bg-primary"></span>
                                </h3>
                                <ul className="list-none p-0 m-0">
                                    <li className="mb-2 text-gray-300 flex align-items-center">
                                        <i className="pi pi-map-marker mr-2"></i>
                                        Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
                                    </li>
                                    <li className="mb-2 text-gray-300 flex align-items-center">
                                        <i className="pi pi-envelope mr-2"></i>
                                        contato@digitalstore.com
                                    </li>
                                    <li className="mb-2 text-gray-300 flex align-items-center">
                                        <i className="pi pi-phone mr-2"></i>
                                        (85) 3051-3411
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="border-top-1 border-gray-800 mt-2 pt-2 text-center">
                    <p className="text-gray-400 text-sm">&copy; 2023 Digital College</p>
                </div>
            </div>

        </footer>
    );
}

export default Footer;