import {
  ProjectContainer,
  ContentAndImage,
  ProjectImage,
  ProjectContent,
  ProjectTitle,
  ProjectDescription,
  IconsSection,
  Icon,
  ButtonSection,
  Button,
} from "./style";

function ProjetosItem({
  imageUrl,
  title,
  description,
  icons = [],
  githubLink,
  websiteLink,
}) {
  return (
    <>
      <ProjectContainer>
        <ContentAndImage>
          <ProjectImage src={imageUrl} alt={title} />
          <ProjectContent>
            <ProjectTitle>{title}</ProjectTitle>
            <ProjectDescription>{description}</ProjectDescription>
          </ProjectContent>
        </ContentAndImage>
        {icons.length > 0 && (
          <IconsSection>
            {icons.map((icon, index) => (
              <Icon key={index} src={icon} alt={`Icon ${index}`} />
            ))}
          </IconsSection>
        )}{" "}
        <ButtonSection>
          {githubLink && (
            <Button
              className="github"
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          )}
          {websiteLink && (
            <Button
              className="website"
              href={websiteLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </Button>
          )}{" "}
        </ButtonSection>
      </ProjectContainer>
    </>
  );
}

export default ProjetosItem;
