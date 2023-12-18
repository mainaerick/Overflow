import React from "react";
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
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  CheckOutlined,
  GoogleOutlined,
  WindowsOutlined,
} from "@ant-design/icons";

import { toAbsoluteUrl } from "../../../helpers";
import { submitbtn_bgcolor } from "../../../setup/config";
import { register } from "../redux/AuthCRUD";
import { error } from "console";
import { useDispatch } from "react-redux";
import * as auth from "../redux/AuthRedux";

const { Title } = Typography;

interface RegistrationValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

const RegistrationForm: FC = () => {
  type LayoutType = Parameters<typeof Form>[0]["layout"];
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const dispatch = useDispatch();
  const [formLayout] = useState<LayoutType>("vertical");

  const onFinish = (values: RegistrationValues) => {
    console.log("Received values of form: ", values);
    setLoadings([true]);
    var firstname = values.firstName;
    var middle = "";
    var sur = values.lastName;
    var name = {
      firstname,
      middle,
      sur,
    };
    setTimeout(() => {
      register(values.email, name, "1994-11-20", "male", values.password)
        .then((response) => {
          const token = response.data.idToken;
          console.log(token);
          setLoadings([false]);
          dispatch(auth.actions.register(token));
        })
        .catch((error) => {
          console.log(error.response.data.message);
          setLoadings([false]);
        });
    }, 1000);
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
        <div style={{ marginBottom: "30px" }}>
          <img
            alt="Logo"
            className="h-5px logo"
            src={toAbsoluteUrl("/media/logos/oak full.svg")}
          />
          <div style={{ display: "flex", justifyContent: "start" }}>
            <Title level={5}>Register</Title>
          </div>
          {/* <div style={{ textAlign: "center", width: "100%" }}>
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
              <span style={{ marginLeft: "10px" }}>Signing with Microsoft</span>
            </div>
          </div> */}
        </div>

        <Form
          name="normal_register"
          className="registration-form"
          layout={formLayout}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: 400 }}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your First Name!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please input your Last Name!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} />
          </Form.Item>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  { required: true, message: "Please confirm your Password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The two passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item name="acceptTerms" valuePropName="checked">
            <Checkbox>
              I accept the <a href="/terms">Terms and Conditions</a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="registration-form-button"
              block
              style={{
                backgroundColor: `${submitbtn_bgcolor}`,
                marginBottom: "8px",
              }}
            >
              Proceed to Register
            </Button>
            <Button type="default" htmlType="button" block>
              Have an account?
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationForm;
