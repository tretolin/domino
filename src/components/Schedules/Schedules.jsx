import "./Schedules.scss";
import React from "react";
import { Subtitle } from "../../utils/utils";

import { schedules } from '../../data/schedules.js';

const Schedules = () => {
  return (
    <section id="schedules" className="text-center">
      <Subtitle title="Horarios"/>
      <div className="schedules">
        { schedules.map( (schedule, index) => 
            <div className="schedule-info" key={index}>
              <div className="week-day">{ schedule.day }</div>
              <div className="schedule">{ schedule.start } - { schedule.end }</div>
            </div>
          ) }
      </div>
    </section>
  );
}

export default Schedules;
