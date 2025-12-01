let originalUserScores = {};
let currentUserScores = {};
let hasChanges = false;

// Update the full URL when inputs change
function updateUrl() {
    const channelId = document.getElementById('channelId').value || '{CHANNEL_ID}';
    const endpoint = document.getElementById('endpoint').value;
    const fullUrl = `https://kvstore.streamelements.com/v2/channel/${channelId}/${endpoint}`;
    document.getElementById('fullUrl').textContent = fullUrl;
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Event listeners for URL updates
    document.getElementById('channelId').addEventListener('input', updateUrl);
    document.getElementById('endpoint').addEventListener('change', updateUrl);
    
    // Initialize with default URL
    updateUrl();
});

// Show/hide error and success messages
function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
    document.getElementById('successMessage').style.display = 'none';
}

function showSuccess(message) {
    const successDiv = document.getElementById('successMessage');
    successDiv.textContent = message;
    successDiv.style.display = 'block';
    document.getElementById('errorMessage').style.display = 'none';
}

function hideMessages() {
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('successMessage').style.display = 'none';
}

// Load user scores from API
async function loadUserScores() {
    const channelId = document.getElementById('channelId').value.trim();
    const apiKey = document.getElementById('apiKey').value.trim();
    const endpoint = document.getElementById('endpoint').value;

    if (!channelId || !apiKey) {
        showError('Please fill in both Channel ID and API Key');
        return;
    }

    const loadBtn = document.getElementById('loadBtn');
    const loading = document.getElementById('loading');
    
    hideMessages();
    loadBtn.disabled = true;
    loading.style.display = 'inline';

    const url = `https://kvstore.streamelements.com/v2/channel/${channelId}/${endpoint}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'accept-language': 'en-US,en;q=0.9',
                'authorization': `apikey ${apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Extract userScores from the response
        if (data && data.userScores && typeof data.userScores === 'object') {
            originalUserScores = { ...data.userScores };
            currentUserScores = { ...data.userScores };
            displayUserScores();
            showSuccess(`Loaded ${Object.keys(data.userScores).length} user scores successfully!`);
        } else {
            showError('No userScores found in the response. The data structure may be different than expected.');
            console.log('Full response:', data);
        }

    } catch (error) {
        console.error('Request failed:', error);
        showError(`Failed to load data: ${error.message}`);
        document.getElementById('scoresContainer').style.display = 'none';
    } finally {
        loadBtn.disabled = false;
        loading.style.display = 'none';
    }
}

// Display user scores in editable table
function displayUserScores() {
    const scoresContainer = document.getElementById('scoresContainer');
    const scoresBody = document.getElementById('scoresBody');
    
    scoresContainer.style.display = 'block';
    scoresBody.innerHTML = '';
    
    // Sort users alphabetically for consistent display
    const sortedUsers = Object.keys(currentUserScores).sort();
    
    sortedUsers.forEach(username => {
        createUserRow(username, currentUserScores[username]);
    });
    
    updateChangesUI();
}

// Create a table row for a user
function createUserRow(username, score, isNew = false) {
    const scoresBody = document.getElementById('scoresBody');
    const row = document.createElement('tr');
    if (isNew) row.classList.add('new-user-row');
    
    row.innerHTML = `
        <td class="username-cell">
            ${isNew ? 
                `<input type="text" class="username-input" value="${username}" onblur="updateUsername(this, '${username}')" onkeypress="handleUsernameKeypress(event, this, '${username}')" placeholder="Enter username">` :
                username
            }
        </td>
        <td>
            <input type="number" class="score-input" value="${score}" 
                   onchange="updateScore('${username}', this.value)" 
                   onkeypress="handleScoreKeypress(event)"
                   min="0" step="1">
        </td>
        <td>
            <button class="delete-btn" onclick="deleteUser('${username}')">🗑️ Delete</button>
        </td>
    `;
    
    scoresBody.appendChild(row);
}

// Update score when input changes
function updateScore(username, newScore) {
    const score = parseInt(newScore) || 0;
    currentUserScores[username] = score;
    checkForChanges();
}

// Update username for new users
function updateUsername(input, oldUsername) {
    const newUsername = input.value.trim();
    if (newUsername && newUsername !== oldUsername) {
        if (newUsername in currentUserScores) {
            showError('Username already exists!');
            input.value = oldUsername;
            return;
        }
        
        // Update the data
        currentUserScores[newUsername] = currentUserScores[oldUsername];
        delete currentUserScores[oldUsername];
        
        // Refresh the display
        displayUserScores();
        checkForChanges();
    }
}

// Handle keypress events for username input
function handleUsernameKeypress(event, input, oldUsername) {
    if (event.key === 'Enter') {
        updateUsername(input, oldUsername);
        input.blur();
    }
}

