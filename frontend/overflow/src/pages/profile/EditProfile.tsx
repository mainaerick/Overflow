import { Form } from "antd";
import React, { useState } from "react";
import { UserModel } from "../../features/auth/models/UserModel";
import { userupdate } from "./ProfileCrud";

type Props = {};

const EditProfile = (props: Props) => {
  const [loadings, setLoadings] = useState<boolean>(false);
  const [formUpdate, setformUpdate] = useState<boolean>(false);

  const [initialValues, setinitialValues] = useState<UserModel>();
  const onFinish = (values: UserModel) => {
    console.log("Received values of form: ", values);
    setLoadings(true);

    setTimeout(() => {
      userupdate(values)
        .then((response) => {
          setLoadings(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }, 1000);
  };
  return (
    <div className="update-account layout">
      <div className="container">
        <div className="layout__box">
          <div className="layout__boxHeader">
            <div className="layout__boxTitle">
              <a href="home">
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <title>arrow-left</title>
                  <path d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z"></path>
                </svg>
              </a>
              <h3>Edit your profile</h3>
            </div>
          </div>
          <div className="layout__body">
            <Form
              onFinish={onFinish}
              className="form"
              action=""
              initialValues={initialValues}
              encType="multipart/form-data"
            >
              {/* {% for field in form %} */}
              <div className="form__group">
                <label htmlFor="profile_pic">{"field.label"}</label>


                {/* {{field}} */}
              </div>
              {/* {% endfor %} */}

              <div className="form__action">
                <a className="btn btn--dark" href="home">
                  Cancel
                </a>
                <button className="btn btn--main" type="submit">
                  Update
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
