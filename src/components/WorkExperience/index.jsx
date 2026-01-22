import {
  Company,
  Project,
  SlideList,
  StyledSection,
  StyledTitle,
  Wrapper,
} from './WorkExperience.styled';

import { useTranslation } from 'react-i18next';

import { projects } from 'constants/constants';

const WorkExperience = () => {
  const { t } = useTranslation();

  return (
    <StyledSection id="experience">
      <StyledTitle>{t('Work Experience')}</StyledTitle>
      <Wrapper>
        <Company>
          <h2>Leo•Source</h2>
          <p>Februar 2024 - Present</p>
        </Company>
        <SlideList
          {...{
            dots: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
          }}
        >
          {projects.map((project) => (
            <Project key={project.id}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul>
                {project.responsibilities.map((resp, index) => (
                  <li key={index}>{resp}</li>
                ))}
              </ul>
              <div>
                <h4>Technologies:</h4>
                <div>
                  {project.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </Project>
          ))}
        </SlideList>
      </Wrapper>
    </StyledSection>
  );
};

export default WorkExperience;
