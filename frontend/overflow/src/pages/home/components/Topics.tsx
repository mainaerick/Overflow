import React from "react";

type Props = {};

const Topics = (props: Props) => {
  return (
    <div className="topics">
    <div className="topics__header">
        <h2>Browse Topics</h2>
    </div>
    <ul className="topics__list">
        <li>
            <a href="{% url 'home' %}" className="active">All <span>{3}</span></a>
        </li>
        {/* {% for topic in topics %} */}
        <li>
            <a href="{% url 'home' %}?q={{topic.name}}">{"Java"}<span>{3}</span></a>
        </li>
        {/* {% endfor %} */}

    </ul>
    <a className="btn btn--link" href="{% url 'topics' %}">
        More
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <title>chevron-down</title>
            <path d="M16 21l-13-13h-3l16 16 16-16h-3l-13 13z"></path>
        </svg>
    </a>
</div>
  );
};

export default Topics;