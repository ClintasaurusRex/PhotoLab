import React from "react";

import "../styles/TopicListItem.scss";



const TopicListItem = (props) => {

  const topicTitle = props.topic.title;
  const topicId = props.topic.id;

  return (
    <div className="topic-list__item">
      <button onClick={() => props.topicsButtons(topicId)}>
        {topicTitle}
      </button>
    </div>
  );
};

export default TopicListItem;
