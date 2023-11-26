
const Nav = ({authToken, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () =>{
        setShowModal(true)
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className="logo-container">
                <h3><span className={"green"}>Ag</span><span className={"yellow"}>Cruiter</span></h3>
            </div>
            {!authToken && (
                <button
                    className="nav-button"
                    onClick={handleClick}
                    disabled={showModal}
                >
                    Log in
                </button>
            )}
        </nav>
    );
};
export default Nav;