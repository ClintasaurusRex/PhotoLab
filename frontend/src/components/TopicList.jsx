import React from "react";
import TopicListItem from "./TopicListItem";

import "../styles/TopicList.scss";


const TopicList = (props) => {


  // Mapping topics for render
  const mappedTopics = props.topics.map((topic) => {
    return <TopicListItem
      topic={topic}
      key={topic.id}
      topicsButtons={props.topicsButtons}
    />;
  });

  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}
      {mappedTopics}
    </div>
  );
};

export default TopicList;
