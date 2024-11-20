import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdOutlineExpandMore } from "react-icons/md";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const Faq = ({ faqs }) => {
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <>
      <div className="presentation">
        <h2>FAQ</h2>
        <img src="section-img.png" alt="section img" />

        {faqs.map((faq, index) => {
          const panelId = `panel${index + 1}`;
          return (
            <Accordion
              key={index}
              expanded={expanded === panelId}
              onChange={handleChange(panelId)}
              sx={{
                backgroundColor: '#e5eafb',
                color: 'black',
              }}
            >
              <AccordionSummary
                expandIcon={
                  expanded === panelId ? (
                    <CiCircleMinus style={{ color: 'blue' }} size="30" />
                  ) : (
                    <CiCirclePlus style={{ color: 'blue' }} size="30" />
                  )
                }
                aria-controls={`${panelId}a-content`}
                id={`${panelId}a-header`}
              >
                <Typography className="text-black">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </>
  );
};

export default Faq;
