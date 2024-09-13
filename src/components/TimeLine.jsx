import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { Typography } from '@mui/material';

const events = [
  { date: "Jan 6th", title: "Awareness Session", location: "Virtual" },
  { date: "Jan 10th", title: "Mobile App Designing Session", location: "Virtual" },
  { date: "Feb 4th", title: "Workshop - Flutter Session - Basics", location: "Virtual" },
  { date: "Feb 18th", title: "Workshop - Flutter Session - Advanced", location: "Virtual" },
  { date: "March 4th", title: "Open Initial Round Submissions", location: "" },
  { date: "March 16th", title: "Close Initial Round Submissions", location: "" },
  { date: "Postponed", title: "Announcement of Finalists", location: "Virtual" },
  { date: "Postponed", title: "Final Hackathon", location: "Onsite" },
];

const MadeHackTimeline = () => {
  return (
    <Timeline position="">
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent>
            <Typography variant="body2" color="white" sx={{width: '300px',padding: '20px',
              background: 'linear-gradient(135deg, #2a5298, #1e3c72)',
              position: 'relative',
              
            

            }}>
              {event.date}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {index < events.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6" component="div" color="white" 
            sx={{width: '300px',padding: '20px',
              background: 'linear-gradient(135deg, #2a5298, #1e3c72)',
              position: 'relative',}}
            >
              {event.title}
            </Typography>
            <Typography color="white">{event.location}</Typography>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default MadeHackTimeline;
