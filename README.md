# RealEstate


## 📄 Overview
This is a full-stack web application consisting of a public-facing **Landing Page** and a restricted **Admin Panel**. The application allows a business to showcase projects and client testimonials dynamically, while gathering potential leads through contact forms and newsletter subscriptions.

## 🚀 Live Demo
https://real-estate-alpha-roan-14.vercel.app/
## 🛠 Tech Stack
* **Frontend:** React.js, CSS3 (or Tailwind/Bootstrap)
* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas


### 1. Landing Page
The landing page dynamically fetches content from the backend to ensure data is always up-to-date.
* **"Our Projects" Section:** Displays a list of projects fetched from the database (includes Image, Name, and Description).
* **"Happy Clients" Section:** Showcases client testimonials (includes Image, Name, Description, and Designation).
* **Contact Form:** Allows users to submit inquiries (Fields: Full Name, Email, Mobile Number, City).
* **Newsletter Subscription:** Simple input field to capture email addresses for the mailing list.

### 2. Admin Panel
A dashboard for administrators to manage website content and view incoming leads.
* **Project Management:** Add new projects (Image, Name, Description).
* **Client Management:** Add new client testimonials (Image, Name, Description, Designation).
* **Contact Form Responses:** View a list of all submitted inquiries containing user details.
* **Subscription Management:** View a list of all subscribed email addresses.

### Prerequisites
* Node.js installed
* MongoDB URI (Local or Atlas)
