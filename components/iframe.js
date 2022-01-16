import { Box } from 'theme-ui'

export default function IFrame() {
  return (
      <Box sx={{mx: 4}}>
        <iframe src="/BND.pdf" height="400" width="288" />
      </Box>
  )
}
