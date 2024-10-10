'use client'

import { Stack, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'

const About = () => {
  const isMd = useMediaQuery('(min-width: 960px)') // md 이상 여부
  const isXs = useMediaQuery('(max-width: 960px)') // xs 이하 여부

  return (
    <Stack mt={15}>
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
          <Typography variant={`h4`} mb={4} fontWeight={`500`}>
            안녕하세요, 개발자 김도훈이라고 합니다.
          </Typography>
          <Typography variant={`body1`}>안녕하세요~</Typography>
        </Stack>
        {/* 내 사진 */}
        <Stack flex={0.3} alignItems={`center`} mb={4}>
          <img
            src="/assets/myPhoto.jpg"
            alt="My Image"
            style={{
              borderRadius: '50%', // 둥글게 만들기
              width: isMd ? '400px' : '100%', // md 이상일 경우 400px, 그렇지 않으면 100%
              height: isXs ? 'auto' : '100%', // xs 이하일 경우 자동 높이, 그렇지 않으면 100%
              maxWidth: isXs ? '720px' : '400px', // xs일 경우 최대 너비 720px, md일 경우 400px
              aspectRatio: '1 / 1', // 가로 세로 비율 1:1 유지
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default About
