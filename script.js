// Add more sample data
const videoHighlightsData = [
    {
        title: "Shuttle Seniors Finale",
        description: "Exciting last Shot finishing",
        videoUrl: "shuttle.mp4",
        date: "2024-03-15",
        sport: "Shuttle"
    },
    {
        title: "kabaddi Tournment",
        description: "Best moments from the tournament finals",
        videoUrl: "kabaddi2.mp4",
        date: "2024-03-10",
        sport: "Kabaddi"
    },
    {
        title: "cricket Tournment",
        description: "Record-breaking performances in freestyle",
        videoUrl: "cricket.mp4",
        date: "2024-03-05",
        sport: "Cricket"
    },
    {
        title: "Table Tennis Finals",
        description: "Intense rallies from the championship match",
        videoUrl: "videos/tabletennis_finals.mp4",
        date: "2024-03-01",
        sport: "Table Tennis"
    },
    {
        title: "Athletics Meet Highlights",
        description: "Best moments from track and field events",
        videoUrl: "videos/athletics_highlights.mp4",
        date: "2024-02-28",
        sport: "Athletics"
    }
];

const gamesData = [
    {
        name: "Chess Championship",
        winners: ["John Doe", "Jane Smith", "Mike Johnson"],
        date: "2024-03-15"
    },
    {
        name: "Tennis Tournament",
        winners: ["Jane Smith", "John Doe"],
        date: "2024-03-10"
    },
    {
        name: "Basketball League",
        winners: ["Mike Johnson", "John Doe"],
        date: "2024-03-05"
    },
    {
        name: "Swimming Championship",
        winners: ["Emma Wilson", "Maria Garcia", "Daniel Lee"],
        date: "2024-03-14"
    },
    {
        name: "Table Tennis Tournament",
        winners: ["Alex Thompson", "William Taylor", "Lucas White"],
        date: "2024-03-13"
    },
    {
        name: "Volleyball League",
        winners: ["Maria Garcia", "James Anderson", "Sophie Brown"],
        date: "2024-03-12"
    },
    {
        name: "Badminton Championship",
        winners: ["James Anderson", "Sarah Williams", "Noah King"],
        date: "2024-03-11"
    },
    {
        name: "Marathon Event",
        winners: ["Sophie Brown", "Ava Robinson", "Mia Rodriguez"],
        date: "2024-03-09"
    },
    {
        name: "Cricket Premier League",
        winners: ["Daniel Lee", "David Brown", "William Taylor"],
        date: "2024-03-08"
    },
    {
        name: "Gymnastics Competition",
        winners: ["Olivia Davis", "Isabella Martinez", "Charlotte Scott"],
        date: "2024-03-07"
    },
    {
        name: "Soccer Tournament",
        winners: ["William Taylor", "Noah King", "Mike Johnson"],
        date: "2024-03-06"
    },
    {
        name: "Boxing Championship",
        winners: ["Isabella Martinez", "Alex Thompson", "Ethan Clark"],
        date: "2024-03-04"
    },
    {
        name: "Golf Masters",
        winners: ["Lucas White", "John Doe", "David Brown"],
        date: "2024-03-03"
    },
    {
        name: "Athletics Meet",
        winners: ["Ava Robinson", "Emma Wilson", "Maria Garcia"],
        date: "2024-03-02"
    },
    {
        name: "Hockey Tournament",
        winners: ["Ethan Clark", "Mike Johnson", "James Anderson"],
        date: "2024-03-01"
    },
    {
        name: "Karate Championship",
        winners: ["Mia Rodriguez", "Daniel Lee", "Isabella Martinez"],
        date: "2024-02-29"
    },
    {
        name: "Rugby Championship",
        winners: ["Noah King", "William Taylor", "Alex Thompson"],
        date: "2024-02-28"
    },
    {
        name: "Cycling Grand Prix",
        winners: ["Charlotte Scott", "Sophie Brown", "Emma Wilson"],
        date: "2024-02-27"
    }
];

