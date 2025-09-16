import { ExternalLink, Github } from '../lib/icons'
import Card from './Card'
import Badge from './Badge'
import Button from './Button'
import LazyImage from './LazyImage'
import { getResponsiveImageProps } from '../lib/imageUtils'

const ProjectCard = ({ project, className = '' }) => {
  const { title, description, image, technologies, liveUrl, githubUrl, featured, projectType } = project

  return (
    <Card className={`h-full flex flex-col ${className}`}>
      {/* Project Image */}
      <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 to-accent/5">
        {image ? (
          <LazyImage
            {...getResponsiveImageProps(image, 'project')}
            alt={`${title} preview`}
            className="w-full h-48 object-contain object-center p-2"
          />
        ) : (
          <div className="w-full h-48 flex items-center justify-center bg-gradient-to-br from-primary to-surface">
            <p className="text-muted text-sm">Project Preview</p>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xl font-semibold text-text mb-2">{title}</h3>
        <p className="text-muted text-sm mb-4 flex-1 leading-relaxed">{description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="default" size="sm">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-4">
          {liveUrl && liveUrl !== '#' && (
            <Button
              variant="primary"
              size="sm"
              className="flex-1"
              onClick={() => window.open(liveUrl, '_blank', 'noopener noreferrer')}
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink size={16} className="mr-2" />
              View Live Site
            </Button>
          )}
          {githubUrl && githubUrl !== '#' && (
            <Button
              variant="outline"
              size="sm"
              className="flex-1"
              onClick={() => window.open(githubUrl, '_blank', 'noopener noreferrer')}
              aria-label={`View ${title} source code`}
            >
              <Github size={16} className="mr-2" />
              View Code
            </Button>
          )}
        </div>

        {/* Project Badges - Bottom */}
        <div className="flex justify-between items-center">
          {projectType && (
            <Badge variant="outline" size="sm">
              {projectType}
            </Badge>
          )}
          {featured && (
            <Badge variant="accent" size="sm">
              Featured
            </Badge>
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
