/*
 * Specific, bespoke management written commentary content.
 */
import { Box, Heading, Text } from '@chakra-ui/core'

const inputh = 'Thoughts'
const input = 'Specific, bespoke management written commentary content.'
const contentHeadingSize = "md"
const content = [
  {
    section_title: "Streaming",
    section_content: "Strategic commentary concerning your specific objectives and place in the market."
  },
  {
    section_title: "Social",
    section_content: "Strategic commentary concerning your specific objectives and place in the market."
  },
  {
    section_title: "Content platforms",
    section_content: "Commentary covering relevant content platforms tailored to your specific industry verticals."
  },
  {
    section_title: "Thinking outside the box",
    section_content: 'Actionable alternatives you can take to boost your fan base.'
  }
]

const Content = ({header, text}) => (
  /*
   * Render the Thoughts section content header and text areas.
  */
  <Box py={2} >
    <Heading size={contentHeadingSize}>{header}</Heading>
    <Text>{text}</Text>
  </Box>
);


const Thoughts = ( contents ) => {
  return (
    <Box py="4" px="1" maxW="xl" >
      <Heading>{inputh}</Heading>
      <Text>{ input } </Text>
      <br></br>
      {content.map(
        ({section_content = '', section_title = '' }) =>
          section_title && (
            <Content header={section_title} text={section_content}></Content>
          )
      )}
    </Box>
  )
}


export default Thoughts 
