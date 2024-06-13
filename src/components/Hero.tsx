import { Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

const Hero: React.FC = () => {
  const nav = useNavigate();
  return (
    <div>
      {/* row */}
      <Row>
        {/* col1 */}
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={14}
          style={{ alignContent: "center", textAlign: "center" }}
        >
          <h1
            style={{
              fontSize: "108px",
              lineHeight: "102px",
              fontWeight: "800",
            }}
          >
            YOUR FEET DESERVE BEST
          </h1>
        </Col>
        {/* col1 ends */}
        {/* col2 */}
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={10}
          style={{ alignContent: "center", textAlign: "center" }}
        >
          <img src="/images/vite.svg" alt="" style={{ width: "400px", maxWidth: "400px" }} />
        </Col>
        {/* col2 ends */}
      </Row>
      {/* row ends */}
      <p
        style={{
          fontWeight: "600",
          color: "grey",
        }}
      >
        KI ASE JIBONE JANE NA EI MONE KIVABE JABE DIN PAI NA KONO BIN MOYLA FELI
        NA MOYLA KOTHAW ARO KHUJI BIN KI ASE JIBON WHY TIS KOLAVERI KOLAVERI DI
      </p>
      <div
        className="hero"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          paddingTop: "50px",
          paddingBottom: "23px",
          marginBottom: 0,
        }}
      >
        <div
          className="hero-content"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "36px",
          }}
        >
          <div
            className="hero-btn"
            style={{
              display: "flex",
              gap: "40px",
            }}
          >
            <button
              style={{
                all: "unset",
                padding: "6px 16px",
                background: "red",
                height: "32px",
                color: "white",
                fontWeight: "500",
              }}
              onClick={() => nav("/dashboard")}
            >
              Sign in
            </button>
            <button
              className="secondary-button"
              style={{
                all: "unset",
                padding: "6px 16px",
                height: "32px",
                fontWeight: "500",
                background: "transparent",
                color: "grey",
                border: "1px solid",
              }}
            >
              Sign up
            </button>
          </div>
          <div className="shoping" style={{ textAlign: "center" }}>
            <p
              style={{
                fontSize: "14px",
                marginBottom: "8px",
              }}
            >
              Also Available On
            </p>
            <div className="brand-icons" style={{}}>
              <img src="/images/vite.svg" alt="" style={{}} />
              <img src="/images/react.svg" alt="" style={{}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
