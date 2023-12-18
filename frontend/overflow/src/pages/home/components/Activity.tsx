import React from 'react'

type Props = {}

const Activity = (props: Props) => {
  return (
    <div className="activities">
    <div className="activities__header">
        <h2>Recent Activities</h2>
    </div>
    {/* {% for message in room_messages %} */}
    <div className="activities__box">
        <div className="activities__boxHeader roomListRoom__header">
            <a href="{% url 'user-profile' message.user.id %}" className="roomListRoom__author">
                <div className="avatar avatar--small">
                    <img src="{{message.user.avatar.url}}" />
                </div>
                <p>
                    @{"eric"}
                    <span>{"3 min"} ago</span>
                </p>
            </a>

            {/* {% if request.user == message.user %} */}
            <div className="roomListRoom__actions">
                <a href="{% url 'delete-message' message.id %}">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                        <title>remove</title>
                        <path
                            d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z">
                        </path>
                    </svg>
                </a>
            </div>
            {/* {% endif %} */}

        </div>
        <div className="activities__boxContent">
            <p>replied to post “<a href="{% url 'room' message.room.id %}">{"Lets learn Java"}</a>”</p>
            <div className="activities__boxRoomContent">{"Shuvo can you help with the design portion?"}</div>
        </div>
    </div>
    {/* {% endfor %} */}

</div>
  )
}

export default Activity