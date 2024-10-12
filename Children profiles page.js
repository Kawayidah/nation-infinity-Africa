const childrenData = [
    {
        id: 1,
        name: "Alice Johnson",
        age: 10,
        classLevel: "Class 5",
        interests: "Reading, Dancing",
        background: "Alice loves reading fairy tales and dancing in her spare time.",
        status: "Current",
        image: "file:///F:/Nation%20infinity%20wedsite/image/ceo.jpg"
    },
    {
        id: 2,
        name: "Brian Smith",
        age: 12,
        classLevel: "Class 6",
        interests: "Football, Drawing",
        background: "Brian is an aspiring artist who enjoys playing football with friends.",
        status: "Current",
        image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Brian"
    },
    {
        id: 3,
        name: "Clara Williams",
        age: 8,
        classLevel: "Class 4",
        interests: "Cooking, Singing",
        background: "Clara enjoys cooking with her mother and singing in the choir.",
        status: "Not Current",
        image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Clara"
    },
    {
        id: 4,
        name: "David Brown",
        age: 11,
        classLevel: "Class 5",
        interests: "Basketball, Video Games",
        background: "David is a sports enthusiast who loves playing basketball and video games.",
        status: "Current",
        image: "https://via.placeholder.com/150/FFC300/FFFFFF?text=David"
    },
    {
        id: 5,
        name: "Emma Davis",
        age: 9,
        classLevel: "Class 4",
        interests: "Art, Nature",
        background: "Emma enjoys painting and exploring nature during her free time.",
        status: "Current",
        image: "https://via.placeholder.com/150/900C3F/FFFFFF?text=Emma"
    },
    {
        id: 6,
        name: "Franklin Garcia",
        age: 13,
        classLevel: "Class 7",
        interests: "Soccer, Reading",
        background: "Franklin loves playing soccer and has a passion for reading adventure novels.",
        status: "Not Current",
        image: "https://via.placeholder.com/150/581845/FFFFFF?text=Franklin"
    },
    {
        id: 7,
        name: "Grace Martinez",
        age: 10,
        classLevel: "Class 5",
        interests: "Singing, Crafts",
        background: "Grace is a creative soul who enjoys singing and making crafts.",
        status: "Current",
        image: "https://via.placeholder.com/150/C70039/FFFFFF?text=Grace"
    },
    {
        id: 8,
        name: "Henry Lee",
        age: 12,
        classLevel: "Class 6",
        interests: "Science, Hiking",
        background: "Henry is fascinated by science and loves hiking with friends.",
        status: "Current",
        image: "https://via.placeholder.com/150/FFC300/FFFFFF?text=Henry"
    },
    {
        id: 9,
        name: "Isabella Wilson",
        age: 11,
        classLevel: "Class 5",
        interests: "Swimming, Dancing",
        background: "Isabella enjoys swimming and dancing at local events.",
        status: "Not Current",
        image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Isabella"
    },
    {
        id: 10,
        name: "Jack Robinson",
        age: 10,
        classLevel: "Class 5",
        interests: "Football, Music",
        background: "Jack loves playing football and is a big fan of music.",
        status: "Current",
        image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Jack"
    },
    {
        id: 11,
        name: "Katherine Adams",
        age: 9,
        classLevel: "Class 4",
        interests: "Photography, Gardening",
        background: "Katherine enjoys capturing moments with her camera and gardening.",
        status: "Current",
        image: "https://via.placeholder.com/150/DAF7A6/FFFFFF?text=Katherine"
    },
    {
        id: 12,
        name: "Liam Carter",
        age: 11,
        classLevel: "Class 5",
        interests: "Coding, Video Games",
        background: "Liam is passionate about coding and loves to create video games.",
        status: "Current",
        image: "https://via.placeholder.com/150/FFC300/FFFFFF?text=Liam"
    },
    {
        id: 13,
        name: "Mia Turner",
        age: 10,
        classLevel: "Class 5",
        interests: "Dance, Baking",
        background: "Mia loves to dance and often bakes delicious treats with her family.",
        status: "Current",
        image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Mia"
    },
    {
        id: 14,
        name: "Noah Evans",
        age: 12,
        classLevel: "Class 6",
        interests: "Basketball, Reading",
        background: "Noah enjoys playing basketball and reading about his favorite athletes.",
        status: "Current",
        image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Noah"
    },
    {
        id: 15,
        name: "Olivia Martin",
        age: 9,
        classLevel: "Class 4",
        interests: "Drawing, Swimming",
        background: "Olivia loves to draw and enjoys swimming during the summer.",
        status: "Current",
        image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Olivia"
    },
    {
        id: 16,
        name: "Paul Thompson",
        age: 11,
        classLevel: "Class 5",
        interests: "Football, Reading",
        background: "Paul enjoys playing football and loves reading adventure stories.",
        status: "Not Current",
        image: "https://via.placeholder.com/150/FFC300/FFFFFF?text=Paul"
    },
    {
        id: 17,
        name: "Quinn Hall",
        age: 10,
        classLevel: "Class 5",
        interests: "Singing, Crafts",
        background: "Quinn is a creative individual who loves singing and crafting.",
        status: "Current",
        image: "https://via.placeholder.com/150/C70039/FFFFFF?text=Quinn"
    },
    {
        id: 18,
        name: "Riley Young",
        age: 12,
        classLevel: "Class 6",
        interests: "Science, Hiking",
        background: "Riley has a keen interest in science and enjoys hiking with friends.",
        status: "Current",
        image: "https://via.placeholder.com/150/FFC300/FFFFFF?text=Riley"
    },
    {
        id: 19,
        name: "Sophia King",
        age: 11,
        classLevel: "Class 5",
        interests: "Art, Dance",
        background: "Sophia enjoys painting and dancing at local events.",
        status: "Not Current",
        image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Sophia"
    },
    {
        id: 20,
        name: "Tyler Scott",
        age: 10,
        classLevel: "Class 5",
        interests: "Football, Reading",
        background: "Tyler loves football and enjoys reading mystery novels.",
        status: "Current",
        image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Tyler"
    },
    {
        id: 21,
        name: "Uma Brooks",
        age: 9,
        classLevel: "Class 4",
        interests: "Cooking, Gardening",
        background: "Uma enjoys cooking with her family and gardening.",
        status: "Current",
        image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Uma"
    },
    {
        id: 22,
        name: "Victor Lee",
        age: 13,
        classLevel: "Class 7",
        interests: "Soccer, Reading",
        background: "Victor loves playing soccer and reading adventure novels.",
        status: "Not Current",
        image: "https://via.placeholder.com/150/581845/FFFFFF?text=Victor"
    },
    {
        id: 23,
        name: "Willow Chen",
        age: 10,
        classLevel: "Class 5",
        interests: "Photography, Crafts",
        background: "Willow enjoys taking photographs and creating crafts.",
        status: "Current",
        image: "https://via.placeholder.com/150/C70039/FFFFFF?text=Willow"
    },
    {
        id: 24,
        name: "Xander Gomez",
        age: 12,
        classLevel: "Class 6",
        interests: "Swimming, Reading",
        background: "Xander enjoys swimming and reading science fiction books.",
        status: "Current",
        image: "https://via.placeholder.com/150/FFC300/FFFFFF?text=Xander"
    },
    {
        id: 25,
        name: "Yara Thompson",
        age: 11,
        classLevel: "Class 5",
        interests: "Dance, Music",
        background: "Yara loves dancing and enjoys listening to music.",
        status: "Current",
        image: "https://via.placeholder.com/150/DAF7A6/FFFFFF?text=Yara"
    },
    {
        id: 26,
        name: "Zachary White",
        age: 10,
        classLevel: "Class 5",
        interests: "Art, Nature",
        background: "Zachary enjoys painting and exploring nature.",
        status: "Current",
        image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Zachary"
    },
    {
        id: 27,
        name: "Amelia Clarke",
        age: 12,
        classLevel: "Class 6",
        interests: "Reading, Writing",
        background: "Amelia loves reading novels and writing her own stories.",
        status: "Current",
        image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Amelia"
    },
    {
        id: 28,
        name: "Benjamin Hall",
        age: 10,
        classLevel: "Class 5",
        interests: "Soccer, Drawing",
        background: "Benjamin enjoys playing soccer and loves to draw.",
        status: "Current",
        image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Benjamin"
    },
    {
        id: 29,
        name: "Catherine Lewis",
        age: 11,
        classLevel: "Class 5",
        interests: "Swimming, Music",
        background: "Catherine loves swimming and enjoys playing musical instruments.",
        status: "Current",
        image: "https://via.placeholder.com/150/FFC300/FFFFFF?text=Catherine"
    },
    {
        id: 30,
        name: "Daniel Robinson",
        age: 9,
        classLevel: "Class 4",
        interests: "Baking, Dancing",
        background: "Daniel enjoys baking with his family and loves to dance.",
        status: "Current",
        image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Daniel"
    },
    {
        id: 31,
        name: "Evelyn Young",
        age: 11,
        classLevel: "Class 5",
        interests: "Art, Crafting",
        background: "Evelyn enjoys painting and crafting unique items.",
        status: "Current",
        image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Evelyn"
    },
    {
        id: 32,
        name: "Felix Martinez",
        age: 10,
        classLevel: "Class 5",
        interests: "Football, Gaming",
        background: "Felix loves playing football and gaming with friends.",
        status: "Current",
        image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Felix"
    },
    {
        id: 33,
        name: "Grace Lee",
        age: 12,
        classLevel: "Class 6",
        interests: "Swimming, Reading",
        background: "Grace enjoys swimming and loves reading about different cultures.",
        status: "Current",
        image: "https://via.placeholder.com/150/FFC300/FFFFFF?text=Grace"
    },
    {
        id: 34,
        name: "Henry Brown",
        age: 9,
        classLevel: "Class 4",
        interests: "Science, Photography",
        background: "Henry enjoys learning about science and taking photos.",
        status: "Current",
        image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Henry"
    },
    {
        id: 35,
        name: "Ivy Adams",
        age: 11,
        classLevel: "Class 5",
        interests: "Dance, Crafting",
        background: "Ivy enjoys dancing and creating unique crafts.",
        status: "Current",
        image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Ivy"
    },
    {
        id: 36,
        name: "Jake Johnson",
        age: 10,
        classLevel: "Class 5",
        interests: "Basketball, Music",
        background: "Jake loves basketball and enjoys playing musical instruments.",
        status: "Current",
        image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Jake"
    },
    {
        id: 37,
        name: "Kylie Williams",
        age: 9,
        classLevel: "Class 4",
        interests: "Gardening, Baking",
        background: "Kylie enjoys gardening and baking delicious treats.",
        status: "Current",
        image: "https://via.placeholder.com/150/FFC300/FFFFFF?text=Kylie"
    },
    {
        id: 38,
        name: "Leo Green",
        age: 12,
        classLevel: "Class 6",
        interests: "Football, Art",
        background: "Leo loves playing football and is passionate about art.",
        status: "Current",
        image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Leo"
    },
    {
        id: 39,
        name: "Maya Scott",
        age: 11,
        classLevel: "Class 5",
        interests: "Dancing, Reading",
        background: "Maya enjoys dancing and reading fantasy novels.",
        status: "Current",
        image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Maya"
    },
    {
        id: 40,
        name: "Nate Collins",
        age: 10,
        classLevel: "Class 5",
        interests: "Video Games, Sports",
        background: "Nate loves playing video games and is a sports enthusiast.",
        status: "Current",
        image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Nate"
    },
    {
        id: 41,
        name: "Olive Turner",
        age: 9,
        classLevel: "Class 4",
        interests: "Art, Nature",
        background: "Olive enjoys painting and exploring nature.",
        status: "Current",
        image: "https://via.placeholder.com/150/FFC300/FFFFFF?text=Olive"
    },
    {
        id: 42,
        name: "Penny Garcia",
        age: 11,
        classLevel: "Class 5",
        interests: "Singing, Crafts",
        background: "Penny loves to sing and enjoys crafting.",
        status: "Current",
        image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Penny"
    },
    {
        id: 43,
        name: "Quentin Hall",
        age: 12,
        classLevel: "Class 6",
        interests: "Soccer, Music",
        background: "Quentin enjoys playing soccer and loves listening to music.",
        status: "Current",
        image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Quentin"
    },
    {
        id: 44,
        name: "Ruth Lawson",
        age: 10,
        classLevel: "Class 5",
        interests: "Reading, Dance",
        background: "Ruth enjoys reading stories and loves to dance.",
        status: "Current",
        image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Ruth"
    },
    {
        id: 45,
        name: "Seth Harris",
        age: 11,
        classLevel: "Class 5",
        interests: "Football, Gaming",
        background: "Seth loves playing football and enjoys gaming.",
        status: "Current",
        image: "https://via.placeholder.com/150/FFC300/FFFFFF?text=Seth"
    },
    {
        id: 46,
        name: "Tina Martin",
        age: 9,
        classLevel: "Class 4",
        interests: "Swimming, Crafts",
        background: "Tina enjoys swimming and crafting unique items.",
        status: "Current",
        image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Tina"
    },
    {
        id: 47,
        name: "Uriah Torres",
        age: 12,
        classLevel: "Class 6",
        interests: "Drawing, Reading",
        background: "Uriah enjoys drawing and loves to read.",
        status: "Current",
        image: "https://via.placeholder.com/150/33FF57/FFFFFF?text=Uriah"
    },
    {
        id: 48,
        name: "Vera Lopez",
        age: 10,
        classLevel: "Class 5",
        interests: "Gardening, Music",
        background: "Vera loves gardening and enjoys music.",
        status: "Current",
        image: "https://via.placeholder.com/150/3357FF/FFFFFF?text=Vera"
    },
    {
        id: 49,
        name: "Walter Edwards",
        age: 11,
        classLevel: "Class 5",
        interests: "Basketball, Dance",
        background: "Walter enjoys playing basketball and loves to dance.",
        status: "Current",
        image: "https://via.placeholder.com/150/FFC300/FFFFFF?text=Walter"
    },
    {
        id: 50,
        name: "Xena Smith",
        age: 10,
        classLevel: "Class 5",
        interests: "Reading, Sports",
        background: "Xena enjoys reading and loves sports.",
        status: "Current",
        image: "https://via.placeholder.com/150/FF5733/FFFFFF?text=Xena"
 
    }
];

