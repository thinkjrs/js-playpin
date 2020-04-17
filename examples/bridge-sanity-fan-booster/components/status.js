/*
* This component prints three "doing" and three "done" line item transactions
* taken on the client's behalf to achieve that client's **FanBooster**
* objectives.
*/
import { Avatar, Stack, Box, Heading, Text, List, ListItem } from '@chakra-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGoogle,
  faFacebook,
  faInstagram,
  faApple,
  faBandcamp,
  faTwitter,
  faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons'

const inputh = 'Status'
const input = 'This component prints three "doing" and three "done" line item transactions taken on the client\'s behalf to achieve that client\'s **FanBooster** objectives.'
const doneh= 'Completed'
const doingh = 'Work in progress'
// each label should have an array of with icon and desc key/values
let doing = [
  { icon: faInstagram, desc: 'First doing description' },
  { icon: faTwitter, desc: 'Second doing description' },
  { icon: faYoutubeSquare, desc: 'Third doing description' },
]
let done = [
  { icon: faInstagram, desc: 'First done description' },
  { icon: faTwitter, desc: 'Second done description' },
  { icon: faFacebook, desc: 'Third done description' },
]
const StatusList = ({ data }) => (
  /* takes an array w/keys url and desc */
  <List spacing={3} pt={2}>
    <ListItem>
      <Stack isInline align='center' justifyContent="start">
        <FontAwesomeIcon icon={data[0].icon} />
        <Text p={1}>{data[0].desc}</Text>
      </Stack>
    </ListItem>
    <ListItem>
      <Stack isInline align='center' justifyContent="start">
        <FontAwesomeIcon icon={data[1].icon} />
        <Text p={1}>{data[1].desc}</Text>
      </Stack>
    </ListItem>    
    <ListItem>
      <Stack isInline align='center' justifyContent="start">
        <FontAwesomeIcon icon={data[2].icon} />
        <Text p={1}>{data[2].desc}</Text>
      </Stack>
    </ListItem>
  </List>
)
const Status = ({ }) => (
<Box maxW="xl" py={4} px={1}>
  <Stack isInline align='center' justifyContent="space-between">
    <Box maxW="xl"  width="50%">
      <Heading size="md">{ doingh }</Heading>
      <StatusList data={doing} />
    </Box>
    <Box maxW="xl"  width="50%">
      <Heading size="md">{ doneh }</Heading>
      <StatusList data={done} />
    </Box>
  </Stack>
</Box>
);

export {
    Status
}
