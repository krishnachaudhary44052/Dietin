import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/sms.css';
import Select from 'react-select';
const stateOptions = [
  { value: 'AP', label: 'Andhra Pradesh' },
  { value: 'AR', label: 'Arunachal Pradesh' },
  { value: 'AS', label: 'Assam' },
  { value: 'BR', label: 'Bihar' },
  { value: 'CG', label: 'Chhattisgarh' },
  { value: 'GA', label: 'Goa' },
  { value: 'GJ', label: 'Gujarat' },
  { value: 'HR', label: 'Haryana' },
  { value: 'HP', label: 'Himachal Pradesh' },
  { value: 'JH', label: 'Jharkhand' },
  { value: 'KA', label: 'Karnataka' },
  { value: 'KL', label: 'Kerala' },
  { value: 'MP', label: 'Madhya Pradesh' },
  { value: 'MH', label: 'Maharashtra' },
  { value: 'MN', label: 'Manipur' },
  { value: 'ML', label: 'Meghalaya' },
  { value: 'MZ', label: 'Mizoram' },
  { value: 'NL', label: 'Nagaland' },
  { value: 'OD', label: 'Odisha' },
  { value: 'PB', label: 'Punjab' },
  { value: 'RJ', label: 'Rajasthan' },
  { value: 'SK', label: 'Sikkim' },
  { value: 'TN', label: 'Tamil Nadu' },
  { value: 'TS', label: 'Telangana' },
  { value: 'TR', label: 'Tripura' },
  { value: 'UP', label: 'Uttar Pradesh' },
  { value: 'UK', label: 'Uttarakhand' },
  { value: 'WB', label: 'West Bengal' },
  { value: 'JK', label: 'Jammu & Kashmir' },
];
const customStyles = {
  menuList: (provided) => ({
    ...provided,
    maxHeight: '160px', 
    overflowY: 'auto',
  }),
};
const SmsAndAppDownload = () => {
  const [phone, setphone] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setphone(value);
    }
  };
  return (
    <div className="sms-app-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 py-5 px-4 sms-section">
            <h5>Sign Up for Chat</h5>
            <p className="text-muted">
              Join our SMS list to be the first to find out about flash promos, new menu drops, giveaways, and more. P.S. We promise we won’t reach out too often, only for the big stuff.
            </p>

            <form className="row g-2 align-items-center">
              <div className="col-sm-5">
                <input type="tel" value={phone} onChange={handlePhoneChange} pattern="[0-9]{10}" maxLength="10" className="form-control" placeholder="Phone Number" />
              </div>
              <div className="col-sm-4">
                <Select
                  options={stateOptions}
                  styles={customStyles}
                  placeholder="Select State"
                />
              </div>
              <div className="col-sm-3">
                <button type="submit" className="btn btn-secondary w-100">JOIN</button>
              </div>
            </form>

            <small className="text-muted d-block mt-2">
              See our <a href="#" className="text-success text-decoration-none">Terms and Conditions</a>
            </small>
          </div>
          <div className="col-md-6 py-5  d-flex flex-column align-items-center text-white app-section">
            <h1>Download our App</h1>
            <p className="mt-2">Coming soon on:</p>
            <div className="d-flex gap-4 mt-2">
              <button className="btn btn-secondary disabled">Android</button>
              <button className="btn btn-secondary disabled">iOS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmsAndAppDownload;
