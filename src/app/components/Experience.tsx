'use client'

import { Stack, Typography, Paper, Box, Grid } from '@mui/material'

interface ExperienceItem {
  company: string
  position: string
  period: string
  project: string
  projectPeriod: string
  description: string
  whatIDid: string[]
  techStack: string[]
}

const experiences: ExperienceItem[] = [
  {
    company: '메가존 클라우드',
    position: 'Frontend Developer',
    period: '2022.08 - 현재',
    project: 'ACP 구축 프로젝트',
    projectPeriod: '2023.08 - 현재',
    description:
      '설명',
    whatIDid: [
      '설명1',
      '설명2',
      '설명3',
    ],
    techStack: ['TypeScript', 'Jest', 'Rollup'],
  },
  {
    company: '비아엘',
    position: 'SI 개발자',
    period: '2020.10 - 2022.07',
    project: '비아엘 웹 프로젝트',
    projectPeriod: '2020.10 - 2022.07',
    description: '설명',
    whatIDid: [
      '설명1',
      '설명2',
      '설명3',
    ],
    techStack: ['TypeScript', 'React', 'Next.js', 'MDX'],
  },
  // 나머지 경력 항목들도 같은 형식으로 추가...
]

const Experience = () => {
  return (
    <Stack mt={15}>
      <Typography variant="h3" mb={7} fontWeight="600">
        Work Experience
      </Typography>
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ mb: 4, p: 3, pl: 0 }}>
          {/* 회사 이름, 직책, 기간 */}
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography variant="h4" fontWeight="600" mb={1}>
                {exp.company}
              </Typography>
              <Typography variant="subtitle1">
                {exp.position}
              </Typography>
              <Typography variant="subtitle2">{exp.period}</Typography>
            </Grid>
            
            <Grid item xs={12} md={8}>
              {/* 프로젝트 이름, 기간 */}
              <Typography variant="h4" fontWeight="600" mb={1}>
                {exp.project}
              </Typography>
              <Typography variant="body1" mb={2}>
                {exp.projectPeriod}
              </Typography>

              {/* 설명 */}
              <Typography variant="h6" fontWeight="600" mb={1}>
                Description.
              </Typography>
              <Typography variant="body1" mb={2}>
                {exp.description}
              </Typography>

              {/* 프로젝트 한 일 */}
              <Typography variant="h6" fontWeight="600" mb={1}>
                What I did.
              </Typography>
              <Box component="ul" pl={2} mb={2}>
                {exp.whatIDid.map((item, idx) => (
                  <Typography component="li" key={idx}>
                    {item}
                  </Typography>
                ))}
              </Box>

              {/* 사용한 기술 */}
              <Typography variant="h6" fontWeight="600" mb={1}>
                Tech Stack.
              </Typography>
              <Typography variant="body1">
                {exp.techStack.join(', ')}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </Stack>
  )
}

export default Experience
