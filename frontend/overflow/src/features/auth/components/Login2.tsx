import { FC, FormEvent, useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Card,
  Typography,
  Col,
  Row,
  Divider,
  Space,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { toAbsoluteUrl } from "../../../helpers";
import { GoogleOutlined, WindowsOutlined } from "@ant-design/icons";
import { submitbtn_bgcolor } from "../../../setup/config";
import { login } from "../redux/AuthCRUD";
import { useDispatch } from "react-redux";
import * as auth from "../redux/AuthRedux";

const { Title } = Typography;

interface Values {
  email: string;
  password: string;
  remember: boolean;
}

const LoginForm: FC = () => {
  type LayoutType = Parameters<typeof Form>[0]["layout"];
  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const dispatch = useDispatch();

  const onFinish = (values: Values) => {
    console.log("Received values of form: ", values);
    if (values.remember) {
      localStorage.setItem("email", values.email);
      localStorage.setItem("password", values.password);
    }
    setLoadings([true]);
    setTimeout(() => {
      login(values.email, values.password).then((response) => {
        console.log(response);

        const token = response.data.idToken;
        console.log(token);

        setLoadings([false]);
        dispatch(auth.actions.login(token));
      }).catch((error)=>{
        setLoadings([false]);

        console.log(error);
        
      });
    }, 1000);
  };

  const handleForgotPassword = (e: FormEvent) => {
    e.preventDefault();
    console.log("Handle password recovery logic here");
  };

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    console.log("Handle registration logic here");
  };
  const tailLayout = {
    wrapperCol: { offset: 0, span: 16 },
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div style={{}}>
        <div
          style={{
            marginBottom: "30px",
          }}
        >
          <img
            alt="Logo"
            className="h-5px logo"
            src={toAbsoluteUrl("/media/logos/oak full.svg")}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "start",
            }}
          >
            <Title level={5}>Login </Title>
          </div>
          {/* <div style={{ marginTop: "20px" }}>
            <div style={{ textAlign: "center", width: "100%" }}>
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: "5px",
                  marginBottom: "8px",
                }}
              >
                <GoogleOutlined style={{ fontSize: "24px" }} />
                <span style={{ marginLeft: "10px" }}>Signing with Google</span>
              </div>
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",

                  padding: "5px",
                }}
              >
                <WindowsOutlined style={{ fontSize: "24px" }} />
                <span style={{ marginLeft: "10px" }}>
                  Signing with Microsoft
                </span>
              </div>
            </div>
          </div> */}
        </div>
        <div>
          <div>
            <Form
              name="normal_login"
              className="login-form"
              layout={formLayout}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              style={{ width: 400 }}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input your Email!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="john@doe.com"
                />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Password"
                />
               
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Form.Item>
              <Form.Item>
                <Row
                  justify="space-between"
                  style={{ display: "flex", gap: "23px" }}
                >
                  <Col flex={1}>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="login-form-button"
                      block
                      style={{
                        backgroundColor: `${submitbtn_bgcolor}`,
                        marginBottom: "8px",
                      }}
                    >
                      Log in
                    </Button>
                  </Col>

                  <Col flex={0.5}>
                    {" "}
                    <Button htmlType="button" block>
                      Forgot password
                    </Button>
                  </Col>
                </Row>
              </Form.Item>

              <Form.Item>
                Don't have an account{" "}
                <a href="" onClick={handleRegister}>
                  sign up
                </a>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
