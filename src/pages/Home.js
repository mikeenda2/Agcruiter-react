import Nav from "../Components/nav";
import {useState} from "react";
import AuthModal from "../Components/AuthModal"

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const authToken = false

    const handleClick = () => {
        console.log('clicked')
        setShowModal(true)
    }
    return (
        <div className={"overlay"}>
            <Nav authToken={authToken} setShowModal={setShowModal} showModal={showModal}/>
            <div className="home">
                <h1>Swipe Right </h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal}/>
                )}
            </div>
        </div>
    )
}
export default Home