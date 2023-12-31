import Nav from "../Components/nav";
import {useState} from "react";
import AuthModal from "../Components/AuthModal"

const Home = () => {
    const [showModal, setShowModal] = useState(false)
    const authToken = false
    const [isSignUp,setIsSignUp] = useState(true)

    const handleClick = () => {
        console.log('clicked')
        setShowModal(true)
        setIsSignUp(true)
    }
    return (
        <div className={"overlay"}>
            <Nav authToken={authToken}
                 setShowModal={setShowModal}
                 showModal={showModal}
                 setIsSignUp={setIsSignUp}
            />
            <div className="home">
                <h1 className={"primary-title"}>Find Workers / Get Hired</h1>
                <button className="primary-button" onClick={handleClick}>
                    {authToken ? 'Signout' : 'Create Account'}
                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>
                )}
            </div>
        </div>
    )
}
export default Home