# Base image
FROM openjdk:11

# Set the working directory
WORKDIR /app

# Copy the JAR file (if it's a Java app)
COPY target/backend-app-1.0-SNAPSHOT.jar .

# Expose the port (e.g., 8080)
EXPOSE 8080

# Command to run the app
CMD ["java", "-jar", "your-backend-app.jar"]