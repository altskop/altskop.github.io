const gameData = {
    crest: [
        { name: 'Architect', image: 'crests/architect.png', red: 3, blue: 2, yellow: 2 },
        { name: 'Beast', image: 'crests/beast.png', red: 2, blue: 2, yellow: 0 },
        { name: 'Cursed', image: 'crests/cursed.png', red: 0, blue: 0, yellow: 0 },
        { name: 'Hunter', image: 'crests/hunter.png', red: 2, blue: 2, yellow: 2 },
        { name: 'Reaper', image: 'crests/reaper.png', red: 2, blue: 2, yellow: 2 },
        { name: 'Shaman', image: 'crests/shaman.png', red: 0, blue: 2, yellow: 0 },
        { name: 'Wanderer', image: 'crests/wanderer.png', red: 1, blue: 2, yellow: 3 },
        { name: 'Witch', image: 'crests/witch.png', red: 2, blue: 3, yellow: 0 }
    ],
    red: [
        { name: "Flea Brew", image: "tools/red/59px-Flea_Brew.png" },
        { name: "Voltvessels (Bola)", image: "tools/red/60px-Voltvessels2.png", excludeGroup: "voltvessels" },
        { name: "Needle Phial", image: "tools/red/67px-Needle_Phial.png" },
        { name: "Tacks", image: "tools/red/67px-Tacks.png" },
        { name: "Voltvessels (Spear)", image: "tools/red/67px-Voltvessels.png", excludeGroup: "voltvessels" },
        { name: "Delver's Drill", image: "tools/red/70px-Delver's_Drill.png" },
        { name: "Curveclaw", image: "tools/red/71px-Curveclaw.png", excludeGroup: "curveclaw" },
        { name: "Snare Setter", image: "tools/red/71px-Snare_Setter.png" },
        { name: "Throwing Ring", image: "tools/red/71px-Throwing_Ring.png" },
        { name: "Cogfly", image: "tools/red/72px-Cogfly.png" },
        { name: "Cogwork Wheel", image: "tools/red/72px-Cogwork_Wheel.png" },
        { name: "Conchcutter", image: "tools/red/72px-Conchcutter.png" },
        { name: "Curvesickle", image: "tools/red/72px-Curvesickle.png", excludeGroup: "curveclaw" },
        { name: "Flintslate", image: "tools/red/72px-Flintslate.png" },
        { name: "Forge Daughter Silkshot", image: "tools/red/72px-Forge_Daughter_Silkshot.png", excludeGroup: "silkshot" },
        { name: "Longpin", image: "tools/red/72px-Longpin.png" },
        { name: "Pimpillo", image: "tools/red/72px-Pimpillo.png" },
        { name: "Plasmium Phial", image: "tools/red/72px-Plasmium_Phial.png" },
        { name: "Rosary Cannon", image: "tools/red/72px-Rosary_Cannon.png" },
        { name: "Silkshot", image: "tools/red/72px-Silkshot.png", excludeGroup: "silkshot" },
        { name: "Sting Shard", image: "tools/red/72px-Sting_Shard.png" },
        { name: "Straight Pin", image: "tools/red/72px-Straight_Pin.png" },
        { name: "Threefold Pin", image: "tools/red/72px-Threefold_Pin.png" },
        { name: "Twelfth Architect Silkshot", image: "tools/red/72px-Twelfth_Architect_Silkshot.png", excludeGroup: "silkshot" }
    ],
    blue: [
        { name: "Claw Mirror", image: "tools/blue/52px-Claw_Mirror.png", excludeGroup: "claw_mirror" },
        { name: "Longclaw", image: "tools/blue/52px-Longclaw.png" },
        { name: "Spool Extender", image: "tools/blue/52px-Spool_Extender.png" },
        { name: "Magma Bell", image: "tools/blue/55px-Magma_Bell.png" },
        { name: "Pin Badge", image: "tools/blue/58px-Pin_Badge.png" },
        { name: "Warding Bell", image: "tools/blue/59px-Warding_Bell.png" },
        { name: "Druid's Eye", image: "tools/blue/62px-Druid's_Eye.png", excludeGroup: "druids_eye" },
        { name: "Quick Sling", image: "tools/blue/63px-Quick_Sling.png" },
        { name: "Wispfire Lantern", image: "tools/blue/64px-Wispfire_Lantern.png" },
        { name: "Egg of Flealia", image: "tools/blue/65px-Egg_of_Flealia.png" },
        { name: "Multibinder", image: "tools/blue/65px-Multibinder.png" },
        { name: "Pollip Pouch", image: "tools/blue/66px-Pollip_Pouch.png" },
        { name: "Weavelight", image: "tools/blue/66px-Weavelight.png" },
        { name: "Claw Mirrors", image: "tools/blue/69px-Claw_Mirrors.png", excludeGroup: "claw_mirror" },
        { name: "Druid's Eyes", image: "tools/blue/69px-Druid's_Eyes.png", excludeGroup: "druids_eye" },
        { name: "Injector Band", image: "tools/blue/69px-Injector_Band.png" },
        { name: "Memory Crystal", image: "tools/blue/70px-Memory_Crystal.png" },
        { name: "Volt Filament", image: "tools/blue/70px-Volt_Filament.png" },
        { name: "Snitch Pick", image: "tools/blue/71px-Snitch_Pick.png" },
        { name: "Fractured Mask", image: "tools/blue/72px-Fractured_Mask.png" },
        { name: "Reserve Bind", image: "tools/blue/72px-Reserve_Bind.png" },
        { name: "Sawtooth Circlet", image: "tools/blue/72px-Sawtooth_Circlet.png" },
        { name: "Wreath of Purity", image: "tools/blue/72px-Wreath_of_Purity.png" }
    ],
    yellow: [
        { name: "Spider Strings", image: "tools/yellow/65px-Spider_Strings.png" },
        { name: "Silkspeed Anklets", image: "tools/yellow/66px-Silkspeed_Anklets.png" },
        { name: "Dead Bug's Purse", image: "tools/yellow/68px-Dead_Bug's_Purse.png", excludeGroup: "dead_bug_purse" },
        { name: "Magnetite Brooch", image: "tools/yellow/70px-Magnetite_Brooch.png" },
        { name: "Magnetite Dice", image: "tools/yellow/71px-Magnetite_Dice.png" },
        { name: "Ascendant's Grip", image: "tools/yellow/72px-Ascendant's_Grip.png" },
        { name: "Barbed Bracelet", image: "tools/yellow/72px-Barbed_Bracelet.png" },
        { name: "Compass", image: "tools/yellow/72px-Compass.png" },
        { name: "Scuttlebrace", image: "tools/yellow/72px-Scuttlebrace.png" },
        { name: "Shard Pendant", image: "tools/yellow/72px-Shard_Pendant.png" },
        { name: "Shell Satchel", image: "tools/yellow/72px-Shell_Satchel.png", excludeGroup: "dead_bug_purse" },
        { name: "Thief's Mark", image: "tools/yellow/72px-Thief's_Mark.png" },
        { name: "Weighted Belt", image: "tools/yellow/72px-Weighted_Belt.png" }
    ]
};

