import { Button, Col, Form, Input, Row } from "antd";
import form from "antd/es/form";
import React, { useEffect, useState } from "react";
import { roomadd, roomgetone, roomupdate } from "./RoomCrud";
import { useNavigate, useParams } from "react-router-dom";

type Props = {};
interface RoomAddValues {
  description: string;
  name: string;
  participants: [];
  topic: string;
}
const RoomForm = (props: Props) => {
  const [loadings, setLoadings] = useState<boolean>(false);
  const [formUpdate, setformUpdate] = useState<boolean>(false);
  const [initialValues, setinitialValues] = useState<RoomAddValues>({
    name: "",
    description: "",
    participants: [],
    topic: "",
  });

  const navigate = useNavigate();
  const params = useParams();
  console.log(params.roomid);

  useEffect(() => {
    return () => {
      if(typeof params.roomid !== 'undefined'){
        setLoadings(true);
        roomgetone(params.roomid)
        .then((response) => {
          setinitialValues(response.data);
          setformUpdate(true);
          setLoadings(false);
          console.log(response)
        })
        .catch((e) => {
          console.log(e);
          setLoadings(false);
        });
      }else{
        setLoadings(false);

      }
      
    };
  }, [params]);

  const onFinish = (values: RoomAddValues) => {
    console.log("Received values of form: ", values);
    setLoadings(true);

    setTimeout(() => {
      console.log(formUpdate)
      if (formUpdate) {
        roomupdate(params.roomid, values.description, values.name, values.topic)
          .then((response) => {
            console.log(response);
            setLoadings(false);
            if (response.status == 200) {
              navigate("/home");
            }
          })
          .catch((e) => {
            console.log(e);
            setLoadings(false);

          });
      } else {
        roomadd(values.description, values.name, [], values.topic)
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              navigate("/home");
            }

            setLoadings(false);
          })
          .catch((error) => {
            console.log(error.response.data.message);
            setLoadings(false);
          });
      }
    }, 1000);
  };

  return (
    <main className="create-room layout">
      {loadings ? (
        <span>Loading...</span>
      ) : (
        <div className="container">
          <div className="layout__box">
            <div className="layout__boxHeader">
              <div className="layout__boxTitle">
                <a href="{{request.META.HTTP_REFERER}}">
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
                <h3>Create/Update Study Room</h3>
              </div>
            </div>
            <div className="layout__body">
              <Form
                name="normal_register"
                initialValues={initialValues}
                onFinish={onFinish}
                className="form"
              >
                {/* {% csrf_token %} */}

                <div className="form__group">
                  <label htmlFor="room_topic">Topic</label>
                  <Form.Item
                    name="topic"
                    rules={[
                      {
                        required: true,
                        message: "Please input room topic!",
                      },
                    ]}
                  >
                    <Input id="room_topic" list="topic" />
                  </Form.Item>

                  <datalist id="topic-list">
                    <select id="room_topic_select">
                      <option value="">Select your topic</option>
                      <option value="Python">Python</option>
                      <option value="Django">Django</option>
                    </select>
                  </datalist>
                </div>

                <div className="form__group">
                  <label htmlFor="room_name">Room Name</label>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input room name!",
                      },
                    ]}
                  >
                    <Input id="room_name" />
                  </Form.Item>
                </div>

                <div className="form__group">
                  <label htmlFor="room_description">Room Description</label>
                  <Form.Item
                    name="description"
                    rules={[
                      {
                        required: true,
                        message: "Please input room name!",
                      },
                    ]}
                  >
                    <Input id="room_description" />
                  </Form.Item>
                </div>

                <div className="form__action">
                  <Form.Item>
                    <Button
                      className="btn btn--dark"
                      href="{{request.META.HTTP_REFERER}}"
                    >
                      Cancel
                    </Button>
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="btn btn--main"
                    >
                      {formUpdate ? "Update" : "Submit"}
                    </Button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default RoomForm;
