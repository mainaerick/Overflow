import React, { useEffect, useState } from "react";
import { TopicModel } from "../models/TopicModel";
import { topicgetall } from "../redux/HomeCrud";

type Props = {};

const Topics = (props: Props) => {
  const [topics, setTopics] = useState<TopicModel[]>([]);

  useEffect(() => {
    var isMount = true;

    if (isMount) {
      topicgetall()
        .then((response) => {
          setTopics(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    return () => {
      isMount = false;
    };
  }, []);

  return (
    <div className="topics">
      <div className="topics__header">
        <h2>Browse Topics</h2>
      </div>
      <ul className="topics__list">
        <li>
          <a href="{% url 'home' %}" className="active">
            All <span>{topics?.length}</span>
          </a>
        </li>
        {topics &&
          topics.map((topic,key) => {
            return (
              <li key={key}>
                <a href="{% url 'home' %}?q={{topic.name}}">
                  {topic.name}
                  <span>{topic.roomcount}</span>
                </a>
              </li>
            );
          })}

      </ul>
      <a className="btn btn--link" href="{% url 'topics' %}">
        More
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>chevron-down</title>
          <path d="M16 21l-13-13h-3l16 16 16-16h-3l-13 13z"></path>
        </svg>
      </a>
    </div>
  );
};

export default Topics;
