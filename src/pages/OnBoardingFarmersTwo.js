import Select from 'react-select'
import Nav from "../Components/nav";
import {useState} from "react";

const OnBoardingFarmersTwo = () => {
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
        photo: null,
        about: '',
        certifications: [],
        matches: [],
    })
    const [selectedSkills, setSelectedSkills] = useState([]);

    const skillOptions = [
        { value: 'javascript', label: 'JavaScript' },
        { value: 'react', label: 'React' },
        { value: 'nodejs', label: 'Node.js' },
    ];

    const handleSkillChange = (selectedOptions) => {
        setSelectedSkills(selectedOptions);
    };

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        if (type === "file") {
            setFormData((prevState) => ({
                ...prevState,
                [name]: e.target.files[0], // Use files array for file input
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    };

    const handleCertificationChange = (index, value) => {
        const newCertifications = [...formData.certifications];
        newCertifications[index] = value;

        setFormData({
            ...formData,
            certifications: newCertifications,
        });
    };

    const handleAddCertificationInput = () => {
        setFormData({
            ...formData,
            certifications: [...formData.certifications, ''],
        });
    };

    const handleRemoveCertificationInput = (index) => {
        const newCertifications = [...formData.certifications];
        newCertifications.splice(index, 1);

        setFormData({
            ...formData,
            certifications: newCertifications,
        });
    };

    const handlePhotoChange = (e) => {
        const file = e.target.files[0];

        setFormData((prevState) => ({
            ...prevState,
            photo: file,
        }));
    };

    const handleSubmit = () => {
        console.log('submitted!');
    }
    const authToken = true;
    return (
        <>
            <div className={"onboardingWorkerTwo"}>
                <Nav
                    minimal={true}
                    setShowModal={() => {
                    }}
                    showModal={false}
                    authToken={authToken}
                />

                <h1> Worker Account Signup </h1>

                <h2> The personal stuff ---> 2 / 3 </h2>
                <form onSubmit={handleSubmit}>
                    <section>
                        <label htmlFor="photo" className="onboarding-label">
                            *Profile Photo
                        </label>
                        <div className="photo-container">
                            {formData.photo ? (
                                <img
                                    src={URL.createObjectURL(formData.photo)}
                                    alt="profile pic preview"
                                />
                            ) : (
                                <>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="photo"
                                        name="photo"
                                        onChange={handlePhotoChange}
                                        required={true}
                                        style={{ display: 'none' }}
                                    />
                                    <label htmlFor="photo" className="upload-button">
                                        Upload Photo
                                    </label>
                                </>
                            )}
                        </div>

                        <label htmlFor="Bio" className="onboarding-label">*About You</label>
                        <textarea
                            // id="about"
                            // type="text"
                            cols={50}
                            rows={5}
                            name="about"
                            value = {formData.about}
                            required={true}
                            placeholder={"Hello! My name is...."}
                            onChange={handleChange}
                        />
                        <br/>
                        <label htmlFor="skills" className="onboarding-label">*Skills / Type of Work:</label>
                        <Select
                            id="skills"
                            name="skills"
                            placeholder="Search..."
                            options={skillOptions}
                            isMulti
                            onChange={handleSkillChange}
                            value={selectedSkills}
                        />

                        <label htmlFor="certifications" className="certifications-label" >Certifications / Degrees (optional)</label>
                        {formData.certifications.map((certification, index) => (
                            <div key={index} className="certification-item-wrapper">
                                <input className="certification-items"
                                    type="text"
                                    name={`certification-${index}`}
                                    value={certification}
                                    onChange={(e) => handleCertificationChange(index, e.target.value)}
                                    placeholder={`Certification #${index + 1}`}
                                />
                                <button type="button" className="certification-delete-button" onClick={() => handleRemoveCertificationInput(index)}>
                                    x
                                </button>
                            </div>
                        ))}

                        <button type="button" onClick={handleAddCertificationInput} className="certification-button">
                            Add
                        </button>

                        <button onClick={handleChange} className="next-button"> Next --> </button>
                    </section>
                </form>
            </div>
        </>
    )
}
export default OnBoardingFarmersTwo