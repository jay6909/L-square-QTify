import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material"
import ExpandMore from '@mui/icons-material/ExpandMore';
import './faq-section.css'
export default ()=>{
    return(
    <div className="faq-section-container">
        <Typography fontSize={'50px'} color={'var(--css-white)'} textAlign={'center'}>FAQs</Typography>
    <Accordion style={{margin:'20px'}} sx={{backgroundColor:'var(--css-black)', border:'2px solid var(--css-white)', borderRadius:'10px !important', color:'var(--css-white)'}}>
        <AccordionSummary sx={{}}
          expandIcon={<ExpandMore sx={{color:'var(--css-primary)'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Is QTify free to use?</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'var(--css-white)', borderRadius:'0px 0px 10px 10px', color:'var(--css-black)'}}>
          <Typography>
            Yes! it is 100% free and has 0% ads!.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{margin:'20px'}} sx={{backgroundColor:'var(--css-black)', border:'2px solid var(--css-white)', borderRadius:'10px !important', color:'var(--css-white)'}}>
        <AccordionSummary
          expandIcon={<ExpandMore sx={{color:'var(--css-primary)'}} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can I download and listen to songs offline</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:'var(--css-white)', borderRadius:'0px 0px 10px 10px', color:'var(--css-black)'}}>
          <Typography>
            Sorry, unfortunately we don't provide the service to any songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    
    </div>
    );
}