import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordiondash() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Cloth Wash</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The cloth wash liquid produced by Thunder Chemical is considered to
            be the best product. It is not harmful to the body.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Dish Wash</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The dishwashing liquid produced by Thunder Chemical Company is of
            high quality. It effectively cleans all types of utensils, leaving
            them spotless and sparkling
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Hand Wash</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The hand wash liquids manufactured by Thunder Chemical Company are
            of excellent quality. They come in two delightful flavors: orange
            and rose
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>juggary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our jaggery is made from organically grown, pure sugarcane. We
            ensure that only clean sugarcane is brought to our farm. We offer
            jaggery in 2kg and 5kg boxes.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
