import { Stack, Typography, Paper, Box, Grid, Divider } from '@mui/material'

type ProjectItem = {
  project: string
  projectPeriod: string
  description: string
  whatIDid: string[]
  achievements?: string[]
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
          'ACP 사용자,관리자 콘솔의 초기 프로젝트 설정 및 UI 개발',
          '소나큐브 도입을 통해 중복 코드 제거 및 소스 코드 모듈화로 재사용성 향상',
        ],
        achievements: [
          '사내 MDM 시스템을 프로토타입으로 제작하여 여러 플랫폼에서 관리되던 계열사의 정보를 통합 관리할 수 있게 했습니다.',
          '사내 상품, 오퍼링, 계약 관리를 기준 정보로 통일하여 UI로 제공하고, 대시보드를 통해 영업팀의 업무 효율을 향상시켰습니다.',
          '소나큐브 도입으로 중복 코드를 25%에서 15%로 줄였으며, 코드 모듈화를 통해 유지보수성을 개선했습니다.',
          'FE와 BE의 스펙 관리를 위해 OpenAPI Generator를 도입하여 YAML 파일을 수정함으로써 DTO, 모델, API 관리의 자동화를 이루었습니다. 이를 통해 반복적인 작업과 실수를 줄일 수 있었습니다.',
        ],
        techStack: ['React', 'TypeScript', 'Jest', 'React Query'],
      },
      {
        project: 'MegaHub 구축 프로젝트',
        projectPeriod: '2022.08 - 2023.07',
        description:
          'SAP, Salesforce, Saas 솔루션등 interface 기반으로 서비스 간의 연동을 중간에서 해주는 Saas 솔루션입니다.',
        whatIDid: [
          '고객 사용 현황 및 엔드포인트, 플로우 데이터를 확인할 수 있는 콘솔 화면 개발',
          'React Flow를 활용하여 플로우 기반 인터페이스 UI 개발',
          '기존 및 신규 제품을 위한 공통 컴포넌트를 모듈화하여 재사용성을 높이고, Nexus를 통해 npm으로 프로젝트 관리',
        ],
        achievements: [
          '공통 컴포넌트를 모듈화하여 라이브러리로 관리함으로써 중복 코드를 제거하고, 생산성을 40% 이상 향상시켰습니다.',
          '기존에 UI가 없어 Postman과 DB로 테스트하던 인터페이스 구축 작업을 UI로 전환하여, 일주일 이상 걸리던 작업을 3~4시간 만에 완료할 수 있게 되었습니다. 이로 인해 실수도 줄어들었습니다.',
          'Nexus를 도입하여 라이브러리를 프라이빗하게 관리하고 모듈화하여 재사용성을 높였습니다.',
        ],
        techStack: ['React', 'TypeScript', 'Jest', 'Rollup', 'React Query'],
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
      <Typography variant="h2" mb={7} fontWeight="600">
        Work Experience
      </Typography>
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ pt: 3 }}>
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
                  {/* 성과 */}
                  {project.achievements && (
                    <>
                      <Typography variant="h6" fontWeight="600" mb={1}>
                        Achievements.
                      </Typography>
                      <Box component="ul" pl={2} mb={2}>
                        {project.achievements.map((item, idx) => (
                          <Typography component="li" key={idx}>
                            {item}
                          </Typography>
                        ))}
                      </Box>
                    </>
                  )}

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
          <Divider sx={{ borderColor: `#2f2f2f`, mb: 3 }} />
        </Box>
      ))}
    </Stack>
  )
}

export default Experience
