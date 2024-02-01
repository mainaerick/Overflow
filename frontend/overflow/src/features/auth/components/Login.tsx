import { Button, Col, Form, Input, Row } from "antd";
import React, { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/AuthCRUD";
import * as auth from "../redux/AuthRedux";
import { submitbtn_bgcolor } from "../../../setup/config";

type Props = {};
interface Values {
  username: string;
  password: string;
  remember: boolean;
}
const Login = (props: Props) => {
  type LayoutType = Parameters<typeof Form>[0]["layout"];
  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const dispatch = useDispatch();

  const onFinish = (values: Values) => {
    console.log("Received values of form: ", values);
    if (values.remember) {
      localStorage.setItem("username", values.username);
      localStorage.setItem("password", values.password);
    }
    setLoadings([true]);
    setTimeout(() => {
      login(values.username, values.password)
        .then((response) => {

          const token = response.data.user.token;
          // console.log(token.user.token);
          setLoadings([false]);
          dispatch(auth.actions.login(token));
        })
        .catch((error) => {
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
    <div className="container">
      <div className="layout__box">
        <div className="layout__boxHeader">
          <div className="layout__boxTitle">
            <h3>Login</h3>
          </div>
        </div>
        <div className="layout__body">
          <h2 className="auth__tagline">Find your study partner</h2>

          <Form name="normal_login"
              layout={formLayout}
              initialValues={{ remember: true }}
              onFinish={onFinish} className="form" >
            {/* {% csrf_token %} */}
            <div className="form__group form__group">
              <label htmlFor="room_name">Username</label>

              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input id="username" />
              </Form.Item>
            </div>

            <div className=" form__group">
              <label htmlFor="password">Password</label>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input type="password" id="password" />
              </Form.Item>
            </div>

            <Form.Item>
              <Row
                justify="space-between"
                style={{ display: "flex", gap: "23px" }}
              >
                <Col flex={1}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    className="btn btn--main"
                  >
                    Log in
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>

          <div className="auth__action">
            <p>Haven't signed up yet?</p>
            <a href="auth/registration" className="btn btn--link">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
