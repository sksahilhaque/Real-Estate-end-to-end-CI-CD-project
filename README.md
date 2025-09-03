# Premium Realty - Modern Real Estate Website

A modern, responsive real estate website built with Next.js, React, and Tailwind CSS with complete CI/CD pipeline and containerized deployment.

## Features

- **Homepage**: Hero banner with carousel, featured properties, quick search
- **Property Listings**: Grid layout with filters and property cards
- **Property Details**: Image gallery, detailed info, contact modal
- **Favorites & Compare**: Save and compare properties (local state)
- **About Us**: Team information and company story
- **Contact**: Contact form and map placeholder
- **Blog**: Real estate articles and insights
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technologies Used

### Frontend

- **Next.js 14**: React framework with App Router
- **React 18**: Component library
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **JavaScript**: ES6+ features

### DevOps & Infrastructure

- **Docker**: Containerization with multi-stage builds
- **GitHub Actions**: CI/CD pipeline automation
- **GitHub Container Registry (GHCR)**: Docker image storage
- **Nginx**: Reverse proxy and web server
- **Docker Compose**: Multi-container orchestration
- **AWS EC2**: Cloud deployment platform

## Customization

### Adding New Properties

Edit `app/data/sampleData.js` and add new property objects to the `properties` array.

### Styling

Modify `tailwind.config.js` for custom colors, animations, and design tokens.

### Components

All components are in `app/components/` and can be easily modified or extended.

## CI/CD Pipeline

The project includes a complete CI/CD pipeline with the following stages:

### 1. Quality Checks

- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting validation
- **TypeScript**: Type checking
- **Security Audit**: npm vulnerability scanning

### 2. Security Scanning

- **Trivy**: Vulnerability scanner for filesystem and dependencies
- **SAST**: Static Application Security Testing

### 3. Build & Test

- **Next.js Build**: Production build verification
- **Caching**: Optimized build caching for faster CI/CD

### 4. Containerization

- **Docker Build**: Multi-stage Docker image creation
- **Image Push**: Automated push to GitHub Container Registry
- **Image Testing**: Automated container functionality testing

### 5. Deployment

- **Staging**: Automatic deployment to staging environment (develop branch)
- **Production**: Manual deployment to production (main branch)

## Docker Setup

### Multi-Stage Dockerfile

- **Builder Stage**: Node.js 18 Alpine for building the application
- **Runtime Stage**: Optimized production image with non-root user
- **Security**: Follows Docker security best practices

### Docker Compose Configuration

```yaml
services:
  premium-realty:
    image: ghcr.io/sksahilhaque/real-estate-end-to-end-ci-cd-project:develop
    environment:
      - NODE_ENV=production
      - PORT=3000
      - NEXT_TELEMETRY_DISABLED=1

  nginx:
    image: nginx:alpine
    ports:
      - '80:80'
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
```

## Deployment

### Local Development

```bash
npm install
npm run dev
# Access at http://localhost:3000
```

### Docker Local Testing

```bash
# Pull and run the containerized application
docker pull ghcr.io/sksahilhaque/real-estate-end-to-end-ci-cd-project:develop
docker-compose up -d
# Access at http://localhost
```

### Production Deployment (EC2)

```bash
# Clone repository
git clone https://github.com/sksahilhaque/Real-Estate-end-to-end-CI-CD-project.git
cd Real-Estate-end-to-end-CI-CD-project/premium-realty

# Deploy with Docker Compose
docker-compose up -d
# Access at http://YOUR_EC2_PUBLIC_IP
```

## Infrastructure

### Nginx Configuration

- **Reverse Proxy**: Routes traffic from port 80 to Next.js app on port 3000
- **Load Balancing**: Ready for horizontal scaling
- **Security Headers**: Production-ready security configuration
- **Static File Serving**: Optimized for performance

### Security Features

- **Non-root Container**: Runs with dedicated nextjs user
- **Minimal Attack Surface**: Alpine Linux base images
- **Secrets Management**: GitHub secrets for container registry
- **Vulnerability Scanning**: Automated security checks

## Monitoring & Observability

### Available Commands

```bash
# Check container status
docker-compose ps

# View application logs
docker-compose logs premium-realty

# View nginx logs
docker-compose logs nginx

# Monitor resource usage
docker stats
```

## Branch Strategy

- **main**: Production deployments
- **develop**: Staging deployments with full CI/CD
- **feature/\***: Feature development branches

## Environment Configuration

### Production Environment Variables

- `NODE_ENV=production`
- `PORT=3000`
- `NEXT_TELEMETRY_DISABLED=1`
- `HOSTNAME=0.0.0.0`

## Project Status

✅ **Frontend Development**: Complete Next.js application with responsive design  
✅ **Containerization**: Multi-stage Docker setup with security best practices  
✅ **CI/CD Pipeline**: Automated testing, building, and deployment  
✅ **Container Registry**: GitHub Container Registry integration  
✅ **Reverse Proxy**: Nginx configuration for production deployment  
✅ **Cloud Deployment**: AWS EC2 deployment with Docker Compose  
✅ **Security Scanning**: Automated vulnerability detection  
✅ **Code Quality**: ESLint, Prettier, and TypeScript integration
