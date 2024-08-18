# Credit Risk Classification Analysis
![MIT](https://img.shields.io/badge/License-MIT-blue)

## Website: 
[website](https://github.com/mattcat1221/Credit-Risk-Classification-Analysis)

## Description
In this challenge, I used various techniques to train and evaluate a model based on loan risk. I worked with a dataset of historical lending activity from a peer-to-peer lending services company to build a model that could identify the creditworthiness of borrowers.To evaluate how well the logistic regression model predicts both the 0 (healthy loan) and 1 (high-risk loan) labels, we can look at the following metrics provided by the classification report and confusion matrix:  1. Confusion Matrix: True Positives (TP): The number of 1 (high-risk loans) correctly predicted as 1. True Negatives (TN): The number of 0 (healthy loans) correctly predicted as 0. False Positives (FP): The number of 0 (healthy loans) incorrectly predicted as 1. False Negatives (FN): The number of 1 (high-risk loans) incorrectly predicted as 0. 2. Classification Report Metrics: Precision: The proportion of true positive predictions among all positive predictions (how many selected items are relevant). Recall: The proportion of true positive predictions among all actual positives (how many relevant items are selected). F1-Score: The harmonic mean of precision and recall, providing a balance between the two. Support: The number of occurrences of each class in the test dataset. Evaluation: Healthy Loans (0): Precision: High precision indicates that most loans predicted as 0 are actually healthy loans. Recall: High recall indicates that most of the actual healthy loans are correctly identified as healthy loans. High-Risk Loans (1): Precision: High precision indicates that most loans predicted as 1 are actually high-risk loans. Recall: High recall indicates that most of the actual high-risk loans are correctly identified as high-risk loans. Conclusion: If the model has high precision and recall for both classes (0 and 1), it means the model is good at distinguishing between healthy and high-risk loans. If there is a significant difference between the metrics for the two classes, it suggests that the model may be biased towards one class, possibly due to an imbalance in the dataset or other factors.

![barplot website](https://github.com/user-attachments/assets/5b704a00-d841-4a7c-9abc-b134b55a5318)


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Tests](#tests)
- [Contact](#contact)

## Installation
pandas, scikit-learn, (sklearn), numpy, matplotlib, seaborn, plotly, jupyter, ipywidgets

## Usage
Credit Risk Classification Analysis

## Credits
Catherine Matthews

## License
MIT

## Features
1. Data Loading and Preprocessing Load and explore a dataset of historical lending activity. Clean and preprocess the data, including handling missing values, encoding categorical variables, and feature scaling if necessary. 2. Feature Engineering Separate the dataset into features (X) and labels (y). Perform any additional feature engineering, such as creating new features or selecting important features for the model. 3. Data Splitting Split the data into training and testing sets using train_test_split to ensure that the model can be evaluated on unseen data. 4. Model Training Train a Logistic Regression model on the training data to predict the likelihood of a loan being high-risk (1) or healthy (0). 5. Model Evaluation Generate predictions on the testing set. Evaluate the model’s performance using metrics such as accuracy, precision, recall, F1-score, and support. 6. Confusion Matrix Generate and interpret a confusion matrix to understand how well the model distinguishes between healthy and high-risk loans. 7. Classification Report Print a detailed classification report that includes precision, recall, F1-score, and support for both classes (0 and 1). 8. Interactive Visualizations Create interactive plots, such as histograms, scatter plots, or confusion matrices using Plotly, to visualize the data and the model’s performance. 9. Model Interpretation Analyze the results and interpret how well the model predicts both healthy and high-risk loans. Discuss the potential reasons behind the model's performance and any insights gained from the analysis.

## Tests
1. Data Validation Tests Data Integrity Check: Ensure there are no missing values, duplicated entries, or outliers that could negatively impact the model's performance. Feature Distribution Check: Verify that the features are distributed as expected and align with domain knowledge. This includes checking for anomalies in numerical and categorical variables. Class Imbalance Check: Check the distribution of the target variable (loan_status) to identify any class imbalance that may require handling (e.g., through resampling techniques). 2. Model Performance Evaluation Train/Test Split Validation: Ensure that the data is properly split into training and testing sets, with no data leakage between the two. Accuracy Test: Calculate the accuracy of the model to determine how many of the predictions are correct overall. Precision and Recall Tests: Evaluate precision and recall, particularly for the minority class (likely the 1 or high-risk loan class), to ensure that the model is not biased towards the majority class. F1-Score Test: Calculate the F1-score, which balances precision and recall, to assess the model's performance more comprehensively. Confusion Matrix Analysis: Examine the confusion matrix to understand the types of errors the model is making (false positives and false negatives). ROC Curve and AUC Score: (Optional) Generate the ROC curve and calculate the AUC score to evaluate the model’s ability to distinguish between classes. 3. System Functionality Tests Model Training Check: Verify that the model trains successfully without errors and converges as expected. Prediction Check: Ensure that the model can make predictions on new data and that the predictions are within a reasonable range. Performance Consistency Test: Run the model multiple times with different random states to ensure that its performance is consistent across different data splits. Code Robustness: Test that the code handles edge cases, such as missing data, unexpected input formats, or incorrect data types, without crashing. 4. Interactive Visualization Tests Visualization Accuracy: Ensure that the interactive visualizations correctly reflect the underlying data and model predictions. Responsiveness Test: Check that the visualizations are responsive and perform well across different devices and screen sizes. Interactivity Check: Test the interactivity of the plots (e.g., hovering, zooming, filtering) to ensure they work as intended. 5. End-to-End Integration Test Full Workflow Test: Run through the entire pipeline—from data loading and preprocessing to model training, evaluation, and visualization—to ensure that all components work together seamlessly. Reproducibility Test: Confirm that the entire process can be reproduced consistently, with the same results, when run on different machines or at different times.

## Contact
If there are any questions of concerns, I can be reached at:
##### [github: mattcat1221](https://github.com/mattcat1221)
##### [email: caseyvmatthews@gmail.com](mailto:caseyvmatthews@gmail.com)
