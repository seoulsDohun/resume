import { Divider, Grid, Stack, Typography } from '@mui/material'

interface SkillItem {
  title: string
  description: string[]
}

const skills: SkillItem[] = [
  {
    title: 'Overall',
    description: [
      '사용자 친화적인 인터페이스를 선호합니다.',
      '항상 최신 기술에 관심을 가지고 학습하고 적용하는 것을 좋아합니다.',
      '업무에 필요한 기술은 빠르게 습득하고 적용할 수 있습니다.',
    ],
  },
  {
    title: 'Communication',
    description: [
      '직위나 포지션에 상관없이 적극적으로 의견을 표현합니다.',
      '적은 대화보다는 활발한 소통을 선호합니다.',
      '배려와 존중을 중요시합니다.',
    ],
  },
  {
    title: 'React',
    description: [
      'React Hooks를 능숙하게 사용하며, 커스텀 Hooks를 정의할 수 있습니다.',
      'React 컴포넌트의 재사용성을 높이기 위해 노력합니다.',
      'Storybook을 사용하여 컴포넌트를 디자인하고 문서화합니다.',
      'Figma, Zeplin 등 디자인 툴을 활용하여 디자이너와 협업합니다.',
      '복잡한 폼 데이터를 관리하기 위해 react-hook-form을 능숙하게 사용합니다.',
      '상태 관리를 위해 Recoil을 사용할 수 있습니다.',
      '비동기 처리 및 캐시 관리를 위해 React Query를 사용할 수 있습니다.',
    ],
  },
]

const Skills = () => {
  return (
    <Stack p={3}>
      <Typography variant="h2" mb={7} fontWeight="600">
        Skills
      </Typography>
      {skills.map((skill, index) => (
        <Grid key={index}>
          <Grid mb={3}>
            <Typography variant="h4" fontWeight="600" mb={1}>
              {skill.title}
            </Typography>
          </Grid>
          <Grid component={`ul`} pl={3}>
            {skill.description.map((desc, index) => (
              <Typography component={`li`} variant="h6" key={index}>
                {desc}
              </Typography>
            ))}
          </Grid>
          <Divider sx={{ borderColor: `#2f2f2f`, my: 8 }} />
        </Grid>
      ))}
    </Stack>
  )
}
export default Skills
