# ShiftSync – Shift Tracking Web Application

ShiftSync is a responsive web application designed to manage and track employee work shifts. It allows users to log in, start and end shifts, take breaks, and view past shift records. The system is designed with a clean interface, supports dark mode, and includes smooth animations.

## Design and Technologies Used

- **UI/UX Design**: Figma
- **Frontend**: React.js with Vite and Tailwind CSS
- **Backend**: Node.js and Express.js
- **Database**: MongoDB
- **Animations**: Framer Motion
- **API Testing**: Postman

## Project Structure

The project is divided into two main folders:

- `frontend`: Contains the client-side code developed using React, styled with Tailwind CSS.
- `backend`: Contains the server-side code with Express.js, connected to a MongoDB database.

## Setup Instructions

### Prerequisites

Before running the project, ensure you have the following installed:

- Node.js and npm
- MongoDB account with access to a connection string

### Environment Configuration

Create a `.env` file in the `backend` folder and add the following variables:
MONGODB_URI=your_mongodb_connection_string
PORT=5000
JWT_SECRET=your_jwt_secret_key

### Installation Steps

1. Clone the repository: git clone https://github.com/Shankaran-G/shiftsync.git
2. Navigate to the backend folder and install dependencies: cd backend
                                                            npm install
3. Start the backend server: node index.js
4. Open a new terminal, navigate to the frontend folder and install dependencies: cd frontend
                                                                                  npm install
5. Start the frontend development server: npm run dev

## Features

- User login authentication using JWT
- Dashboard to start, stop, and break shifts
- Automatic saving of shift records
- View past shift data in a shift table
- Fully responsive layout for all screen sizes
- Dark mode support
- Animated UI using Framer Motion

## API Documentation

API documentation and test requests are available in the included Postman collection file: - `ShiftSync API.postman_collection.json` / "https://shankaran-5695263.postman.co/workspace/Shankaran's-Workspace~a4847afb-15c4-4538-8cf8-4a0658bc1b03/collection/44736721-d22c0e32-edfd-495c-8ffb-b04fec16ae7d?action=share&creator=44736721"( likn)

Demo Live : https://shiftsync-sigma.vercel.app/

#  limitations so far
1. Shift data isn't fetched or inserted for a particular user based on the JWT token.
2. No signup functionality is implemented.
3. No role-based access control
4. No detailed reporting or analytics for shifts.
5. No real-time collaboration or notifications for users.
6. No shift reminders or alerts for upcoming shifts or Finished Shifts
