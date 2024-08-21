(async function() {
    // Function to fetch CSV data with error handling
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

    // Function to create the bar chart
    function createBarChart(labels, loanSizes, tooltips) {
        const ctx = document.getElementById('barChart').getContext('2d');
        const barChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Loan Sizes',
                    data: loanSizes,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
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
    }

    // Function to create the funnel chart
    function createFunnelChart(labels, funnelData) {
        const ctx = document.getElementById('funnelChart').getContext('2d');
        const funnelChart = new Chart(ctx, {
            type: 'funnel',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Loan Funnel',
                    data: funnelData.map(d => d.y), // Funnel chart expects an array of values
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(255, 99, 132, 0.8)'
                    ],
                    borderColor: 'rgba(0, 0, 0, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function (context) {
                                const dataIndex = context.dataIndex;
                                return [
                                    `Loan Size: ${funnelData[dataIndex].y}`,
                                    `Interest Rate: ${funnelData[dataIndex].interest_rate}`,
                                    `Borrower Income: ${funnelData[dataIndex].borrower_income}`,
                                    `Debt-to-Income: ${funnelData[dataIndex].debt_to_income}`,
                                    `Number of Accounts: ${funnelData[dataIndex].num_of_accounts}`,
                                    `Derogatory Marks: ${funnelData[dataIndex].derogatory_marks}`,
                                    `Total Debt: ${funnelData[dataIndex].total_debt}`,
                                    `Loan Status: ${funnelData[dataIndex].loan_status}`
                                ];
                            }
                        }
                    }
                }
            }
        });
    }

    // Initialize the process
    const init = async () => {
        const data = await fetchCSVData();
        if (data.length === 0) {
            console.error('No data to display');
            return; // Exit if no data is returned
        }

        // Extract labels and loan sizes
        const labels = data.map((d, index) => `Loan ${index + 1}`);  // Creating labels like 'Loan 1', 'Loan 2', etc.
        const loanSizes = data.map(d => d.loan_size);  // Use 'loan_size' as the data for the bars
        
        // Prepare tooltip data for the bar chart
        const tooltips = data.map(d => ({
            interest_rate: d.interest_rate,
            borrower_income: d.borrower_income,
            debt_to_income: d.debt_to_income,
            num_of_accounts: d.num_of_accounts,
            derogatory_marks: d.derogatory_marks,
            total_debt: d.total_debt,
            loan_status: d.loan_status
        }));
        
        // Prepare data for the funnel chart
        const funnelData = data.map(d => ({
            y: d.loan_size,
            interest_rate: d.interest_rate,
            borrower_income: d.borrower_income,
            debt_to_income: d.debt_to_income,
            num_of_accounts: d.num_of_accounts,
            derogatory_marks: d.derogatory_marks,
            total_debt: d.total_debt,
            loan_status: d.loan_status
        }));

        // Create both charts
        createBarChart(labels, loanSizes, tooltips);
        createFunnelChart(labels, funnelData);
    };

    init(); // Start the process
})();
