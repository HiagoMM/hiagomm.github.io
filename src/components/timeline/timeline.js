import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { EXPERIENCES } from "./experience";
export default function TimeLine() {
  return (
    <VerticalTimeline layout="1-column">
      {EXPERIENCES.map(exp => {
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: exp.color, color: "#fff" }}
            contentArrowStyle={{ borderRight: `7px solid  ${exp.color}` }}
            date={exp.date}
            iconStyle={{ background: exp.color, color: "#fff" }}
            icon={exp.icon}
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {exp.subTitle}
            </h4>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
}
