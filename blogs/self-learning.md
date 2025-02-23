---
title: "Self-learning"
date: "2025-02-23"
---

## Self-learning

In my 1B term, I struggled to land interviews for a technical role when seeking a summer internship.

Combined with not having any relevant work experience, I definitely believe not having any projects made the job search even harder since I didn't have anything to prove my technical competence.

Hence, during the summer, I set out to self-teach myself full-stack development in order to land a full-stack internship for my next co-op, as I believed it was the easiest way to get myself started in the SWE industry. For context, I only had coding experience from my CS high school courses, Harvard CS50, and a first-year CS course at Waterloo (which taught Racket, the most useless programming language LOL).

![1b job search diagram](/self-learning/1b-job-search-diagram.png)

### Following a course ⛳

The common advice for beginners seeking to build out full-stack projects is to simply pick a projecet and build it. However, I personally find that jumping right in doesn't fit my learning style best, as I'm a big believer in the idea of building a solid foundation, in anything you want to learn. In the context of coding, I also didn't want to get find myself in the common pitfall of tutorial hell.

Hence, I personally decided to look for a structured course to follow before delving into building my own project. After some research and Reddit browsing, I decided to begin my self-learning journey by enroling in a free online course, Full Stack Open, offered by the University of Helsinki. 

![fso page](/self-learning/fso-page.png)

Starting in mid-June and ending late-July, I dedicated roughly 2 hours per day to work through 7 sections of the course, which consisted of:
- Part 0 - Fundamentals of web apps (JavaScript, HTML/CSS, HTTP requests)
- Part 1 - Introduction to React (components, props, useState hook)
- Part 2 - Communicating with server (forms, promises, useEffect hook)
- Part 3 - Programming a server with NodeJS and Express (REST APIs, middleware, MongoDB)
- Part 4 - Testing Express servers, user administration (user authentication, JWT)
- Part 5 - Testing React apps (E2E testing with Cypress)
- Part 6 - Advanced state management (Redux)
- Part 7 - React router and custom hooks (routers, hooks, styling)

![fso submissions](/self-learning/fso-submissions.png)

Looking back, I probably should've skipped the testing sections of the course since it's not as relevant as the other fundamental topics. Overall, I think the course does a good job in teaching the fundamentals of full-stack, as it prompts you to actually apply your knowledge from the readings, as it contained a lot of exercises that makes you slowly build mini projects, like a simple notes app.

### Building a project 🏗️

To apply my learnings, I wanted to build an actual full-stack project from scratch - as I think building an idea from scratch is the best way to get stuck and learn.

#### Backend

I began the project by setting up the backend API with Node.js and Express.js for user authentication, and connecting it with a MongoDB database. 

I also had to write a Python script to fetch financial data for stocks from the Yahoo Finance API to populate the database.

#### Frontend

Next, I began developing the frontend using React and raw CSS alongside a UI library called Material UI. I also integrated a chart library called Chart.js to render nice stock charts and bar graphs.

Building the frontend didn't take very long - but what ended up taking a really long time was refactoring the frontend to use encapulstaed and reusable components. It ended up getting very crazy since I was building out a SPA, where lots of props were being passed around like a blunt.

#### Infrastructure

Afterwards, I began to study the benefits of Docker, and ended up setting Docker Compose to handle running both the backend and frontend. I then decided to deploy the frontend on Vercel since it was free. 

On the other hand, deploying the backend took a lot of time to figure out. Luckily, I was able to get some guidance with the help of the MLOps Engineer from my internship! I then began studying how AWS ECS works and how EC2 instances are used to run the Node.js server on a virtual machine.

#### Architecture
Here's a nice diagram that visualizes the system architecture of the project:

![stockle architecture](/self-learning/stockle-architecture.png)

### Leveraging online resources 🤖

When building Stockle, I also made use of various online tools and resources to help me debug code and understand unfamiliar topics regarding Docker and AWS:

- <ExternalLink url="https://chatgpt.com/" title="ChatGPT" />
- <ExternalLink url="https://github.com/features/copilot" title="Github Copilot" /> (free for students with <ExternalLink url="https://github.com/education/students" title="Github Education" />)
- <ExternalLink url="https://www.youtube.com/" title="Youtube Tutorials" />
  - <ExternalLink url="https://www.youtube.com/watch?v=Gjnup-PuquQ" title="Docker in 100 Seconds">
  - <ExternalLink url="https://youtu.be/J2dB96MUL8s?si=VQJikukzFogwHyZx" title="How to Dockerize a MERN App with Docker Compose" />
  - <ExternalLink url="https://www.youtube.com/watch?v=8XnqgiQaIkU" title="How to upload Docker Images to ECR on AWS in under 10 minutes" />
  - <ExternalLink url="https://www.youtube.com/watch?v=gEo-w6Z3m0I" title="Creating an ECS Cluster from scratch using EC2 instance" />
  - <ExternalLink url="https://www.youtube.com/watch?v=HpIpMj6ssdE" title="Add A Custom Domain on Vercel" />
- <ExternalLink url="https://stackoverflow.com/questions" title="Stack Overflow" />
  - <ExternalLink url="https://stackoverflow.com/questions/40575584/what-is-the-difference-between-amazon-ecs-and-amazon-ec2" title="What is the difference between Amazon ECS and Amazon EC2?" />
  - <ExternalLink url="https://stackoverflow.com/questions/17683458/how-do-i-commit-case-sensitive-only-filename-changes-in-git" title="How do I commit case-sensitive only filename changes in Git?" />

### Landing an internship 📍

I was able to slap this project on my resume for searching my second internship. In the end, I was able to land 4 SWE interviews from 50 applications during the first recruiting cycle, a big improvement from my last internship hunt where I landed 0 SWE interviews from 450+ applications.

I was able to demo the project for all my interviews, which definitely helped me proceed in interviews that consisted of multiple interview stages and ultimately helped me get my internship offer at WSIB Ontario.

![2a job search diagram](/self-learning/2a-job-search-diagram.png)

Overall, I think this experience of struggling to land a single interview, to comfortably landing interviews emphasizes how when you're starting off, your program and school don't matter as much as you might think. With that being said, I still strongly believe that luck plays a huge factor in landing interviews or internships, so I think it's important to not feel discouraged when things don't go your way.

### Closing thoughts 💭

Moving forward in my academic/professional journey, I think it's important that I continually self-teach myself skills I want to learn, and not solely rely on courses in school to teach me everything I know. 

Obivously, there are useful courses that I plan to take, but at the end of the day, taking the initative to learn things you genuinely want to learn outside of school, whether it be through design teams, internships, projects, or online courses, is just as important IMO.
