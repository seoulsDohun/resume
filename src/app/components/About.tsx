import { Stack, Typography } from '@mui/material'
import Image from 'next/image'

const About = () => {
  return (
    <Stack mt={15} p={3}>
      {/* 제목 */}
      <Typography variant={`h3`} mb={7} fontWeight={`600`}>
        기술 이력서
      </Typography>

      {/* About */}
      <Stack
        flexDirection={{
          md: 'row',
          sm: 'column-reverse',
          xs: 'column-reverse',
        }}
      >
        <Stack flex={0.7}>
          <Typography variant={`h4`} mb={4} fontWeight={`600`}>
            안녕하세요, 개발자 김도훈이라고 합니다.
          </Typography>
          <Typography variant={`h6`} fontWeight={`500`}>
            {new Date().getFullYear() - 2020}년차 웹 프론트엔드 개발자로 일하고
            있습니다.
          </Typography>
          <Typography variant={`h6`} fontWeight={`500`}>
            사용자 친화적 UI/UX를 고민하고 중요하게 생각하며, 웹 프론트엔드
            개발을 하고 있습니다.
          </Typography>
          <Typography variant={`h6`} fontWeight={`500`}>
            비즈니스 가치를 중요하게 생각하며, 빠르게 변화하는 기술 트렌드에
            대응하여 빠르게 학습하고 적용하는 것을 즐깁니다.
          </Typography>
          <Typography variant={`h6`} fontWeight={`500`}>
            주도적으로 업무를 진행할 수 있는 환경을 선호합니다.
          </Typography>
          <Typography variant={`h6`} fontWeight={`500`}>
            개발자로서 고객이 만족하는 서비스를 제공하는 것만큼 팀원들의 성장을
            함께 이루는 것도 중요하다고 생각합니다. 어느 한쪽에 치우치지 않고,
            고객에게 좋은 서비스를 제공하면서 팀원들의 성장도 함께 이끌어낼 수
            있는 조화를 이루는 데 관심이 많습니다.
          </Typography>
        </Stack>
        {/* 내 사진 */}
        <Stack flex={0.3} alignItems={`center`} mb={4} ml={3}>
          <Stack
            sx={{
              width: `400px`,
              maxWidth: '400px',
              aspectRatio: '1 / 1',
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <Image
              src="myPhoto.jpg"
              alt="My Image"
              layout="fill"
              objectFit="cover"
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default About
