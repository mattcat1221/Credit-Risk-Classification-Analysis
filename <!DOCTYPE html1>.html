<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/style.css">
    <title>Credit Risk Classification</title>
    
    <!-- Include necessary libraries -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/papaparse@5.3.0/papaparse.min.js"></script>
</head>
<body>
    <nav>Credit Risk Classification Analysis</nav>

    <main>
        <!-- Canvas for the charts -->
        <canvas id="lineChart" width="400" height="400"></canvas>
        <canvas id="barChart" width="400" height="200"></canvas>
        <canvas id="bubbleChart" width="400" height="400"></canvas>
    </main>

    <!-- Include your custom JavaScript -->
    <script>
        document.addEventListener('DOMContentLoaded', async function() {
            // Function to fetch CSV data
            const fetchCSVData = async () => {
                try {
                    const response = await fetch('Resources/lending_data.csv', {
                        headers: {
                            'Content-Type': 'text/csv'
                        }
                    });
                    if (!response.ok) throw new Error('Failed to fetch CSV file');
                    const data = await response.text();
                    
                    // Parse the CSV data into an array of objects
                    const parsedData = Papa.parse(data, {
                        header: true,
                        dynamicTyping: true
                    }).data;

                    return parsedData;
                } catch (error) {
                    console.error('Error fetching or parsing data:', error);
                    return []; // Return an empty array if an error occurs
                }
            };

            // Fetch and parse the CSV data
            const data = await fetchCSVData();
            if (data.length === 0) {
                console.error('No data to display');
                return; // Exit if no data is returned
            }

            // Extract labels and data for the charts
            const labels = data.map((d, index) => `Loan ${index + 1}`);
            const loanSizes = data.map(d => d.loan_size);
            const tooltips = data.map(d => ({
                interest_rate: d.interest_rate,
                borrower_income: d.borrower_income,
                debt_to_income: d.debt_to_income,
                num_of_accounts: d.num_of_accounts,
                derogatory_marks: d.derogatory_marks,
                total_debt: d.total_debt,
                loan_status: d.loan_status
            }));
            const bubbleData = data.map(d => ({
                x: d.borrower_income,
                y: d.debt_to_income,
                r: Math.sqrt(d.loan_size) / 10,
                loan_size: d.loan_size,
                interest_rate: d.interest_rate,
                num_of_accounts: d.num_of_accounts,
                derogatory_marks: d.derogatory_marks,
                total_debt: d.total_debt,
                loan_status: d.loan_status
            }));

            // Create the Line Chart with the Viridis color palette
            const lineCtx = document.getElementById('lineChart').getContext('2d');
            new Chart(lineCtx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Loan Sizes Over Time',
                        data: loanSizes,
                        backgroundColor: 'rgba(68, 1, 84, 0.2)', // Viridis start color
                        borderColor: 'rgba(253, 231, 37, 1)', // Viridis end color
                        borderWidth: 2
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            // Create the Bar Chart with Viridis colors
            const barCtx = document.getElementById('barChart').getContext('2d');
            new Chart(barCtx, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Loan Sizes',
                        data: loanSizes,
                        backgroundColor: [
                            'rgba(68, 1, 84, 0.8)',   // Viridis start color
                            'rgba(59, 82, 139, 0.8)', // Viridis mid color
                            'rgba(33, 145, 140, 0.8)',// Viridis mid color
                            'rgba(94, 201, 98, 0.8)', // Viridis mid color
                            'rgba(253, 231, 37, 0.8)' // Viridis end color
                        ],
                        borderColor: [
                            'rgba(68, 1, 84, 1)',   // Viridis start color
                            'rgba(59, 82, 139, 1)', // Viridis mid color
                            'rgba(33, 145, 140, 1)',// Viridis mid color
                            'rgba(94, 201, 98, 1)', // Viridis mid color
                            'rgba(253, 231, 37, 1)' // Viridis end color
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    return [
                                        `Loan Size: ${context.raw}`,
                                        `Interest Rate: ${tooltips[context.dataIndex].interest_rate}`,
                                        `Borrower Income: ${tooltips[context.dataIndex].borrower_income}`,
                                        `Debt-to-Income: ${tooltips[context.dataIndex].debt_to_income}`,
                                        `Number of Accounts: ${tooltips[context.dataIndex].num_of_accounts}`,
                                        `Derogatory Marks: ${tooltips[context.dataIndex].derogatory_marks}`,
                                        `Total Debt: ${tooltips[context.dataIndex].total_debt}`,
                                        `Loan Status: ${tooltips[context.dataIndex].loan_status}`
                                    ];
                                }
                            }
                        }
                    }
                }
            });

            // Create the Bubble Chart with Viridis colors
            const bubbleCtx = document.getElementById('bubbleChart').getContext('2d');
            new Chart(bubbleCtx, {
                type: 'bubble',
                data: {
                    datasets: [{
                        label: 'Loan Analysis',
                        data: bubbleData,
                        backgroundColor: 'rgba(68, 1, 84, 0.5)',  // Viridis start color
                        borderColor: 'rgba(253, 231, 37, 1)',      // Viridis end color
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        x: {
                            title: {
                                display: true,
                                text: 'Borrower Income'
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Debt-to-Income Ratio'
                            }
                        }
                    },
                    plugins: {
                        tooltip: {
                            callbacks: {
                                label: function (context) {
                                    const data = context.raw;
                                    return [
                                        `Loan Size: ${data.loan_size}`,
                                        `Interest Rate: ${data.interest_rate}`,
                                        `Borrower Income: ${data.x}`,
                                        `Debt-to-Income: ${data.y}`,
                                        `Number of Accounts: ${data.num_of_accounts}`,
                                        `Derogatory Marks: ${data.derogatory_marks}`,
                                        `Total Debt: ${data.total_debt}`,
                                        `Loan Status: ${data.loan_status}`
                                    ];
                                }
                            }
                        }
                    }
                }
            });
        });
    </script>

    <main>
        <h1>Explanation of Charts</h1>

        <h2>1. Line Chart: Loan Sizes Over Time</h2>
        <p>
            <strong>Purpose:</strong> This chart visualizes the loan sizes over a period, often represented by different loans (e.g., Loan 1, Loan 2, etc.).
        </p>
        <p>
            <strong>Interpretation:</strong>
            <ul>
                <li>If the line is ascending, it indicates an increase in loan sizes over time or across different loans.</li>
                <li>A descending line would suggest a decrease in loan sizes.</li>
                <li>Fluctuations in the line can indicate volatility or inconsistency in the loan sizes granted.</li>
            </ul>
        </p>

        <h2>2. Bar Chart: Loan Sizes</h2>
        <p>
            <strong>Purpose:</strong> The bar chart presents a comparative view of the loan sizes for each loan (e.g., Loan 1, Loan 2, etc.).
        </p>
        <p>
            <strong>Interpretation:</strong>
            <ul>
                <li>Taller bars represent larger loans, while shorter bars represent smaller loans.</li>
                <li>This chart is useful for quickly comparing the size of different loans.</li>
                <li>The colors (Viridis palette) differentiate between the loans, helping in visual distinction.</li>
            </ul>
        </p>

        <h2>3. Bubble Chart: Loan Analysis</