// Function to display profiles
function displayProfiles(data) {
    const profileContainer = document.getElementById('profile-container');
    profileContainer.innerHTML = ''; // Clear previous profiles

    data.forEach(child => {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile-card');

        profileCard.innerHTML = `
            <img src="${child.image}" alt="${child.name}">
            <h3>${child.name}</h3>
            <p>Age: ${child.age}</p>
            <p>Class Level: ${child.classLevel}</p>
            <p>Interests: ${child.interests}</p>
            <p>Background: ${child.background}</p>
            <p>Status: ${child.status}</p>
            ${child.status === 'Current' ? `<button class="support-btn" data-child="${child.name}">Support</button>` : ''}
        `;

        profileContainer.appendChild(profileCard);
    });

    // Add event listeners to support buttons
    document.querySelectorAll('.support-btn').forEach(button => {
        button.addEventListener('click', function() {
            const childName = this.getAttribute('data-child');
            openSupportModal(childName);
        });
    });
}

// Function to open the support modal
function openSupportModal(childName) {
    const modal = document.getElementById('supportModal');
    const childNameElement = document.getElementById('childName');
    childNameElement.textContent = childName;
    modal.style.display = 'block';

    // Close modal event
    document.getElementById('closeModal').onclick = function() {
        modal.style.display = 'none';
    };

    // Form submission event
    document.getElementById('supportForm').onsubmit = function(event) {
        event.preventDefault();
        const supporterName = document.getElementById('supporterName').value;
        const supporterEmail = document.getElementById('supporterEmail').value;
        const supportDetails = document.getElementById('supportDetails').value;

        sendSupportEmail(childName, supporterName, supporterEmail, supportDetails);
        modal.style.display = 'none';
    };
}

// Function to simulate sending the support email (requires backend for actual emailing)
function sendSupportEmail(childName, supporterName, supporterEmail, supportDetails) {
    const ceoEmail = "fredkawayidah@gmail.com";
    const subject = `Support Request for ${childName}`;
    const body = `Supporter Name: ${supporterName}\nSupporter Email: ${supporterEmail}\nChild: ${childName}\nSupport Details: ${supportDetails}`;
    
    // Simulating email sending logic here
    console.log(`Sending email to: ${ceoEmail}\nSubject: ${subject}\nBody: ${body}`);
    alert("Support request submitted successfully!");
}

// Display profiles on page load
displayProfiles(childrenData);

// Search functionality
document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredProfiles = childrenData.filter(child => child.name.toLowerCase().includes(query));
    displayProfiles(filteredProfiles);
});
