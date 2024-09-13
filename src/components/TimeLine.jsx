import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
import { CardContent, Typography } from '@mui/material';
import { Card } from '@mui/material';

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
    <Timeline position="alternate">
      {events.map((event, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot />
            {index < events.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Card
              sx={{
                background: 'linear-gradient(to right, #3a4c79, #2d6acb)',
                color: 'white',
                borderRadius: '10px',
              }}
            >
              <CardContent>
                <Typography variant="h6">{event.title}</Typography>
                <Typography variant="subtitle2">{event.location}</Typography>
                <Typography variant="caption">{event.date}</Typography>
              </CardContent>
            </Card>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
      
  );
};

export default MadeHackTimeline;
