import { Box, Container, Grid, Flex, Heading } from 'theme-ui'

function IFrame({ src }) {
  return (
    <Box sx={{ mx: 4, my: 3, width: '288px' }} as="a" href={src.replace(".pdf", "")}>
      <iframe src={src} height="400" width="288" style={{pointerEvents: 'none'}} />
    </Box>
  )
}

export default function App({ files }) {
  return (
    <Container>
      <Heading as="h1" sx={{ textAlign: 'center', fontSize: 6, mt: 4 }}>
        Innovation Challenge Posters
      </Heading>
      <Flex columns={4} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        {files.map(pdf => (
          <IFrame src={pdf} key={pdf} />
        ))}
      </Flex>
    </Container>
  )
}

export async function getStaticProps() {
  const fs = require('fs')
  let files = fs.readdirSync('./public')
  return { props: { files } }
}
