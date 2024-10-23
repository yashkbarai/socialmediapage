// Setting initial values for the stats
document.getElementById("total-followers").innerText = "15,350";
document.getElementById("new-followers-count").innerText = "1,200";
document.getElementById("total-likes").innerText = "7,800";
document.getElementById("total-comments").innerText = "300";

// Data for the graph
const socialMediaData = {
    labels: ['Followers', 'New Followers', 'Likes', 'Comments'],
    datasets: [{
        label: 'Social Media Stats',
        data: [15350, 1200, 7800, 300], // Stats for followers, new followers, likes, comments
        backgroundColor: [
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 99, 132, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)'
        ],
        borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1
    }]
};

// Chart Configuration
const config = {
    type: 'bar', // Bar chart
    data: socialMediaData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};

// Initialize the chart
const ctx = document.getElementById('socialMediaChart').getContext('2d');
const socialMediaChart = new Chart(ctx, config);