function setCookie(name, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    const encodedValue = encodeURIComponent(value);
    const cookieString = name + "=" + encodedValue + ";" + expires + ";path=/";
    document.cookie = cookieString;
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) {
            const encodedValue = c.substring(nameEQ.length, c.length);
            return decodeURIComponent(encodedValue);
        }
    }
    return null;
}

function init() {
    loadPreferences();
    createItemGrids();
    addEventListeners();
}

function loadPreferences() {
}

function getEnabledItemsFromUI(category) {
    const items = gameData[category];
    const enabled = [];
    
    items.forEach((item, index) => {
        const checkbox = document.getElementById(`${category}_${index}`);
        if (checkbox && checkbox.checked) {
            enabled.push(item);
        }
    });
    
    return enabled;
}

function getEnabledItems(category) {
    const saved = getCookie(`enabled_${category}`);
    if (!saved) {
        return gameData[category].map((_, index) => index);
    }
    return JSON.parse(saved);
}

function saveEnabledItems(category, enabledIndices) {
    const value = JSON.stringify(enabledIndices);
    setCookie(`enabled_${category}`, value);
}

function createItemGrids() {
    createGrid('crest', 'crestGrid', gameData.crest);
    createGrid('red', 'redGrid', gameData.red);
    createGrid('blue', 'blueGrid', gameData.blue);
    createGrid('yellow', 'yellowGrid', gameData.yellow);
}

function createGrid(category, gridId, items) {
    const grid = document.getElementById(gridId);
    const enabledItems = getEnabledItems(category);
    
    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'item-card';
        const isEnabled = enabledItems.includes(index);
        if (isEnabled) card.classList.add('selected');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `${category}_${index}`;
        checkbox.checked = isEnabled;
        checkbox.addEventListener('change', (e) => {
            toggleItem(category, index, e.target.checked);
        });
        
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.onerror = () => {
            img.style.display = 'none';
            console.warn(`Image not found: ${item.image}`);
        };
        
        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = item.name;
        
        if (category === 'crest' && item.red !== undefined) {
            const slotInfo = document.createElement('div');
            slotInfo.className = 'slot-info';
            slotInfo.innerHTML = `
                <span class="slot-count">${item.red}<img src="tools/20px-Red_Tools_Icon.png" alt="Red"></span>
                <span class="slot-count">${item.blue}<img src="tools/20px-Blue_Tools_Icon.png" alt="Blue"></span>
                <span class="slot-count">${item.yellow}<img src="tools/20px-Yellow_Tools_Icon.png" alt="Yellow"></span>
            `;
            label.appendChild(slotInfo);
        }
        
        card.appendChild(checkbox);
        card.appendChild(img);
        card.appendChild(label);
        
        card.addEventListener('click', (e) => {
            // Don't toggle if clicking the checkbox or label directly (they handle it themselves)
            if (e.target === checkbox || e.target === label) {
                return;
            }
            checkbox.checked = !checkbox.checked;
            checkbox.dispatchEvent(new Event('change'));
        });
        
        grid.appendChild(card);
    });
}

