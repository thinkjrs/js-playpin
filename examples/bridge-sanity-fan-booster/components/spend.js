/*
* This is a spend "hero" of sorts for the **FanBooster** product which
* demonstrates the target specimen's project spend cumulatively and
* remaining.
*/
import dynamic from 'next/dynamic'
import { Stack, Box, Heading, Text } from '@chakra-ui/core'



const inputh = 'Project Spend'
const input = `This is a spend "hero" of sorts for the FanBooster product which demonstrates the target specimen\'s project spend cumulatively and remaining.`

const spendData = { // API call to get data
    total: 3000,
    spent: 1991,
    remaining: 1009
}

const DynPlot = dynamic(import('./plot'), {
    ssr: false
})

const spendToDateHeading = `Cumulative Project Spend`
const spendRemaining = `Project Spend Remaining`
const Spend = ({ }) => (
    <Box py="4" px="1" maxW="xl" >
      <Stack isInline align='center' justifyContent="space-between">
        <Heading> {inputh} </Heading>
        <Heading textAlign="right">${spendData.total}</Heading>
      </Stack>
      <Text>{ input }</Text>
      <Stack isInline align='center' py={4} justifyContent="space-between" height="300px">
          <Box >
            <Stack align='center' justifyContent='space-between'>
                <Heading as="h6" size="md">{ spendToDateHeading }</Heading>
                <Text fontWeight="800">${spendData.spent}</Text>
                <Heading as="h6" size="md">{ spendRemaining }</Heading>
                <Text fontWeight="800">${spendData.remaining}</Text>
            </Stack>
          </Box>
          <div style={{width: "42%"}}>
            <DynPlot />
          </div>
      </Stack>
    </Box>
);

export {
    Spend 
}
