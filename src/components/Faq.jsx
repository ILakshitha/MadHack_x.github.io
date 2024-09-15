import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

export default function Faq() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };

    return (
        <div>
            <Accordion
                expanded={expanded}
                onChange={handleExpansion}
                slots={{ transition: Fade }}
                slotProps={{ transition: { timeout: 400 } }}
                sx={[
                    expanded
                        ? {
                            '& .MuiAccordion-region': {
                                height: 'auto',
                            },
                            '& .MuiAccordionDetails-root': {
                                display: 'block',
                            },
                        }
                        : {
                            '& .MuiAccordion-region': {
                                height: 0,
                            },
                            '& .MuiAccordionDetails-root': {
                                display: 'none',
                            },
                        },
                ]}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>What is MadHack 3.0?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MadHack 3.0 is a coding competition where enthusiasts
                        come together to showcase their skills in mobile app development. It's a platform to learn, collaborate, and compete in creating innovative solutions for real-world challenges
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Who can participate in MadHack 3.0?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MadHack 3.0 is open to all undergraduate students! Whether you're a seasoned developer or just starting,
                        we welcome participants of all skill levels and backgrounds.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Who can participate in MadHack 3.0?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MadHack 3.0 is open to all undergraduate students! Whether you're a seasoned developer or just starting,
                        we welcome participants of all skill levels and backgrounds.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Who can participate in MadHack 3.0?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MadHack 3.0 is open to all undergraduate students! Whether you're a seasoned developer or just starting,
                        we welcome participants of all skill levels and backgrounds.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Who can participate in MadHack 3.0?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MadHack 3.0 is open to all undergraduate students! Whether you're a seasoned developer or just starting,
                        we welcome participants of all skill levels and backgrounds.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Who can participate in MadHack 3.0?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        MadHack 3.0 is open to all undergraduate students! Whether you're a seasoned developer or just starting,
                        we welcome participants of all skill levels and backgrounds.
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </div>
    );
}