import { Link } from "react-router-dom"
import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { Badge } from "primereact/badge"
import Logo from "./Logo"
import logoHeader from "../assets/logo-header.svg";
import logoMiniCart from "../assets/mini-cart.svg";

const Header = () => {
    // Logo da loja - usando um placeholder SVG
    const logoUrl = "/logo.png"

    return (
        <header className="top-0 z-5">
            <div className="conteiner mx-auto px-3">
                <div className="flex flex-column">

                    <div className="flex align-items-center justify-content-between py-3 mx-6">
                        <div className="">
                            <Logo logo={logoHeader} />
                        </div>

                        <div className="hidden md:block flex-grow-1 px-4 max-w-30rem mx-auto">
                            <div className="p-input-icon-right w-full ">

                                <i className="pi pi-search text-500 opacity-30"

                                    style={{ top: "70%", transform: "translateY(-50%)", right: "0.75rem", fontSize: '1.5rem', color: "var(--light-gray)" }}
                                ></i>

                                <InputText
                                    placeholder="Pesquisar produto..."
                                    className="w-full border-round-lg bg-light-gray"
                                />

                            </div>
                        </div>

                        <div className="flex align-items-center gap-3">
                            <div className="hidden md:flex align-items-center gap-3">

                                <Link to="/register" className="no-underline">
                                    <span className="text-gray hover:text-primary border-bottom-1">Cadastre-se</span>
                                </Link>

                                <Link to="/login">
                                    <Button
                                        label="Entrar"
                                        className="p-button-primary"
                                        style={{ height: "36px", paddingLeft: "1.25rem", paddingRight: "1.25rem" }}
                                    />
                                </Link>
                            </div>

                        </div>

                        <div className="relative">
                            <Button
                                className="p-button-text p-button-rounded"

                                aria-label="Carrinho"                                
                                style={{ height: "36px", width: "36px", padding: "0.5rem" }}
                            >
                                <img src={logoMiniCart} alt="Carrinho" />
                            </Button>
                        </div>
                    </div>


                </div>
            </div>
        </header>
    )
}

export default Header
