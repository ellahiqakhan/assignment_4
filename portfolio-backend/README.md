# Portfolio Backend API

A RESTful API for managing portfolio data including education, skills, projects, and work experience.

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS

## Setup Instructions

1. Clone the repository
2. Install dependencies
   ```
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```
4. Start the server
   ```
   npm run dev
   ```

## API Endpoints

### Education

- `GET /api/education` - Get all education records
- `GET /api/education/:id` - Get a single education record
- `POST /api/education` - Create a new education record
- `PUT /api/education/:id` - Update an education record
- `DELETE /api/education/:id` - Delete an education record

### Skills

- `GET /api/skills` - Get all skills
- `GET /api/skills/:id` - Get a single skill
- `POST /api/skills` - Create a new skill
- `PUT /api/skills/:id` - Update a skill
- `DELETE /api/skills/:id` - Delete a skill

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project
- `POST /api/projects` - Create a new project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### Work Experience

- `GET /api/experience` - Get all work experiences
- `GET /api/experience/:id` - Get a single work experience
- `POST /api/experience` - Create a new work experience
- `PUT /api/experience/:id` - Update a work experience
- `DELETE /api/experience/:id` - Delete a work experience

## Models

### Education

```
{
  "institution": "University Name",
  "degree": "Bachelor of Science",
  "field": "Computer Science",
  "startDate": "2019-09-01",
  "endDate": "2023-06-30",
  "current": false,
  "description": "Studied computer science with a focus on...",
  "location": "City, Country",
  "gpa": "3.8"
}
```

### Skill

```
{
  "name": "JavaScript",
  "level": "Expert",
  "category": "Frontend",
  "yearsOfExperience": 5
}
```

### Project

```
{
  "title": "Portfolio Website",
  "description": "A personal portfolio website built with React and Node.js",
  "image": "portfolio.jpg",
  "technologies": ["React", "Node.js", "Express", "MongoDB"],
  "githubUrl": "https://github.com/username/portfolio",
  "liveUrl": "https://portfolio.example.com",
  "startDate": "2023-01-01",
  "endDate": "2023-02-15",
  "featured": true
}
```

### Experience

```
{
  "company": "Company Name",
  "position": "Software Developer",
  "location": "City, Country",
  "description": "Worked on developing...",
  "responsibilities": [
    "Developed and maintained web applications",
    "Collaborated with cross-functional teams"
  ],
  "startDate": "2021-06-01",
  "endDate": "2023-01-31",
  "current": false,
  "technologies": ["JavaScript", "React", "Node.js"]
}
``` 