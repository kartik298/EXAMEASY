import { Form, Input, Button } from "antd";
import React, { useEffect } from "react";
import { Row, Col, Typography, notification} from "antd";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { loginUser } from "../actions/authActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ParticlesBg from 'particles-bg'
function Login(props) {
  const history = useHistory();
  const { Title } = Typography;
  const { isLoading } = props;

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const openSuccessNotification = () => {
    const args = {
      message: "Welcome!",
      description:
        "Logged in Successfully.",
      duration: 3,
    };
    notification.open(args);
  };

  useEffect(() => {
    if (props.isAuthenticated) {
      openSuccessNotification();
      history.push("/");
    }
  }, [props]);

  const submitForm = (values) => {
    props.sendLoginRequest(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
    <ParticlesBg type="cobweb" bg={true} />
      <Row justify="center" align="middle" className="hero">
        <Col xs={22} sm={22} md={6} lg={6} className="signin__container">
          <p className="sub-title">ExamPlus 💎</p>

          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={submitForm}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <div
              className="link"
              style={{
                textAlign: "center",
                fontWeight: 500,
                marginBottom: "15px",
              }}
            >
              <Link to="/signup">New here? Create your account.</Link>
            </div>
            <Form.Item>
              <Button
                type="primary"
                className="sign__in"
                style={{ minWidth: "44px" }}
                loading={isLoading}
                htmlType="submit"
              >
                {!isLoading ? "Sign In!" : "Logging In"}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isLoading: state.auth.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendLoginRequest: (values) => dispatch(loginUser(values)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);