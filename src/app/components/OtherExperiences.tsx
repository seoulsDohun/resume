import { Divider, Grid, Link, Stack, Typography } from '@mui/material'

interface OtherExperienceItem {
  company: string
  position?: string
  period: string
  description: string[]
  link?: string
  linkText?: string
}

const otherExperiences: OtherExperienceItem[] = [
  {
    company: 'KG IT BANK 자바기반 웹 개발자 양성 과정',
    period: '2020.02 ~ 2022.08',
    description: [
      '웹 개발자가 되기 위해 실무에서 사용하는 기술과 프로젝트를 학습했습니다.',
      '취업 후 바로 프로젝트에 투입될 수 있는 실력을 기르기 위해 수강했으며, 코딩 테스트 준비를 위해 수업 후 스터디를 조직하여 진행했습니다.',
    ],
  },
  {
    company: 'KG IT BANK 기초 교육 수강',
    period: '2019.10 ~ 2020.01',
    description: [
      'Python, Java, Linux, JSP 등 웹 기초 프로그래밍을 수강했습니다. 아래 링크는 그 당시 공부한 내용을 블로그에 복습한 것입니다.',
    ],
    link: 'https://blog.naver.com/apfhd586',
    linkText: '개인 공부 블로그',
  },
  {
    company: '강릉원주대학교',
    position: '세라믹신소재 공학과',
    period: '2013.03 ~ 2020.02',
    description: [
      '수학과 과학에 대한 관심으로 공대에 진학했습니다.',
      '군 입대를 위해 휴학했으나, 입대일이 예상보다 지연되어 휴학 기간이 길어졌고, 그로 인해 졸업이 늦어졌습니다.',
    ],
  },
]

const OtherExperiences = () => {
  return (
    <Stack p={3}>
      <Typography variant="h2" mb={7} fontWeight="600">
        Other Experiences
      </Typography>
      {otherExperiences.map((exp, index) => (
        <Grid spacing={3} key={index}>
          <Grid item>
            <Typography variant="h4" fontWeight="600" mb={1}>
              {exp.company}
            </Typography>
            <Typography variant="subtitle1">{exp.position}</Typography>
            <Typography variant="subtitle2">{exp.period}</Typography>
          </Grid>
          <Grid item mt={3}>
            {exp.description.map((desc, index) => (
              <Typography variant="h6" key={index}>
                {desc}
              </Typography>
            ))}
            {exp.link && (
              <Link href={exp.link} target="_blank">
                {exp.linkText}
              </Link>
            )}
          </Grid>
          <Divider sx={{ borderColor: `#2f2f2f`, my: 8 }} />
        </Grid>
      ))}
    </Stack>
  )
}

export default OtherExperiences
