import "./styles.css";
import Logo from "./components/Logo";
import SignUpButton from "./components/Signup";
import LoginButton from "./components/Login";
import RequestDemoButton from "./components/Demo";
import Content from "./Content";

export default function App() {
  return (
    <div className="landing-page">
      <div className="toolbar">
        <Logo />
        <div className="buttons">
          <SignUpButton />
          <LoginButton />
          <RequestDemoButton />
        </div>
      </div>
      <div className="content">
        <Content />
      </div>
    </div>
  );
}
