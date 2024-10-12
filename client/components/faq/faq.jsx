import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { MdOutlineExpandMore } from "react-icons/md";

const Faq = () => {
  return (
    <>
      <div className="presentation">
        <h2>FAQ</h2>
        <img src="section-img.png" alt="section img" />

        {/* First Accordion with a linear gradient background */}
        <Accordion
          defaultExpanded
          sx={{
            background: 'linear-gradient(45deg, #23B6EA, #66DED4)', // Set the gradient colors
            color: 'white',
          }}
        >
          <AccordionSummary
            expandIcon={<MdOutlineExpandMore style={{ color: 'white' }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>01 Quels sont les avantages de la chirurgie mini-invasive?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Elle réduit les douleurs, les risques d'infection, et permet une récupération rapide.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />

        {/* Second Accordion with the same linear gradient background */}
        <Accordion
          sx={{
            background: 'linear-gradient(45deg, #23B6EA, #66DED4)', // Set the gradient colors
            color: 'white',
          }}
        >
          <AccordionSummary
            expandIcon={<MdOutlineExpandMore style={{ color: 'white' }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>02 Comment puis-je préparer ma chirurgie ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Une consultation pré-opératoire et des tests diagnostiques seront effectués pour garantir une préparation optimale.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}

export default Faq;
