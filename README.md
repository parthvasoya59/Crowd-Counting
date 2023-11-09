# Crowd-Counting

This machine learning project uses computer vision techniques to count the number of people entering and exiting a mall.

## Project Summary
The system uses OpenCV and Python to detect and track people in video feeds from cameras placed at mall entrances and exits.
The number of people entering and exiting is counted and displayed on a dashboard.
The total count of people inside the mall is calculated and displayed.
Alerts can be set to notify if the number of people exceeds a threshold.
Data is stored in an Excel sheet for the admin to view and update.

## How it Works
The video feed from the cameras is broken down into frames.
Each frame is processed using a pre-trained MobileNetSSD object detection model to detect people.
Bounding boxes are drawn around each detected person.
As people enter and exit frames, the counts are incremented or decremented accordingly.
The total count is calculated and displayed on the dashboard.
The data is stored in an Excel sheet when the system closes.

## Technologies Used
Programming Language: Python

Frameworks/Libraries:

OpenCV - For computer vision and image processing

Flask - For building the web application

MobileNetSSD - Pre-trained model for object detection

NumPy - For numerical operations

Pandas - For data manipulation and analysis

Database: SQLite

Deployment: Heroku

Version Control: Git/GitHub

IDE: Visual Studio Code

Design: HTML/CSS/JS

## Project Report
The detailed project report can be found here: [Report.pdf] (https://github.com/parthvasoya59/Crowd-Countings/blob/main/Report.pdf)



