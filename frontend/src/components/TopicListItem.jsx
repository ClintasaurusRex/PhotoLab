import React from "react";

import "../styles/TopicListItem.scss";
import topics from "mocks/topics";



const TopicListItem = (props) => {

  const topicTitle = props.title;

  return (
    <div className="topic-list__item">
      {/* Insert React */}
      {topicTitle}
    </div>
  );
};

export default TopicListItem;
