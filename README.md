# Epass - Visitor Management System

A comprehensive QR-based visitor management system for organizations, hotels, and apartments. Built with Django REST Framework backend and React frontend, fully containerized with Docker.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Author](#author)

## Overview

Epass is a QR-based entry management system that allows users to easily and securely enter and exit premises. It is a cloud-based system that can be accessed from anywhere with an internet connection.

The system issues digital passes containing QR codes that are scanned at entrances. The reader verifies the authenticity of the pass and allows the user to enter, providing complete audit trails and visitor management capabilities.

## Features

### Visitor Management
- QR code-based check-in/check-out
- Visitor registration with KYC verification
- Visit history tracking with search and filtering
- Identity document upload and verification

### Organization Features
- Multi-organization support
- Staff management with role-based access
- Visitor approval workflow
- Real-time visit status updates

### Reporting & Export
- Export visitor data to CSV
- Generate PDF reports with custom styling
- Date range filtering
- Search across visitor name, purpose, mobile, vehicle number

### Notifications
- Firebase Cloud Messaging (FCM) integration
- Push notifications for visitor arrivals
- Real-time updates

## Tech Stack

### Backend
| Technology | Purpose |
|------------|---------|
| Django 4.2 | Web framework |
| Django REST Framework | RESTful API |
| SimpleJWT | JWT authentication |
| PostgreSQL | Database |
| Gunicorn | WSGI server |
| drf-yasg | Swagger/OpenAPI docs |

### Frontend
| Technology | Purpose |
|------------|---------|
| React | UI library |
| Next.js | React framework |

### DevOps & Infrastructure
| Technology | Purpose |
|------------|---------|
| Docker | Containerization |
| Docker Compose | Multi-container orchestration |
| Nginx | Reverse proxy & load balancing |
| WhiteNoise | Static file serving |

### Additional Libraries
- **qrcode / pyzbar** - QR code generation & scanning
- **xhtml2pdf / reportlab** - PDF generation
- **Pillow** - Image processing
- **pandas** - Data manipulation for reports
- **Firebase Admin** - Push notifications
- **CKEditor** - Rich text editor

## Project Structure

```
Visit-Management/
├── backend/
│   └── api_service/
│       ├── api_service/      # Django settings & URLs
│       ├── user/             # User authentication
│       ├── organization/     # Organization management
│       ├── visitor/          # Visitor & KYC management
│       ├── staff_of_org/     # Staff management
│       ├── notification/     # Push notifications
│       ├── common/           # Shared utilities
│       └── requirements.txt  # Python dependencies
├── frontend/
│   └── organization-site/    # React/Next.js frontend
├── docker/
│   ├── backend/              # Backend Dockerfiles
│   ├── frontend/             # Frontend Dockerfiles
│   └── nginx/                # Nginx Dockerfile
├── nginx/
│   └── nginx.conf            # Nginx configuration
├── compose.yml               # Production compose
└── compose-dev.yml           # Development compose
```

## Getting Started

### Prerequisites

- Docker
- Docker Compose

### Installation

1. Clone this repository:

```bash
git clone https://github.com/NeeteshNG/Visit-Management.git
cd Visit-Management
```

2. Build the Docker containers:

```bash
docker-compose -f compose-dev.yml build
```

## Usage

### Running the Project

To run the entire project, including all containers and services:

```bash
docker-compose -f compose-dev.yml up
```

### Running a Specific Container

Access a container's shell:

```bash
docker-compose -f compose-dev.yml exec backend-api-service bash
```

### Django Management Commands

```bash
# Run migrations
docker-compose -f compose-dev.yml exec backend-api-service python manage.py migrate

# Create superuser
docker-compose -f compose-dev.yml exec backend-api-service python manage.py createsuperuser

# Collect static files
docker-compose -f compose-dev.yml exec backend-api-service python manage.py collectstatic
```

### Accessing the Applications

**Frontend Sites:**
| Site | URL |
|------|-----|
| Main Site | http://localhost:3000 |
| Admin Site | http://localhost:3001 |
| Organization Site | http://localhost:3002 |
| Visitor Site | http://localhost:3003 |

**Backend Services:**
| Service | URL |
|---------|-----|
| Visitor Service | http://localhost:8001 |
| Organization Service | http://localhost:8002 |
| User Service | http://localhost:8003 |
| Admin Service | http://localhost:8004 |

## API Documentation

Access API documentation at:

| Format | URL |
|--------|-----|
| Swagger UI | http://localhost/api-docs/schema-swagger-ui |
| ReDoc | http://localhost/redoc/schema-redoc |
| JSON Schema | http://localhost/api-docs/schema-json |

## Author

**Neetesh Gupta**

- GitHub: [@NeeteshNG](https://github.com/NeeteshNG)
- LinkedIn: [neetesh-gupta](https://linkedin.com/in/neetesh-gupta)

## License

Epass Private License

---

**Resources:**
- [Download Docker](https://www.docker.com/get-started)
- [Download Docker Compose](https://docs.docker.com/compose/install/)
