# GTM4Health

🏥 GTM4Health is a web application for managing health-related data in healthcare organizations.

## Technologies Used

✨ The following technologies are used in this project:

- ⚛️ React
- 🖥️ Node.js
- 🌐 Express.js
- 🍃 MongoDB

## Prerequisites

👨‍💻 Before running this project, ensure that you have the following installed:

- 📦 [Node.js](https://nodejs.org/) (version 12 or above)
- 🛢️ [MongoDB](https://www.mongodb.com/) (running on default port 27017)

## Getting Started

🚀 Follow the steps below to get started with GTM4Health:

1. **Clone the repository:**
   ```shell
   git clone https://github.com/Sree-Harsha-PS/GTM4Health.git
2. Change to the project directory:

  shell code  
  cd GTM4Health

3. Install the dependencies for both the server and client:

  shell
  Copy code:
  # Install server dependencies
  
  cd server
  npm install

  # Install client dependencies
  
  cd ../client
  npm install
  Set up environment variables:

4. Create a .env file in the server directory.
  Add the following environment variables and their corresponding values:
  plaintext
  Copy code
  PORT=3001
  MONGODB_URI=<your-mongodb-connection-string>
  Replace <your-mongodb-connection-string> with your actual MongoDB connection string.
  
 5. Build the client:

shell
Copy code
cd client
npm run build
Start the server:

shell
Copy code
cd ../server
npm start
The server will start running on http://localhost:3001.

##**Access the application**:

Open your web browser and navigate to http://localhost:3001 to access GTM4Health.

##**Contributing**
🤝 Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

##**License**
📄 This project is licensed under the MIT License.