// Handle keypress events for score input
function handleScoreKeypress(event) {
    if (event.key === 'Enter') {
        event.target.blur();
    }
}

// Delete a user
function deleteUser(username) {
    if (confirm(`Are you sure you want to delete ${username}?`)) {
        delete currentUserScores[username];
        displayUserScores();
        checkForChanges();
    }
}

// Add a new user
function addNewUser() {
    const newUsername = `user_${Date.now()}`;
    currentUserScores[newUsername] = 0;
    createUserRow(newUsername, 0, true);
    checkForChanges();
}

// Merge usernames that differ only in capitalization
function mergeCapitalization() {
    // Group usernames by lowercase version
    const groups = {};
    
    for (const username in currentUserScores) {
        const lower = username.toLowerCase();
        if (!groups[lower]) {
            groups[lower] = [];
        }
        groups[lower].push(username);
    }
    
    // Convert all usernames to lowercase and merge duplicates
    let mergeCount = 0;
    let totalMerged = 0;
    let totalConverted = 0;
    
    for (const lower in groups) {
        // Use lowercase version as canonical name
        const canonical = lower;
        let totalScore = 0;
        
        // Sum all scores
        groups[lower].forEach(username => {
            totalScore += currentUserScores[username];
        });
        
        // Remove all variants
        groups[lower].forEach(username => {
            delete currentUserScores[username];
        });
        
        // Add back the lowercase name with summed score
        currentUserScores[canonical] = totalScore;
        
        totalConverted++;
        if (groups[lower].length > 1) {
            mergeCount++;
            totalMerged += groups[lower].length;
        }
    }
    
    if (mergeCount > 0) {
        showSuccess(`Converted ${totalConverted} username(s) to lowercase and merged ${mergeCount} duplicate group(s)`);
    } else {
        showSuccess(`Converted ${totalConverted} username(s) to lowercase`);
    }
    displayUserScores();
    checkForChanges();
}

// Check if there are changes and update UI accordingly
function checkForChanges() {
    hasChanges = JSON.stringify(originalUserScores) !== JSON.stringify(currentUserScores);
    updateChangesUI();
}

// Update the changes UI elements
function updateChangesUI() {
    const saveBtn = document.getElementById('saveBtn');
    const changesInfo = document.getElementById('changesInfo');
    
    if (hasChanges) {
        saveBtn.style.display = 'inline-block';
        changesInfo.style.display = 'block';
        
        // Highlight changed inputs
        document.querySelectorAll('.score-input').forEach(input => {
            const username = input.closest('tr').querySelector('.username-cell').textContent.trim();
            const currentValue = parseInt(input.value) || 0;
            const originalValue = originalUserScores[username];
            
            if (originalValue === undefined || currentValue !== originalValue) {
                input.classList.add('changed');
            } else {
                input.classList.remove('changed');
            }
        });
    } else {
        saveBtn.style.display = 'none';
        changesInfo.style.display = 'none';
        document.querySelectorAll('.score-input').forEach(input => {
            input.classList.remove('changed');
        });
    }
}

// Save changes to the server
async function saveChanges() {
    const channelId = document.getElementById('channelId').value.trim();
    const apiKey = document.getElementById('apiKey').value.trim();
    const endpoint = document.getElementById('endpoint').value;

    if (!channelId || !apiKey) {
        showError('Please fill in both Channel ID and API Key');
        return;
    }

    const saveBtn = document.getElementById('saveBtn');
    const saveLoading = document.getElementById('saveLoading');
    
    hideMessages();
    saveBtn.disabled = true;
    saveLoading.style.display = 'block';

    const url = `https://kvstore.streamelements.com/v2/channel/${channelId}/`;
    const payload = {
        key: endpoint,
        value: {
            userScores: currentUserScores
        }
    };

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'accept': 'application/json, text/plain, */*',
                'accept-language': 'en-US,en;q=0.9',
                'authorization': `apikey ${apiKey}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        // Update the original scores to match current
        originalUserScores = { ...currentUserScores };
        hasChanges = false;
        updateChangesUI();
        
        showSuccess(`Successfully saved ${Object.keys(currentUserScores).length} user scores!`);

    } catch (error) {
        console.error('Save failed:', error);
        showError(`Failed to save changes: ${error.message}`);
    } finally {
        saveBtn.disabled = false;
        saveLoading.style.display = 'none';
    }
}

// Clear all data
function clearData() {
    if (hasChanges && !confirm('You have unsaved changes. Are you sure you want to clear all data?')) {
        return;
    }
    
    originalUserScores = {};
    currentUserScores = {};
    hasChanges = false;
    
    document.getElementById('scoresContainer').style.display = 'none';
    hideMessages();
}