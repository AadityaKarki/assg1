import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="login">
        <div className="homediv">
          <p className="popx">Signin to your PopX account</p>
          <p className="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <div className="input">
          <label className="lbl">Email Address</label>
          <input
            type="email"
            className="itext"
            placeholder="Enter email address"
            required
          ></input>
        </div>
        <div className="input">
          <label className="lbl">Password</label>
          <input
            type="password"
            className="itext"
            placeholder="Enter password"
            required
          ></input>
        </div>
        <button className="btn lgnbtn" onClick={() => navigate("/account")}>
          Login
        </button>
      </div>
    </div>
  );
}
