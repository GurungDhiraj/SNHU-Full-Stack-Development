# SNHU-Full-Stack-Development

## <ins>**Course Description:**<ins>

Students will design and develop a full-stack application through the utilization of programming language frameworks. In creating a full-stack application, students will also be responsible for developing a database as well as the code that interfaces their application to the database. This course is the first course in a two-course sequence.

## <ins>**Course Competencies:**<ins>

This course covers the following competencies, which represent the knowledge and skills relevant to your field:

    •CS-30427: Design the architecture of a web application
    •CS-40428: Build a web application using frameworks
    •CS-30420: Develop a fully formed three-dimensional project that meets project requirements

## <ins>**Architecture:**<ins>
- This project was a full-stack web application designed to be functional for both the customer and the administrator. The application used the MEAN stack, which consisted of the following: MongoDB, Express, AngularJS, and Node.js. Each of these components played a distinct role in helping to create the full-stack application. The code used HTML  and JavaScript to code the different parts of the single-page application (SPA). Express was used to render these HTML pages, allowing the user to view the different parts of the application. A NoSQL MongoDB was used to store and access the various JSON files that were used for the trip booking information. This was ideal for this application as it allowed for more flexibility in handling the JSON files. API calls were used to retrieve the appropriate data from the database.

## <ins>**Functionality:**<ins>  
- The application used JSON files to store data like the booking information, and JavaScript was used to enable more complex tasks like coding in logic and different functionality for the application. JSON files are primarily used only to store data, and they are stored in MongoDB. Both Express and Angular frameworks can request data from the database, allowing for easy transfer of data between the frontend and backend of the application. The application used HandleBars.js for templates to allow for dynamic HTML generation. For example, instead of writing the same booking information multiple times on the HTML page, I could just reference that data using Handlebars.js, and the data would be retrieved straight from MongoDB. This allowed for a cleaner and reduced code, which made reviewing and editing the subsequent HTML files much easier.

## <ins>**Testing:**<ins>
- Throughout this application, API calls like GET, POST, PUT, and DELETE were used to retrieve, update, and delete data from MongoDB. There was also a need to have authentication enabled through JWS to ensure that users were able to view and edit data only when they were logged in. Authentication was also used to verify different login information. If a user did not enter the correct email address and password, then they would simply not be able to log in to the website.

## <ins>**Reflection:**<ins>
- This course has helped me learn how to manage developing bigger projects and files. The key was to really tackle specific features and functionalities at a time. Focusing on smaller parts of the project at a time helped me from getting overwhelmed with trying to figure out how to do the whole project all at once. The course also helped me learn how to code a full-stack application, which helped me gain new skills and get one step closer to being a software developer. Creating a full-stack application is a required skill for many software developer jobs, and knowing how to create even a basic one helps me become a more qualified candidate when applying for new jobs.
