import { Button, Col, Form, Input, Row } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/AuthCRUD";
import * as auth from "../redux/AuthRedux";

type Props = {};
interface RegistrationValues {
    username: string,
  email: string,
  password: string,
  appUserRoles: [string]
  }
const Registration = (props: Props) => {
    type LayoutType = Parameters<typeof Form>[0]["layout"];
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const dispatch = useDispatch();
  const [formLayout] = useState<LayoutType>("vertical");

  const onFinish = (values: RegistrationValues) => {
    console.log("Received values of form: ", values);
    setLoadings([true]);
    
    setTimeout(() => {
      register(values.username,values.email,values.password,["ROLE_CLIENT"])
        .then((response) => {
          const token = response.data;
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
    <div className="container">
      <div className="layout__box">
        <div className="layout__boxHeader">
          <div className="layout__boxTitle">
            <h3>Register</h3>
          </div>
        </div>
        <div className="layout__body">
          <h2 className="auth__tagline">Find your study partner</h2>
          <Form
          name="normal_register"
          className="form"
          layout={formLayout}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          style={{ width: 400 }}
        >
            <div className="form__group form__group">
              <label htmlFor="room_name">Name</label>

              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please input your name!",
                  },
                ]}
              >
                <Input id="id_name" />
              </Form.Item>
            </div>
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
                <Input id="id_username" />
              </Form.Item>
            </div>

            <div className="form__group form__group">
              <label htmlFor="id_email">Email</label>

              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input id="id_email" type="email" />
              </Form.Item>
            </div>
            <div className="form__group form__group">
              <label htmlFor="id_password">Password</label>

              <Form.Item
                name="password"
                
                rules={[
                  {
                    required: true,
                    message: "Please input password!",
                  },
                ]}
              >
                <Input id="id_password1" type="password" />
              </Form.Item>
            </div>
            <div className="form__group form__group">
              <label htmlFor="room_name">Confirm Password</label>

              <Form.Item
                name="password2"
                rules={[
                  {
                    required: true,
                    message: "Please input your confirmation password!",
                  },
                ]}
              >
                <Input id="id_password2" type="password" />
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
                    Sign up
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>

          <div className="auth__action">
            <p>Already signed up yet?</p>
            <a href="/login" className="btn btn--link">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
