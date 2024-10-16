import { Stack, Typography } from "@mui/material"
import Link from "next/link"

const Contact = () => {
  return (
    <Stack p={3}>
      <Typography variant="h2" mb={7} fontWeight="600">
        Contact
      </Typography>
      <Stack component={`ul`} pl={3}>
        <Typography variant="h5" fontWeight="500" mb={1} component={`li`}>
          Email : gkgk586@gmail.com
        </Typography>
        <Typography variant="h5" fontWeight="500" mb={1} component={`li`}>
          Github:  <Link href={`https://github.com/seoulsDohun`} target="_blank">
                {`https://github.com/seoulsDohun`}
              </Link>
        </Typography>
      </Stack>
    </Stack>
  )
}
export default Contact