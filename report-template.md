# Module 12 Report Template

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
