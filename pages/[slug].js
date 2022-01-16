import { Box, Container, Grid, Flex, Heading, Button, Link } from 'theme-ui'
import { useRouter } from 'next/router'

export default function App({}) {
  const router = useRouter()
  return (
    <Grid sx={{ gap: '20px', textAlign: 'center', my: 4 }}>
      <Heading as="h1" sx={{ fontSize: 5 }}>
        Innovation Challenge
      </Heading>

      <Box
        sx={{
          maxWidth: '600px',
          mx: 'auto',
          bg: 'sunken',
          p: 3,
          borderRadius: 4
        }}
      >
        <Link target="_blank" href="https://innovation-challenge.co">
          The Innovation Challenge
        </Link>{' '}
        is an entrepreneurship competition designed for secondary students in
        APAC. It is being ran by the <Link target="_blank" href="https://innovationcircuit.com">Innovation Circuit</Link>, a nonprofit founded by students in Singapore. It is funded through a{' '}
        <Link target="_blank" href="https://www.ibo.org/programmes/middle-years-programme/dr-siva-kumari-myp-student-innovators-grant/dr-siva-kumari-myp-student-innovators-grant-finalists-2021/">
          MYP Innovator's Grant
        </Link>{' '}
        from the IBO, all of our finances are transparent{' '}
        <Link target="_blank" href="https://bank.hackclub.com/the-innovation-circuit">
          here
        </Link>
        .
      </Box>
      <Button
        as="a"
        download
        href={`/${router.query.slug?.toUpperCase()}.pdf`}
        sx={{ width: 'fit-content', margin: 'auto', borderRadius: 4 }}
      >
        Download Poster
      </Button>
      <iframe
        src={`${router.query.slug?.toUpperCase()}.pdf`}
        style={{ height: '90vh', width: '40vw', margin: 'auto' }}
      />
    </Grid>
  )
}