// Add Hall of Fame data
const hallOfFameData = [
    {
        id: 1,
        name: "Munna",
        photo: "munna.jpg",
        achievements: {
            totalGames: 15,
            gamesWon: 12,
            records: [
                { game: "Chess Championship", status: "won", date: "2024-03-15" },
                { game: "Tennis Tournament", status: "won", date: "2024-02-20" },
                { game: "Basketball League", status: "won", date: "2024-01-10" },
                { game: "Table Tennis", status: "participated", date: "2024-01-05" },
                { game: "Badminton Singles", status: "won", date: "2023-12-15" },
                { game: "Soccer Tournament", status: "participated", date: "2023-12-01" },
                { game: "Swimming Championship", status: "won", date: "2023-11-20" },
                { game: "Marathon Race", status: "won", date: "2023-11-10" },
                { game: "Volleyball League", status: "participated", date: "2023-10-25" },
                { game: "Cricket Match", status: "won", date: "2023-10-15" },
                { game: "Golf Tournament", status: "won", date: "2023-10-01" },
                { game: "Boxing Championship", status: "participated", date: "2023-09-20" },
                { game: "Athletics Meet", status: "won", date: "2023-09-10" }
            ]
        }
    },
    {
        id: 2,
        name: "Avinash",
        photo: "avinash.jpg",
        achievements: {
            totalGames: 8,
            gamesWon: 5,
            records: [
                { game: "Swimming Championship", status: "won", date: "2024-03-10" },
                { game: "Marathon", status: "won", date: "2024-02-15" },
                { game: "Cycling Race", status: "participated", date: "2024-01-05" }
            ]
        }
    },
    {
        id: 3,
        name: "Chandu",
        photo: "chandu.jpg",
        achievements: {
            totalGames: 12,
            gamesWon: 8,
            records: [
                { game: "Basketball Tournament", status: "won", date: "2024-03-20" },
                { game: "Volleyball Championship", status: "won", date: "2024-02-25" },
                { game: "Soccer League", status: "participated", date: "2024-01-15" }
            ]
        }
    },
    {
        id: 4,
        name: "Rakesh",
        photo: "rakesh.jpg",
        achievements: {
            totalGames: 9,
            gamesWon: 6,
            records: [
                { game: "Tennis Championship", status: "won", date: "2024-03-25" },
                { game: "Badminton Tournament", status: "won", date: "2024-02-28" },
                { game: "Table Tennis", status: "participated", date: "2024-01-20" }
            ]
        }
    },
    {
        id: 5,
        name: "Satwik",
        photo: "satwik.jpg",
        achievements: {
            totalGames: 11,
            gamesWon: 7,
            records: [
                { game: "Cricket Tournament", status: "won", date: "2024-03-30" },
                { game: "Baseball Championship", status: "won", date: "2024-02-22" },
                { game: "Hockey League", status: "participated", date: "2024-01-25" }
            ]
        }
    }
];

// Function to create video cards
function createVideoCard(video) {
    return `
        <div class="video-card">
            <div class="video-container">
                <video 
                    controls 
                    preload="metadata"
                    class="video-player"
                    poster=""
                    onloadeddata="generateThumbnail(this)"
                >
                    <source src="${video.videoUrl}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
            <div class="video-info">
                <h3 class="video-title">${video.title}</h3>
                <p class="video-description">${video.description}</p>
                <span class="video-date">
                    <i class="far fa-calendar-alt"></i> ${video.date}
                </span>
            </div>
        </div>
    `;
}

// Add function to generate thumbnails
function generateThumbnail(videoElement) {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    
    // Set canvas size to video size
    canvas.width = videoElement.videoWidth;
    canvas.height = videoElement.videoHeight;
    
    // Seek to 1 second or 25% of the video
    videoElement.currentTime = Math.min(1, videoElement.duration * 0.25);
    
    // Draw the video frame on the canvas
    videoElement.addEventListener('seeked', function() {
        // Draw the current frame
        context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        
        // Convert canvas to data URL and set as poster
        try {
            const thumbnailUrl = canvas.toDataURL('image/jpeg');
            videoElement.setAttribute('poster', thumbnailUrl);
            handleThumbnailLoad(videoElement);
        } catch (e) {
            console.error('Error generating thumbnail:', e);
        }
    }, { once: true }); // Remove listener after first execution
}

