import React, { useEffect, useState } from "react";
import { RoomModel } from "./models/RoomModel";
import {
  roomdelete,
  roomgetone,
  roommessage,
  roommessagetall,
} from "./RoomCrud";
import { useParams } from "react-router";
import { TimeAgo } from "./utils/TimeAgo";
import { UserModel } from "../../features/auth/models/UserModel";
import { MessageModel } from "./models/MessageModel";
import { Form, Input } from "antd";

type Props = {};

const Room = (props: Props) => {
  const [room, setRoom] = useState<RoomModel>();
  const [messages, setMessages] = useState<MessageModel[]>([]);
  const [loadings, setLoadings] = useState<boolean>(false);
  const [form] = Form.useForm();

  const params = useParams();
  useEffect(() => {
    roomgetone(params.roomid)
      .then((response) => {
        setRoom(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  useEffect(() => {
    roommessagetall(params.roomid)
      .then((response) => {
        setMessages(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [room]);

  const deleteroom = () => {
    roomdelete(params.roomid)
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // Add message form
  const onFinish = (values: MessageModel) => {
    console.log("Received values of form: ", values);

    setLoadings(true);

    setTimeout(() => {
      roommessage(params.roomid, values.body)
        .then((response) => {
          const newMessage: MessageModel = response.data;

          setMessages((prevMessages) => [...prevMessages, newMessage]);
          form.resetFields();
        })
        .catch((e) => {
          console.log(e);
        });
    }, 1000);
  };
  return (
    <main className="profile-page layout layout--2">
      <div className="container">
        {/* <!-- Room Start --> */}
        <div className="room">
          <div className="room__top">
            <div className="room__topLeft">
              <a href="/home">
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
              <h3>Study Room</h3>
            </div>
            {/* {% if room.host == request.user %} */}
            <div className="room__topRight">
              <a href={`/createroom/${room?.id}`}>
                <svg
                  enable-background="new 0 0 24 24"
                  height="32"
                  viewBox="0 0 24 24"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>edit</title>
                  <g>
                    <path d="m23.5 22h-15c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h15c.276 0 .5.224.5.5s-.224.5-.5.5z" />
                  </g>
                  <g>
                    <g>
                      <path d="m2.5 22c-.131 0-.259-.052-.354-.146-.123-.123-.173-.3-.133-.468l1.09-4.625c.021-.09.067-.173.133-.239l14.143-14.143c.565-.566 1.554-.566 2.121 0l2.121 2.121c.283.283.439.66.439 1.061s-.156.778-.439 1.061l-14.142 14.141c-.065.066-.148.112-.239.133l-4.625 1.09c-.038.01-.077.014-.115.014zm1.544-4.873-.872 3.7 3.7-.872 14.042-14.041c.095-.095.146-.22.146-.354 0-.133-.052-.259-.146-.354l-2.121-2.121c-.19-.189-.518-.189-.707 0zm3.081 3.283h.01z" />
                    </g>
                    <g>
                      <path d="m17.889 10.146c-.128 0-.256-.049-.354-.146l-3.535-3.536c-.195-.195-.195-.512 0-.707s.512-.195.707 0l3.536 3.536c.195.195.195.512 0 .707-.098.098-.226.146-.354.146z" />
                    </g>
                  </g>
                </svg>
              </a>
              <span onClick={(e: any) => deleteroom()}>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                >
                  <title>remove</title>
                  <path d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"></path>
                </svg>
              </span>
            </div>
            {/* {% endif %} */}
          </div>
          <div className="room__box scroll">
            <div className="room__header scroll">
              <div className="room__info">
                <h3>{room?.name}</h3>
                <span>{TimeAgo(room?.created)}</span>
              </div>
              <div className="room__hosted">
                <p>Hosted By</p>
                <a
                  href="{% url 'user-profile' room.host.id %}"
                  className="room__author"
                >
                  <div className="avatar avatar--small">
                    <img src="{{room.host.avatar.url}}" />
                  </div>
                  <span>@{room?.host}</span>
                </a>
              </div>

              <span className="room__topics">{room?.topic}</span>
            </div>

            <div className="room__conversation">
              <div className="threads scroll">
                {/* {% for message in room_messages %} */}

                {messages &&
                  messages.map((message: MessageModel, key) => {
                    return (
                      <div className="thread" key={key}>
                        <div className="thread__top">
                          <div className="thread__author">
                            <a
                              href="{% url 'user-profile' message.user.id %}"
                              className="thread__authorInfo"
                            >
                              <div className="avatar avatar--small">
                                <img src="{{message.user.avatar.url}}" />
                              </div>
                              <span>@{message.host.username}</span>
                            </a>
                            <span className="thread__date">
                              {TimeAgo(message.created)}
                            </span>
                          </div>

                          {/* {% if request.user == message.user %} */}
                          <a href="{% url 'delete-message' message.id %}">
                            <div className="thread__delete">
                              <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 32 32"
                              >
                                <title>remove</title>
                                <path d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"></path>
                              </svg>
                            </div>
                          </a>
                          {/* {% endif %} */}
                        </div>
                        <div className="thread__details">{message.body}</div>
                      </div>
                    );
                  })}

                {/* {% endfor %} */}
              </div>
            </div>
          </div>
          <div className="room__message">
            <Form form={form} onFinish={onFinish} className="room__messageform">
              {/* {% csrf_token %} */}
              <Form.Item
                name="body"
                className="room__messageitem"
                rules={[
                  {
                    required: true,
                    message: "Please input a message!",
                  },
                ]}
              >
                <Input
                  className="room_message_input"
                  id="room_topic"
                  list="topic"
                  placeholder="Write your message here..."
                />
              </Form.Item>
              {/* <input name="body" placeholder="Write your message here..." /> */}
            </Form>
          </div>
        </div>
        {/* <!-- Room End --> */}

        {/* <!--   Start --> */}
        <div className="participants">
          <h3 className="participants__top">
            Participants <span>({room?.participants.length} Joined)</span>
          </h3>
          <div className="participants__list scroll">
            {/* {% for user in participants %} */}
            {room?.participants.map((participant: UserModel, key) => {
              return (
                <a
                  key={key}
                  href="{%  url 'user-profile' user.id %}"
                  className="participant"
                >
                  <div className="avatar avatar--medium">
                    <img src="{{user.avatar.url}}" />
                  </div>
                  <p>
                    {participant.email}
                    <span>@{participant.username}</span>
                  </p>
                </a>
              );
            })}

            {/* {% endfor %} */}
          </div>
        </div>
        {/* <!--  End --> */}
      </div>
    </main>
  );
};

export default Room;
