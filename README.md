# Handwritten Digit Recognition Web Application

## Project Structure
```
project_folder/
├── static/
│   ├── styles.css      # CSS for styling the web interface
│   ├── script.js       # JavaScript for handling frontend interactions
├── templates/
│   ├── index.html      # Main HTML file for the web interface
├── app.py              # Flask application backend
├── digit_model.pth     # Pre-trained PyTorch model for digit recognition
```

## Project Overview
This project is a web-based application for recognizing handwritten digits using a Convolutional Neural Network (CNN) trained with PyTorch. The user can draw a digit on the interface, and the model predicts the digit in real time.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Flask (Python)
- **Machine Learning:** PyTorch for training and inference
- **Deployment:** Local server using Flask

## How It Works
1. The user draws a digit on the canvas.
2. The drawn image is converted to grayscale and resized to 28x28 pixels.
3. The processed image is sent to the Flask backend.
4. The PyTorch model predicts the digit.
5. The result is displayed on the web interface.

## Model Architecture
The CNN used in this project consists of:
- Two convolutional layers (32 and 64 filters, 3x3 kernel, ReLU activation)
- Max-pooling layers (2x2)
- Fully connected layers (128 neurons and 10 output classes)
- Softmax activation for classification

## Running the Project
1. Install dependencies:  
   ```bash
   pip install flask torch torchvision
   ```
2. Run the Flask application:  
   ```bash
   python app.py
   ```
3. Open `http://127.0.0.1:5000/` in a web browser.

## Future Improvements
- Improve the model accuracy with data augmentation.
- Deploy the app using cloud services (AWS, Google Cloud, etc.).
- Optimize the frontend for better user experience.

This project demonstrates how deep learning can be integrated into a simple web application for real-time digit recognition.








![projectx2](https://github.com/user-attachments/assets/7cb50ab6-ce70-4c57-ac2a-1acbddc3eb65)



















