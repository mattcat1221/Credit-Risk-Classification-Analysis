# Credit Risk Classification Analysis
![MIT](https://img.shields.io/badge/License-MIT-blue)

## Website: 
[Summary Analysis](https://credit-risk-classification-analysis-roa4-jublmrez9.vercel.app)
[Website](https://credit-risk-classification-analysis-roa4-jublmrez9.vercel.app
## Description
In this challenge, I used various techniques to train and evaluate a model based on loan risk. I worked with a dataset of historical lending activity from a peer-to-peer lending services company to build a model that could identify the creditworthiness of borrowers.To evaluate how well the logistic regression model predicts both the 0 (healthy loan) and 1 (high-risk loan) labels, we can look at the following metrics provided by the classification report and confusion matrix:  1. Confusion Matrix: True Positives (TP): The number of 1 (high-risk loans) correctly predicted as 1. True Negatives (TN): The number of 0 (healthy loans) correctly predicted as 0. False Positives (FP): The number of 0 (healthy loans) incorrectly predicted as 1. False Negatives (FN): The number of 1 (high-risk loans) incorrectly predicted as 0. 2. Classification Report Metrics: Precision: The proportion of true positive predictions among all positive predictions (how many selected items are relevant). Recall: The proportion of true positive predictions among all actual positives (how many relevant items are selected). F1-Score: The harmonic mean of precision and recall, providing a balance between the two. Support: The number of occurrences of each class in the test dataset. Evaluation: Healthy Loans (0): Precision: High precision indicates that most loans predicted as 0 are actually healthy loans. Recall: High recall indicates that most of the actual healthy loans are correctly identified as healthy loans. High-Risk Loans (1): Precision: High precision indicates that most loans predicted as 1 are actually high-risk loans. Recall: High recall indicates that most of the actual high-risk loans are correctly identified as high-risk loans. Conclusion: If the model has high precision and recall for both classes (0 and 1), it means the model is good at distinguishing between healthy and high-risk loans. If there is a significant difference between the metrics for the two classes, it suggests that the model may be biased towards one class, possibly due to an imbalance in the dataset or other factors.
![interestrates by loan status](https://github.com/user-attachments/assets/ed3319f8-0db0-4f64-8e77-4da239f364ad)



## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)
- [Tests](#tests)
- [Report](#report)
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

# Report 
## Overview of the Analysis

1. Precision:
Healthy Loan (0): 1.00
This indicates that the model is extremely accurate when it predicts a loan as "healthy." In other words, when the model says a loan is healthy, it's almost always correct.
High-Risk Loan (1): 0.86
The precision for high-risk loans is slightly lower, meaning that when the model predicts a loan as high-risk, it is correct 86% of the time. There are some false positives where the model mistakenly identifies a healthy loan as high-risk.
2. Recall:
Healthy Loan (0): 0.99
The model correctly identifies 99% of the actual healthy loans. This is a very high recall, indicating that very few healthy loans are incorrectly labeled as high-risk.
High-Risk Loan (1): 0.94
The recall for high-risk loans is also high at 94%, meaning the model successfully identifies 94% of the actual high-risk loans. However, it misses about 6% of them, labeling them as healthy.
3. F1-Score:
Healthy Loan (0): 1.00
The F1-score, which balances precision and recall, is perfect for healthy loans, indicating the model performs excellently for this class.
High-Risk Loan (1): 0.90
The F1-score for high-risk loans is 0.90, which is strong but reflects the slightly lower precision and recall compared to healthy loans.
4. Support:
Healthy Loan (0): 15001
There is a large number of healthy loans in the dataset.
High-Risk Loan (1): 507
There are significantly fewer high-risk loans, indicating a potential class imbalance.
5. Overall Accuracy:
Accuracy: 0.99 (99%)
The model achieves a very high overall accuracy, correctly classifying 99% of all loans.
Conclusion:
The logistic regression model performs exceptionally well overall, especially for predicting healthy loans, with perfect precision and near-perfect recall. The model also performs well in predicting high-risk loans, with strong but slightly lower precision and recall compared to healthy loans.

Recommendation:
Given the high accuracy, precision, recall, and F1-scores, the model appears to be effective for predicting both healthy and high-risk loans. The slight drop in precision for high-risk loans suggests that while the model is generally good at identifying high-risk loans, there is room for improvement, particularly in reducing false positives.

Description of Results
The model achieved an overall
accuracy of [99%] on the test dataset, indicating that it correctly classified [99%] of loan applicants. The precision and recall values were respectively, which suggests that the model is [good/fair] at predicting high-risk applicants. The loss value, is within an acceptable range, indicating that the model's predictions are generally close to the actual outcomes.                precision    recall  f1-score   support

  Healthy Loan       1.00      0.99      1.00     15001
High-Risk Loan       0.86      0.94      0.90       507

      accuracy                           0.99     15508
     macro avg       0.93      0.97      0.95     15508
  weighted avg       0.99      0.99      0.99     15508

Summary and Recommendation
Based on the results, the model shows promising potential in accurately classifying credit risk. The balance between precision and recall suggests that the model effectively identifies high-risk applicants, which is crucial for minimizing potential defaults. However, the model’s performance should be monitored over time, and it may require retraining with updated data to maintain its accuracy.

Recommendation: Given its current performance, I recommend deploying the model for company use, with the caveat that it should be periodically evaluated and retrained as new data becomes available. This will ensure that the model remains effective in the ever-changing financial landscape.
Model Performance:
•	Accuracy: The model achieved an accuracy of 99%, indicating that it correctly classified 99% of the loan applicants in the dataset.
•	Precision:
o	Healthy Loan: 1.00, meaning the model made no false positive predictions for Healthy Loans.
o	High-Risk Loan: 0.86, meaning that out of all loans predicted as High-Risk, 86% were actually high-risk.
•	Recall:
o	Healthy Loan: 0.99, indicating that the model correctly identified 99% of actual Healthy Loans.
o	High-Risk Loan: 0.94, indicating that the model correctly identified 94% of actual High-Risk Loans.

Summary and Recommendation:
The results from the machine learning model demonstrate a strong overall performance, particularly in predicting Healthy Loans with nearly perfect precision and recall. Although the precision for High-Risk Loans is slightly lower at 86%, the recall is relatively high at 94%, which is crucial for minimizing the risk of default. This balance suggests that the model is effective in identifying high-risk applicants while maintaining a high level of accuracy overall.
Recommendation: I recommend deploying the model for company use. The model shows promising potential in accurately classifying credit risk, which is vital for making informed lending decisions. However, it is essential to monitor the model’s performance over time and consider retraining it with updated data to ensure it remains effective in the changing financial landscape. Regular evaluation will help maintain its accuracy and relevance.




[Credit Risk Classication Analysis Website](https://crcawebsite.vercel.app)


## Contact
If there are any questions of concerns, I can be reached at:
##### [github: mattcat1221](https://github.com/mattcat1221)
##### [email: caseyvmatthews@gmail.com](mailto:caseyvmatthews@gmail.com)
