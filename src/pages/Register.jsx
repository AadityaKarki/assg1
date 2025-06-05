import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="login">
        <div className="homediv">
          <p className="popx">Create your PopX account</p>
        </div>

        <div className="input">
          <label className="lbl">
            Full Name<span className="star">*</span>
          </label>
          <input
            type="text"
            className="itext"
            placeholder="Mary Doe"
            required
          ></input>
        </div>
        <div className="input">
          <label className="lbl">
            Phone Number<span className="star">*</span>
          </label>
          <input
            type="text"
            className="itext"
            placeholder="Mary Doe"
            required
          ></input>
        </div>
        <div className="input">
          <label className="lbl">
            Email Address<span className="star">*</span>
          </label>
          <input
            type="text"
            className="itext"
            placeholder="Mary Doe"
            required
          ></input>
        </div>
        <div className="input">
          <label className="lbl">
            Password<span className="star">*</span>
          </label>
          <input
            type="password"
            className="itext"
            placeholder="Mary Doe"
            required
          ></input>
        </div>
        <div className="input">
          <label className="lbl">Company Name</label>
          <input
            type="text"
            className="itext"
            placeholder="Mary Doe"
            required
          ></input>
        </div>
        <div>
          <p className="radioq">
            Are you an agency?<span className="star">*</span>
          </p>
          <div className="radio-group">
            <label className="custom-radio">
              <input type="radio" name="agency" className="rdio" />
              <span className="radio-mark"></span>
              Yes
            </label>
            <label className="custom-radio">
              <input type="radio" name="agency" className="rdio" />
              <span className="radio-mark"></span>
              No
            </label>
          </div>
          <button
            className="btn log create"
            onClick={() => navigate("/account")}
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}
