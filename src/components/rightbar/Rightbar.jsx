import "./rightbar.scss";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="accent-line" />
        <a
          href="mailto: mitcheecostelo@outlook.com"
          className="email"
          onMouseOver={{ size: 1.1 }}
        >
          mitcheecostelo@outlook.com
        </a>
      </div>
    </div>
  );
}