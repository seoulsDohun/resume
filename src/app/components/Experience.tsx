'use client'

import { Stack, Typography, Paper, Box, Grid, Divider } from '@mui/material'

type ProjectItem = {
  project: string
  projectPeriod: string
  description: string
  whatIDid: string[]
  techStack: string[]
}

interface ExperienceItem {
  company: string
  position: string
  period: string
  projects: ProjectItem[]
}

const experiences: ExperienceItem[] = [
  {
    company: '메가존 클라우드',
    position: 'Frontend Developer',
    period: '2022.08 - 현재',
    projects: [
      {
        project: 'ACP 구축 프로젝트',
        projectPeriod: '2023.08 - 현재',
        description:
          '사내 기준정보를 관리하는 시스템(MDM)으로 계약, 결제, 구독, 빌링 등의 추가적인 데이터까지 한 번에 관리를 하는 시스템입니다.',
        whatIDid: [
          'ACP의 사용자 콘솔의 초기 프로젝트 구성 및 화면 개발',
          'ACP의 관리자 콘솔의 초기 프로젝트 구성 및 화면 개발',
          '소나큐브를 도입하여 중복 코드 및 소스코드를 정리하고 모듈화하여 재사용할 수 있는 코드로 관리',
          '사용자와 관리자 콘솔의 공통 컴포넌트를 모듈화하여 재사용하기 위해 nexus를 사용하여 npm으로 프로젝트 관리',
        ],
        techStack: ['React', 'TypeScript', 'Jest', 'Rollup', 'React Query'],
      },
      {
        project: 'MegaHub 구축 프로젝트',
        projectPeriod: '2022.08 - 2023.07',
        description:
          'SAP, Salesforce, Saas 솔루션등 interface 기반으로 서비스 간의 연동을 중간에서 해주는 Saas 솔루션입니다.',
        whatIDid: [
          '고객들의 사용 현황 및 엔드 포인트, Flow 등의 데이터를 확인할 콘솔 화면 개발',
          'react flow를 사용하여 flow 기반의 interface를 생성할 UI 개발',
        ],
        techStack: ['React', 'TypeScript', 'Jest', 'React Query'],
      },
    ],
  },
  {
    company: '비아엘',
    position: 'SI 개발자',
    period: '2020.10 - 2022.07',
    projects: [
      {
        project: '삼성 웰스토리 몰 리뉴얼 프로젝트',
        projectPeriod: '2022.01 - 2022.07',
        description: 'ASIS 웰스토리몰을 리뉴얼하는 프로젝트로 FE, BE를 개발',
        whatIDid: [
          '상품 조회, 상세, 등록, 수정, 삭제 등의 상품 관리 페이지 개발',
          '업체 조회, 상세, 등록, 수정, 삭제 등의 업체 관리 페이지 개발',
          '리뷰 조회, 상세, 등록, 수정, 삭제 등의 리뷰 관리 페이지 개발',
        ],
        techStack: ['JSP', 'JAVA', 'mysql', 'Spring boot'],
      },
      {
        project: '원스토어 글로벌 프로젝트',
        projectPeriod: '2021.08 - 2021.12',
        description:
          '앱 개발자가 자신의 앱을 관리할 수 있는 사이트를 해외 사용자들도 사용할 수 있도록 구조를 개편',
        whatIDid: [
          '글로벌 서비스를 위한 구조 개편',
          'DB 분석 및 설계',
          '인앱, 검증 파트 화면 개발',
        ],
        techStack: ['JSP', 'JAVA', 'Spring', 'Oracle'],
      },
      {
        project: '사방넷 차세대 프로젝트',
        projectPeriod: '2020.10 - 2021.07',
        description: 'PHP로 제작된 사이트를 vue.js와 JAVA Spring Boot로 리뉴얼',
        whatIDid: [
          '프로젝트 내 공통 CSS 개발',
          '회원, 권한, 물류, 업체 파트의 화면 개발',
          '약정, 약관파트 화면 개발',
        ],
        techStack: ['Vue', 'JAVA', 'Spring boot', 'Tibero'],
      },
    ],
  },
]

const Experience = () => {
  return (
    <Stack mt={10} p={3}>
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
              <Typography variant="subtitle1">{exp.position}</Typography>
              <Typography variant="subtitle2">{exp.period}</Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              {exp.projects.map((project: ProjectItem, projectIndex) => (
                <Grid item key={projectIndex} mb={10}>
                  {/* 프로젝트 이름, 기간 */}
                  <Typography variant="h4" fontWeight="600" mb={1}>
                    {project.project}
                  </Typography>
                  <Typography variant="body1" mb={2}>
                    {project.projectPeriod}
                  </Typography>
                  {/* 설명 */}
                  <Typography variant="h6" fontWeight="600" mb={1}>
                    Description.
                  </Typography>
                  <Typography variant="body1" mb={2}>
                    {project.description}
                  </Typography>
                  {/* 프로젝트 한 일 */}
                  <Typography variant="h6" fontWeight="600" mb={1}>
                    What I did.
                  </Typography>
                  <Box component="ul" pl={2} mb={2}>
                    {project.whatIDid.map((item, idx) => (
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
                    {project.techStack.join(', ')}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          {index !== experiences.length - 1 && (
            <Divider sx={{ borderColor: `#2f2f2f` }} />
          )}
        </Box>
      ))}
    </Stack>
  )
}

export default Experience
