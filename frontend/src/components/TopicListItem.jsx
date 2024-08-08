import React from "react";

import "../styles/TopicListItem.scss";
import topics from "mocks/topics";



const TopicListItem = (props) => {

  const topic = props.topic;

  return (
    <div className="topic-list__item">
      {/* Insert React */}
      {topic.title}
    </div>
  );
};

export default TopicListItem;
