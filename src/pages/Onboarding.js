import Nav from "../Components/nav";

const Onboarding = () => {

    const authToken = true
    return(
        <>
            <div className={"onboarding-page"}>
            <Nav
                minimal={true}
                setShowModal={() => {
                }}
                showModal={false}
                authToken={authToken}
            />
            <div className="button-containers">
            <button>
                I'm Looking <br/>For Work
            </button>

            <button className={"hiring"}>
                I'm Hiring
            </button>

            </div>
        </div>
            </>
    )
}
export default Onboarding