// Add this to handle thumbnail loading state
function handleThumbnailLoad(videoElement) {
    const container = videoElement.closest('.video-container');
    if (container) {
        container.classList.add('thumbnail-loaded');
    }
}

// Function to create game cards
function createGameCard(game, index) {
    return `
        <div class="card animate__animated animate__slideInUp" style="--animation-order: ${index}">
            <div class="card-body">
                <h5 class="card-title">
                    <i class="fas fa-trophy"></i> ${game.name}
                </h5>
                <h6 class="card-subtitle mb-2">Winners</h6>
                <ul>
                    ${game.winners.map((winner, idx) => `
                        <li class="animate__animated animate__fadeIn" style="--animation-delay: ${idx * 0.2}s">
                            ${winner}
                        </li>
                    `).join('')}
                </ul>
                <p class="card-text">
                    <small class="text-muted">
                        <i class="far fa-calendar-alt"></i> ${game.date}
                    </small>
                </p>
            </div>
        </div>
    `;
}

// Function to create Hall of Fame profile cards
function createProfileCard(profile) {
    return `
        <div class="profile-card">
            <div class="achievement-badge">
                <i class="fas fa-trophy"></i>
            </div>
            <div class="content-wrapper">
                <img src="${profile.photo}" alt="${profile.name}" class="profile-image">
                <h3 class="profile-name">${profile.name}</h3>
                <button class="records-btn" onclick="toggleRecords(${profile.id})">
                    <i class="fas fa-medal"></i> View Records
                </button>
                <div class="records-container" id="records-${profile.id}">
                    <div class="records-summary">
                        <p>Total Games: ${profile.achievements.totalGames}</p>
                        <p>Games Won: ${profile.achievements.gamesWon}</p>
                    </div>
                    <div class="records-list">
                        ${profile.achievements.records.map(record => `
                            <div class="game-record ${record.status}">
                                <div class="game-info">
                                    <span class="status-indicator"></span>
                                    <span>${record.game}</span>
                                </div>
                                <span class="date">${record.date}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Function to toggle records visibility
function toggleRecords(profileId) {
    const recordsContainer = document.getElementById(`records-${profileId}`);
    recordsContainer.classList.toggle('active');
}

// Navigation handling
document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        
        // Update active states
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.querySelector(`#${targetId}`).classList.add('active');
        
        // Update sidebar active state
        document.querySelectorAll('.sidebar nav li').forEach(item => {
            item.classList.remove('active');
        });
        link.parentElement.classList.add('active');
    });
});

// Initialize the dashboard
function initializeDashboard() {
    // Populate video highlights grid
    const videoGrid = document.querySelector('.video-highlights-grid');
    videoGrid.innerHTML = videoHighlightsData.map(video => createVideoCard(video)).join('');
    
    // Add animation delay to each card
    document.querySelectorAll('.video-card').forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Populate games grid with index for animation ordering
    const gamesGrid = document.querySelector('.games-grid');
    gamesGrid.innerHTML = gamesData.map((game, index) => createGameCard(game, index)).join('');
    
    // Populate hall of fame with profile cards
    const fameGrid = document.querySelector('.fame-grid');
    fameGrid.innerHTML = hallOfFameData.map(profile => createProfileCard(profile)).join('');
}

// Add animation when showing records
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('records-btn')) {
        const recordsList = e.target.nextElementSibling.querySelector('.records-list');
        recordsList.classList.add('animate__animated', 'animate__fadeIn');
    }
});

// Initialize when document is ready
document.addEventListener('DOMContentLoaded', initializeDashboard);

// Add mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const sidebarNav = document.querySelector('.sidebar nav');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    sidebarNav.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.sidebar') && sidebarNav.classList.contains('active')) {
        mobileMenuBtn.classList.remove('active');
        sidebarNav.classList.remove('active');
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.sidebar nav a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        sidebarNav.classList.remove('active');
    });
});

// Update viewport height for mobile browsers
function updateMobileHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

window.addEventListener('resize', updateMobileHeight);
updateMobileHeight(); 