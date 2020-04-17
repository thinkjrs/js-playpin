/*
* Each client project contains at least one major, specific fan enhancement
* objective, possibly accompanied by one or two minor objectives.
*/
import {
  Accordion,
  AccordionItem,
   AccordionHeader,
   AccordionPanel,
   AccordionIcon,
   Box,
   Heading,
   Text
} from '@chakra-ui/core';
// TODO - replace dummy data with API call issue #7
const inputh = 'Objectives'
const content = {
  objective: {
    major: {
      header: 'This is your key focus',
      text: 'This describes your key objective'
    },
    minor: [
      {
        header: 'This is a secondary objective', 
        text: 'This describes your secondary objective' 
      },
      {
        header: 'This is another secondary objective',
        text: 'This describes another secondary objective'
      }
    ]
  }
}

const ObjInput = ({content}) => (
  <Text>
    {content}
  </Text>
);
const AccordionFactory = ({objHeader, objText, defaultIndex}) => {
  /* A factory to produce the appropriate Accordion-based
   * Project Objective.
   * objHeader: string
   * objText: string
   * defaultIndex: bool (default: undefined ~ accordion not expanded)
   */
  let accordion;
  if (defaultIndex) {
    accordion = ( 
      <Accordion defaultIndex={[0]} allowMultiple maxW="xl">
        <AccordionItem>
          <AccordionHeader py={1} px={0}>
            <Box flex={1} textAlign="left" maxW="xl">
              <Heading size="md">{objHeader}</Heading>
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel py={4} px={0}>
            <ObjInput content={objText}/>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  } else {
    accordion = ( 
      <Accordion allowMultiple maxW="xl">
        <AccordionItem>
          <AccordionHeader py={1} px={0}>
            <Box flex={1} textAlign="left" maxW="xl">
              <Heading size="md">{objHeader}</Heading>
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel py={4} px={0}>
            <ObjInput content={objText}/>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    );
  }
  return accordion
};
const Objectives = ({ }) => (
  <Box maxW="xl" py={4} px={1} >
    <Heading>{ inputh }</Heading>
    <Text>
      Track your goals, broken down by importance and their respective key performance indicators.
    </Text>
    <br></br>
    <AccordionFactory
    objHeader={content.objective.major.header}
    objText={content.objective.major.text}
    defaultIndex={true}
    />
    <AccordionFactory
    objHeader={content.objective.minor[0].header}
    objText={content.objective.minor[0].text}
    />
    <AccordionFactory
    objHeader={content.objective.minor[1].header}
    objText={content.objective.minor[1].text}
    />
  </Box>
);

export {
    Objectives 
}
