// Sirve para que al hacer click en un link, cuando cargue esa pagina nos lleve al principio siempre.
// Como usar:
// En cada Link de su pagina utilice el evento onClick y pasele handleLinkClick.
// Ejemplo: <Link to="/home" onClick={handleLinkClick}> INICIO </Link>

export const useLinkScroll = () => {
    const handleLinkClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return {
        handleLinkClick,
    };
};
