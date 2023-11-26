import Nav from "../Components/nav";
import {useState} from "react";

const OnBoardingFarmers = () => {
    const[formData,setFormData] = useState({
        user_id: '',
        first_name: '',
        last_name:'',
        dob_day: '',
        dob_month: '',
        dob_year: '',
        gender_identity: '',
        street_address: '',
        state: '',
        city: '',
        zipcode: '',
        email: '',
        url1: '',
        about: '',
        certifications: [],
        matches: [],
    })

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
           ...prevState,
            [name] : value
        }))
    }

    const authToken = true;

    console.log(formData)

    const handleSubmit = () => {
        console.log('submitted!');
    }

    return (
        <>
            <div className={"onboardingWorker"}>
            <Nav classname="nav-onboardingFarmers"
                minimal={true}
                setShowModal={() => {
                }}
                showModal={false}
                authToken={authToken}
            />

            <h1> Worker Account Signup </h1>

            <h2> The Boring Stuff ---> 1 / 3 </h2>
                <form onSubmit={handleSubmit}>
            <section>
                <label htmlFor="first_name">First Name</label>
                <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    value = {formData.first_name}
                    required={true}
                    placeholder={"First Name"}
                    onChange={handleChange}
                />
                <label htmlFor="last_name">Last Name</label>
                <input
                    id="last_name"
                    type="text"
                    name="last_name"
                    value = {formData.last_name}
                    required={true}
                    placeholder={"Last Name"}
                    onChange={handleChange}
                />

                <br/>
                <label>Birthday</label>
                <div className="multiple-input-container">
                    <input
                        id="dob_day"
                        type="number"
                        name="dob_day"
                        value = {formData.dob_day}
                        placeholder="DD"
                        required={true}
                        onChange={handleChange}
                    />
                    <input
                        id="dob_month"
                        type="number"
                        name="dob_month"
                        value = {formData.dob_month}
                        placeholder="MM"
                        required={true}
                        onChange={handleChange}

                    />

                    <input
                        id="dob_year"
                        type="number"
                        name="dob_year"
                        value = {formData.dob_year}
                        placeholder="YYYY"
                        required={true}
                        onChange={handleChange}
                    />
                </div>

                <label>Gender:</label>
                <div className="multiple-input-container">
                    <input
                        id="man-gender-identity"
                        type="radio"
                        name="gender_identity"
                        value = {"man"}
                        checked={formData.gender_identity === 'man'}
                        required={true}
                        onChange={handleChange}
                    />
                    <label htmlFor="man-gender-identity">Man</label>
                    <input
                        id="woman-gender-identity"
                        type="radio"
                        name="gender_identity"
                        value="woman"
                        checked={formData.gender_identity === 'woman'}
                        required={true}
                        onChange={handleChange}
                    />
                    <label htmlFor="woman-gender-identity">Woman</label>
                </div>

                <label htmlFor="street-address">Address</label>
                <input
                    id="street_address"
                    type="text"
                    name="street_address"
                    value = {formData.street_address}
                    placeholder={"Street"}
                    required={true}
                    onChange={handleChange}
                />
                <label htmlFor="city">City</label>
                <input
                    id="city"
                    type="text"
                    name="city"
                    value = {formData.city}
                    placeholder={"City"}
                    required={true}
                    onChange={handleChange}
                />
                <label htmlFor="state">State</label>
                <input
                    id="state"
                    type="text"
                    name="state"
                    value = {formData.state}
                    placeholder={"State"}
                    required={true}
                    onChange={handleChange}
                />
                <label htmlFor="zipcode">zipcode</label>
                <input
                    id="zipcode"
                    type="text"
                    name="zipcode"
                    value = {formData.zipcode}
                    placeholder={"Zip"}
                    required={true}
                    onChange={handleChange}
                />

                <button onClick={handleChange}> Next --> </button>

            </section>
                </form>

            </div>
        </>
    );
};

export default OnBoardingFarmers