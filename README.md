# Production-Ready Complete DevOps Workflow

🏠 **A complete, production-ready real estate application** built with modern technologies, enterprise DevOps practices, and comprehensive monitoring.

## 🌟 Project Overview

This project demonstrates the **complete software development lifecycle** from initial development to production ready deployment, including:

- **Modern Frontend Development** (Next.js, React)
- **Containerization & Orchestration** (Docker, Kubernetes)
- **CI/CD Pipeline** (GitHub Actions)
- **Cloud Deployment** (AWS EC2)
- **Enterprise Monitoring** (Prometheus, Grafana)
- **Security & Quality Assurance** (Trivy, ESLint, TypeScript)

---

## 📋 Table of Contents

1. [Application Features](#-application-features)
2. [Technology Stack](#-technology-stack)
3. [Development Journey](#-development-journey)
4. [Architecture Overview](#-architecture-overview)
5. [Getting Started](#-getting-started)
6. [Deployment Guide](#-deployment-guide)
7. [Monitoring & Observability](#-monitoring--observability)
8. [CI/CD Pipeline](#-cicd-pipeline)
9. [Security Features](#-security-features)

---

## 🏠 Application Features

### Frontend Capabilities
- **Homepage**: Hero banner with carousel, featured properties, quick search
- **Property Listings**: Grid layout with advanced filters
- **Property Details**: Image galleries, detailed information, contact modals
- **Favorites & Compare**: Save and compare properties (local state)
- **About Us**: Team information and company story
- **Contact**: Contact forms and map integration
- **Blog**: Real estate articles and insights
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Enterprise Features
- **High Availability**: Multi-replica deployment with load balancing
- **Auto-scaling**: Horizontal Pod Autoscaler (HPA) based on CPU/memory
- **Zero-downtime Deployments**: Rolling updates with health checks
- **Real-time Monitoring**: Comprehensive metrics and alerting
- **Security Scanning**: Automated vulnerability detection

---

## 🛠 Technology Stack

### Frontend Development
- **Next.js 14**: React framework with App Router
- **React 18**: Modern component library
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **Lucide React**: Modern icon library

### Backend & Infrastructure
- **Node.js**: Runtime environment
- **Docker**: Containerization platform
- **Kubernetes**: Container orchestration
- **Nginx**: Reverse proxy and web server

### DevOps & CI/CD
- **GitHub Actions**: Automated workflows
- **GitHub Container Registry**: Image storage
- **Docker Compose**: Local development orchestration
- **Helm**: Kubernetes package management (ready)

### Monitoring & Observability
- **Prometheus**: Metrics collection and storage
- **Grafana**: Data visualization and dashboards
- **Node Exporter**: System metrics collection
- **Kube-State-Metrics**: Kubernetes object metrics
- **Metrics Server**: Resource usage metrics

### Security & Quality
- **Trivy**: Vulnerability scanner
- **ESLint**: Code linting and style enforcement
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality gates
- **RBAC**: Role-based access control

---

## 🚀 Development Journey

This project was built following enterprise development practices, progressing through multiple phases:

### Phase 1: Frontend Development
1. **Project Setup**: Next.js 14 with TypeScript and Tailwind CSS
2. **Component Development**: Reusable UI components with modern React patterns
3. **Responsive Design**: Mobile-first approach with accessibility considerations
4. **State Management**: Local state for favorites and property comparisons
5. **Code Quality**: ESLint, Prettier, and TypeScript configuration

### Phase 2: Containerization
1. **Multi-stage Dockerfile**: Optimized for production with security best practices
2. **Docker Compose**: Local development environment setup
3. **Nginx Integration**: Reverse proxy configuration for production
4. **Security Hardening**: Non-root user, minimal attack surface

### Phase 3: CI/CD Pipeline
1. **GitHub Actions Workflow**: Automated testing and deployment
2. **Quality Gates**: Code linting, formatting, and type checking
3. **Security Scanning**: Trivy vulnerability detection
4. **Container Registry**: Automated image building and pushing
5. **Branch Strategy**: develop, and main branch workflows

### Phase 4: Kubernetes Orchestration
1. **Kubernetes Manifests**: Deployments, Services, Ingress, HPA
2. **Namespace Isolation**: Resource organization and security
3. **Rolling Updates**: Zero-downtime deployment strategy
4. **Auto-scaling**: Horizontal Pod Autoscaler configuration
5. **Health Checks**: Liveness and readiness probes

### Phase 5: Monitoring
1. **Prometheus Setup**: Metrics collection and storage
2. **Grafana Dashboards**: Real-time visualization
3. **System Monitoring**: Node Exporter for infrastructure metrics
4. **Application Monitoring**: Kubernetes and container metrics

---

## 🏗 Architecture Overview

<img width="956" height="420" alt="Architecture Diagram" src="https://github.com/user-attachments/assets/59ded0d8-3a69-4f06-8825-44c60e24bc5e" />

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18+ and npm
- **Docker** and Docker Compose
- **Kubernetes** cluster (local or cloud)
- **kubectl** configured
- **Git** for version control

### Local Development

```bash
# Clone the repository
git clone https://github.com/sksahilhaque/Real-Estate-end-to-end-CI-CD-project.git
cd Real-Estate-end-to-end-CI-CD-project/premium-realty

# Install dependencies
npm install

# Run development server
npm run dev

# Access application
open http://localhost:3000
```

### Docker Development

```bash
# Build and run with Docker Compose
docker-compose up -d

# Access application
open http://localhost

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

---

## 🌐 Deployment Guide

### Kubernetes Deployment

```bash
# Create namespace
kubectl create namespace premium-realty

# Deploy application
kubectl apply -f k8s/manifests/

# Check deployment status
kubectl get pods -n premium-realty

# Access application
kubectl port-forward svc/premium-realty-service 8080:80 -n premium-realty
open http://localhost:8080
```
---

## 📊 Monitoring & Observability

### Monitoring Stack Deployment

```bash
# Deploy monitoring namespace
kubectl apply -f k8s/monitoring/

# Check monitoring pods
kubectl get pods -n monitoring

# Access Prometheus
kubectl port-forward svc/prometheus-service 9090:9090 -n monitoring
open http://localhost:9090

# Access Grafana
kubectl port-forward svc/grafana-service 3001:3000 -n monitoring
open http://localhost:3001
# Login: admin/admin
```

### Key Metrics Monitored

- **Application Health**: Pod status, restart counts, resource usage
- **System Performance**: CPU, memory, disk, network I/O
- **Kubernetes Metrics**: Deployments, services, ingress status
- **Business Metrics**: Request rates, response times, error rates

### Grafana Dashboards

- **Dashboard ID 315**: Kubernetes Cluster Monitoring
- **Dashboard ID 1860**: Node Exporter Full
- **Custom Dashboard**: Application Metrics

---

## 🔄 CI/CD Pipeline

### Automated Workflow Stages

#### 1. **Quality Assurance**
```yaml
- ESLint: Code linting and style enforcement
- Prettier: Code formatting validation  
- TypeScript: Static type checking
- Security Audit: npm vulnerability scanning
```

#### 2. **Security Scanning**
```yaml
- Trivy: Container and filesystem vulnerability scanning
- SAST: Static Application Security Testing
- Dependency Check: Third-party package security
```

#### 3. **Build & Test**
```yaml
- Next.js Build: Production build verification
- Docker Build: Multi-stage container creation
- Image Testing: Container functionality validation
```

#### 4. **Deployment**
```yaml
- Container Registry: Push to GitHub Container Registry
- Staging Deploy: Automatic deployment (develop branch)
- Production Deploy: Manual approval (main branch)
```

### Branch Strategy

- **`main`**: Production releases
- **`develop`**: Staging environment
- **`feature/*`**: Feature development branches

### Triggering Deployments

```bash
# Trigger staging deployment
git push origin develop

# Trigger production deployment
git push origin main
```

---

## 🔒 Security Features

### Container Security
- **Multi-stage Builds**: Minimal production images
- **Non-root User**: Containers run with dedicated user (UID 1001)
- **Read-only Filesystem**: Immutable container filesystem
- **Security Scanning**: Automated vulnerability detection with Trivy
- **Minimal Base Images**: Alpine Linux for reduced attack surface

### Application Security
- **Dependency Scanning**: Regular security audits
- **Code Quality Gates**: Automated security checks in CI/CD
- **Environment Isolation**: Separate namespaces for different environments

---

## 🧪 Testing & Quality Assurance

### Automated Testing
```bash
# Code quality checks
npm run lint              # ESLint code analysis
npm run format            # Prettier code formatting
npm run type-check        # TypeScript validation
npm run security:audit    # Security vulnerability scan
```

### Performance Testing
```bash
# Lighthouse performance audit
npm run analyze           # Bundle analysis

# Load testing (with Apache Bench)
ab -n 1000 -c 10 http://localhost:3000/

# Kubernetes resource testing
kubectl top pods -n premium-realty
kubectl top nodes
```

### Monitoring Validation
```bash
# Test Prometheus metrics
curl http://localhost:9090/api/v1/query?query=up

# Validate Grafana dashboards
curl http://localhost:3001/api/health

# Check application health
kubectl get pods -n premium-realty
kubectl describe hpa premium-realty-hpa -n premium-realty
```

---

## 🎯 Key Achievements

### Technical Excellence
- **Modern Stack**: Latest versions of Next.js, React, and Kubernetes
- **Best Practices**: Following industry standards for security and performance
- **Scalability**: Auto-scaling infrastructure that grows with demand
- **Reliability**: High availability with health checks and monitoring

### DevOps Maturity
- **Automation**: Fully automated CI/CD pipeline
- **Monitoring**: Comprehensive observability stack
- **Security**: Integrated security scanning and compliance

### Business Value
- **Time to Market**: Rapid deployment capabilities
- **Cost Efficiency**: Optimized resource usage with auto-scaling
- **Maintainability**: Clean code architecture and documentation
- **Scalability**: Ready for enterprise-level traffic

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
