export default function LoginPage() {
  return (
    <div className="Login_Form_Container">
      <div className="Login_Title"></div>
      <label htmlFor="Email">Email</label>
      <input type="text" id="Email" className="Login_Email" />
      <label htmlFor="Password">Password</label>
      <input type="text" id="Password" className="Login_Password_Input" />
      <button className="Login_Submit_Button">로그인</button>
    </div>
  );
}