function toggleItem(category, index, enabled) {
    const checkbox = document.getElementById(`${category}_${index}`);
    const card = checkbox.parentElement;
    if (enabled) {
        card.classList.add('selected');
    } else {
        card.classList.remove('selected');
    }
    
    saveCurrentState(category);
}

function saveCurrentState(category) {
    const items = gameData[category];
    const enabledIndices = [];
    
    items.forEach((_, index) => {
        const checkbox = document.getElementById(`${category}_${index}`);
        if (checkbox && checkbox.checked) {
            enabledIndices.push(index);
        }
    });
    
    saveEnabledItems(category, enabledIndices);
}

function toggleAll(category) {
    const items = gameData[category];
    
    let checkedCount = 0;
    items.forEach((_, index) => {
        const checkbox = document.getElementById(`${category}_${index}`);
        if (checkbox && checkbox.checked) {
            checkedCount++;
        }
    });
    
    // If all are checked, deselect all. Otherwise, select all.
    const shouldSelectAll = checkedCount < items.length;
    
    items.forEach((_, index) => {
        const checkbox = document.getElementById(`${category}_${index}`);
        checkbox.checked = shouldSelectAll;
        const card = checkbox.parentElement;
        if (shouldSelectAll) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
    });
    
    saveCurrentState(category);
}

function addEventListeners() {
}

function randomize() {
    const enabledCrests = getEnabledItemsFromUI('crest');
    const enabledRed = getEnabledItemsFromUI('red');
    const enabledBlue = getEnabledItemsFromUI('blue');
    const enabledYellow = getEnabledItemsFromUI('yellow');
    
    if (enabledCrests.length === 0) {
        alert('Please enable at least one crest!');
        return;
    }
    
    // Randomize crest first (it determines slot counts)
    const selectedCrest = enabledCrests[Math.floor(Math.random() * enabledCrests.length)];
    const redSlots = selectedCrest.red;
    const blueSlots = selectedCrest.blue;
    const yellowSlots = selectedCrest.yellow;
    
    // Use whatever tools are available, up to the slot count
    const actualRedSlots = Math.min(redSlots, enabledRed.length);
    const actualBlueSlots = Math.min(blueSlots, enabledBlue.length);
    const actualYellowSlots = Math.min(yellowSlots, enabledYellow.length);
    
    const selectedRed = getRandomItems(enabledRed, actualRedSlots);
    const selectedBlue = getRandomItems(enabledBlue, actualBlueSlots);
    const selectedYellow = getRandomItems(enabledYellow, actualYellowSlots);
    
    displayResults(selectedCrest, selectedRed, selectedBlue, selectedYellow);
}

function getRandomItems(array, count) {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    const selected = [];
    const usedExcludeGroups = new Set();
    
    for (const item of shuffled) {
        if (selected.length >= count) break;
        
        if (item.excludeGroup) {
            if (usedExcludeGroups.has(item.excludeGroup)) {
                continue;
            }
            usedExcludeGroups.add(item.excludeGroup);
        }
        
        selected.push(item);
    }
    
    return selected;
}

function displayResults(crest, redTools, blueTools, yellowTools) {
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.style.display = 'block';
    
    const resultCrest = document.getElementById('resultCrest');
    resultCrest.innerHTML = `
        <img src="${crest.image}" alt="${crest.name}">
        <div class="crest-name">${crest.name}</div>
        <div class="crest-slots">
            <span class="slot-count">${crest.red} <img src="tools/20px-Red_Tools_Icon.png" alt="Red"></span>
            <span class="slot-count">${crest.blue} <img src="tools/20px-Blue_Tools_Icon.png" alt="Blue"></span>
            <span class="slot-count">${crest.yellow} <img src="tools/20px-Yellow_Tools_Icon.png" alt="Yellow"></span>
        </div>
    `;
    
    displayToolList('resultRed', redTools);
    displayToolList('resultBlue', blueTools);
    displayToolList('resultYellow', yellowTools);
    
    // resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function displayToolList(elementId, tools) {
    const container = document.getElementById(elementId);
    
    if (tools.length === 0) {
        container.innerHTML = '<div class="empty-message">No tools selected</div>';
        return;
    }
    
    container.innerHTML = tools.map(tool => `
        <div class="result-item">
            <img src="${tool.image}" alt="${tool.name}">
            <div class="item-name">${tool.name}</div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', init);
