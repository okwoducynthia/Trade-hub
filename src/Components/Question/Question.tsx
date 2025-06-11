import "./Question.css";
import * as React from "react";
import Accordion, { accordionClasses } from "@mui/material/Accordion";
import type { AccordionSlots } from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails, {
  accordionDetailsClasses,
} from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Fade from "@mui/material/Fade";

const Question = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
  <div className="question-main">
    <div className="question-container">
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slots={{ transition: Fade as AccordionSlots["transition"] }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={[
          expanded
            ? {
                [`& .${accordionClasses.region}`]: {
                  height: "auto",
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: "block",
                },
              }
            : {
                [`& .${accordionClasses.region}`]: {
                  height: 0,
                },
                [`& .${accordionDetailsClasses.root}`]: {
                  display: "none",
                },
              },
        ]}
      >
        <h1 className="questions-heading">Frequently asked questions</h1>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Custom transition using Fade</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
         
        >
          <Typography component="span"> <h4>Why Investing?</h4></Typography>
        </AccordionSummary>
        <AccordionDetails  className="question-details">
          <Typography>
            The earlier you start investing, the longer your money will be able
            to work in your favor! Get started investing as soon as you start
            earning your first penny!, One of the main benefits of investing is
            that the money you invest has the potential to grow substantially
            over time. Rather than just putting your money into a savings
            account to save for the future, investing is can be a much smarter
            way to make your money work for you.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel1-header"
        >
          <Typography component="span">
            <h4>Is it better to save or invest?</h4>            
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="question-details">
          <Typography>
            Investing provides the potential for (significantly) higher returns
            than saving. As your investments grow, they allow you to take
            advantage of compounding to accelerate gains. Investing offers many
            different access points and strategies, from individual stocks and
            bonds to mutual or exchange-traded funds.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel2-header"
        >
          <Typography component="span">
            <h4>What is the process for signing up with Us?</h4>            
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="question-details">
          <Typography>
            Want to signup? Sure, here's a simple step-by-step guide on how to
            sign up and get started: 1. Open your preferred web browser and
            navigate to the website. 2. Look for the "Sign Up" or "Register"
            button and click on it to start the registration process. 3. Fill in
            your personal information, including your name, email address,
            country and location. 4. Choose a strong password and confirm it. 5.
            Complete any additional verification steps required by the app, such
            as Id or passport verification. 6. Provide your financial
            information, such as your various withdrawal wallet details, fund
            your account and start investing. 7. Once your account is set up,
            you can start exploring the app's features, such as browsing
            available investments and plans, making investment etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel2-header"
        >
          <Typography component="span">
            <h4>What elements are evaluated when strategically allocating assets in
            portfolios?</h4>           
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="question-details">
          <Typography>
            When managing portfolios, we consider various asset classes such as
            stocks, bonds, real estate, and alternative investments. Each asset
            class is evaluated based on its risk-return profile, correlation
            with other assets, and its role in achieving diversification. We aim
            to construct portfolios that balance risk and return by allocating
            assets strategically according to your investment objectives and
            risk tolerance, our approach involves monitoring and adjusting the
            allocation of assets over time to adapt to changes in market
            conditions and economic outlooks.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel2-header"
        >
          <Typography component="span">
            <h4>Why should you trust Us, and what makes us stand out from the rest?</h4>            
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="question-details">
          <Typography>
            At Elizabeth Jane Ross Wealth Management, we're dedicated to
            providing accessible and user-friendly investment solutions. With a
            team of experienced professionals, we aim to empower individuals to
            achieve their financial goals through innovative and transparent
            investment opportunities. Our platform offers a diverse range of
            assets and personalized services tailored to your needs, ensuring a
            seamless and rewarding investment experience.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </div>
  );
};

export default Question;
