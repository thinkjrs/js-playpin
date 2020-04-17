/* ## `doing`
* The details section of what management next throughout the
* acquisition campaign. This highlights specific decisions and reasoning
* as they pertain to the given client objectives.
* 
* ## `done`
* This component highlights what steps management took in the past and
* what, if any, measurable results incurred. Furthermore, this allows the
* client to see specifically which line item purchases occured where and
* at what time.
*/
import { Box, Heading, Text, List, ListItem, Stack } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGoogle,
  faFacebook,
  faInstagram,
  faApple,
  faBandcamp,
  faTwitter,
  faYoutubeSquare
} from '@fortawesome/free-brands-svg-icons';

const doing_inputh = 'Doing'
const done_inputh = 'Done'
const doing_input = 'The details section of what management next throughout the acquisition campaign. This highlights specific decisions and reasoning as they pertain to the given client objectives.'
const done_input = 'This component highlights what steps management took in the past and what, if any, measurable results incurred. Furthermore, this allows the client to see specifically which line item purchases occured where and at what time.'
const objContent = {
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

const RenderIcon = ({icon}) => {

  let icons = {
    facebook: faFacebook,
    google: faGoogle,
    twitter: faTwitter,
    youtube: faYoutubeSquare,
    instagram: faInstagram,
    apple: faApple
  }
  let result;
  Object.entries(icons).map(entry => {
    let key = entry[0];
    if (key === icon) {
      result = entry[1] // value
    }
  });
  return (<FontAwesomeIcon size="2x" icon={result} />)
};

const BreakdownItem = ({data={ 
  isDone:false,
  icon:'facebook',
  units:'$0 in ads for',
  metric:'Facebook audience expansion',
  inputs:[
    '',
    ''
  ],
  objective:'',
  impact:'' // TODO - impact should be dynamic
}}) => {
  if (!data) return {}
  let metricType;
  let lineItem;
  if (data.isDone) {
    metricType = "last week"
  } else {
    metricType = ''
  }
  lineItem = `purchasing ad ${data.units} targeting ${data.metric} ${metricType} ${data.impact} in ${data.metric}.`
  return (
    <ListItem>
      <Stack isInline align='center' justifyContent='start'>
        <RenderIcon icon={data.icon} /> 
        <Text pl={4}>{lineItem}</Text>
      </Stack>
    </ListItem> 
  );
};
const Doing = ({ }) => {
  const detailContentDoing = [
    { 
      isDone: false,
      icon: 'instagram',
      units: "$30 in ads for",
      metric: "Instagram 'latest' promotion",
      inputs: [
        'your competition is under-utilizing Facebook followings and you therefore have an opportunity to expand relatively, which should',
        'increase your fan growth'
      ],
      objective: objContent.objective.major.header,
      impact: 'increase'
    },
    {
      isDone: false,
      icon: 'google',
      units: "$30 in ads for",
      metric: "Google Adwords fan acquisition",
      inputs: [
        'your competition is under-utilizing Facebook followings and you therefore have an opportunity to expand relatively, which should',
        'increase your fan growth'
      ],
      objective: objContent.objective.major.header,
      impact: 'increase'
    },
    {
      isDone: false,
      icon: 'twitter',
      units: "$30 in ads for",
      metric: "Targeting females young-adult up to 35",
      inputs: [
        'your competition is under-utilizing Facebook followings and you therefore have an opportunity to expand relatively, which should',
        'increase your fan growth'
      ],
      objective: objContent.objective.major.header,
      impact: 'increase'
    }
  ];
  return (
  <Box py={4} px={1} maxW="xl" >
   <Heading>{ doing_inputh }</Heading>
   <Text>{ doing_input }</Text>
   <List py={4}>
    <BreakdownItem data={detailContentDoing[0]} />
    <BreakdownItem data={detailContentDoing[1]} />
    <BreakdownItem data={detailContentDoing[2]} />
   </List>
  </Box>
  )
};


const Done = ({ }) => {
  const detailContentDone = [
    {
      isDone: true,
      icon: 'facebook',
      units: "$30 in ads for",
      metric: "Facebook fan acquisition",
      inputs: [
        'your competition is under-utilizing Facebook followings and you therefore have an opportunity to expand relatively, which should',
        'increase your fan growth'
      ],
      objective: objContent.objective.major.header,
      impact: 'increase'
    },
    {
      isDone: true,
      icon: 'facebook',
      units: "$30 in ads for",
      metric: "Facebook fan acquisition",
      inputs: [
        'your competition is under-utilizing Facebook followings and you therefore have an opportunity to expand relatively, which should',
        'increase your fan growth'
      ],
      objective: objContent.objective.major.header,
      impact: 'increase'
    },
    {
      isDone: true,
      icon: 'facebook',
      units: "$30 in ads for",
      metric: "Facebook fan acquisition",
      inputs: [
        'your competition is under-utilizing Facebook followings and you therefore have an opportunity to expand relatively, which should',
        'increase your fan growth'
      ],
      objective: objContent.objective.major.header,
      impact: 'increase'
    }
  ];
  return (
    <Box py={4} px={1} maxW="xl" >
     <Heading>{ done_inputh }</Heading>
     <Text>{ done_input }</Text>
     <List py={4}>
      <BreakdownItem data={detailContentDone[0]} />
      <BreakdownItem data={detailContentDone[1]} />
      <BreakdownItem data={detailContentDone[2]} />
     </List>
    </Box>
  );
};


export { 
    Doing,
    Done
}
