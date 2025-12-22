// Gallery navigation and rendering
let currentPath = [];
let currentImages = [];
let currentImageIndex = 0;

// Initialize gallery
function renderGallery() {
    const container = document.getElementById('gallery-container');
    const currentFolder = getCurrentFolder();
    
    // Update section title based on current view
    updateSectionTitle(currentFolder);
    
    if (currentFolder.images) {
        // Render images
        renderImages(currentFolder.images);
    } else if (currentFolder.folders) {
        // Render folders
        renderFolders(currentFolder.folders);
    }
    
    updateBackButton();
}

function getCurrentFolder() {
    let folder = portfolioStructure;
    for (let pathItem of currentPath) {
        folder = folder.folders.find(f => f.name === pathItem);
    }
    return folder;
}

function updateSectionTitle(folder) {
    const titleElement = document.getElementById('portfolio-title');
    const subtitleElement = document.getElementById('portfolio-subtitle');
    
    if (currentPath.length === 0) {
        // Main portfolio view
        titleElement.textContent = 'Portfolio';
        subtitleElement.textContent = 'Explore my work across different categories';
    } else {
        // Inside a folder
        titleElement.textContent = folder.name;
        subtitleElement.textContent = folder.description || '';
    }
}

function renderFolders(folders) {
    const container = document.getElementById('gallery-container');
    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${folders.map(folder => {
                const coverImage = folder.images ? folder.images[0].src : (folder.coverImage || '');
                
                return `
                <div class="folder-card" onclick="navigateToFolder('${folder.name}')">
                    ${coverImage ? `<img src="${coverImage}" alt="${folder.name} cover">` : ''}
                    <div class="p-6">
                        ${!coverImage ? `<div class="folder-icon">📁</div>` : ''}
                        <h3 class="text-xl font-bold text-gray-900 mb-2">${folder.name}</h3>
                        <p class="text-gray-600 text-sm mb-2">${folder.description || ''}</p>
                        ${folder.images ? `<p class="text-sm text-blue-600 font-semibold">${folder.images.length} photos</p>` : `<p class="text-sm text-blue-600 font-semibold">${folder.folders ? folder.folders.length : 0} collections</p>`}
                    </div>
                </div>
            `}).join('')}
        </div>
    `;
}

function renderImages(images) {
    const container = document.getElementById('gallery-container');
    currentImages = images;
    container.innerHTML = `
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            ${images.map((image, index) => `
                <div class="gallery-item card-shadow" onclick="openLightbox(${index})">
                    <img src="${image.src}" alt="${image.alt}">
                </div>
            `).join('')}
        </div>
    `;
}

function navigateToFolder(folderName) {
    currentPath.push(folderName);
    renderGallery();
    document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
}

function navigateBack() {
    if (currentPath.length > 0) {
        currentPath.pop();
        renderGallery();
        document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    }
}

function updateBackButton() {
    const backButton = document.getElementById('backButton');
    backButton.style.display = currentPath.length > 0 ? 'inline-flex' : 'none';
}

// Lightbox functionality
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    img.src = currentImages[index].src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + currentImages.length) % currentImages.length;
    document.getElementById('lightbox-img').src = currentImages[currentImageIndex].src;
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % currentImages.length;
    document.getElementById('lightbox-img').src = currentImages[currentImageIndex].src;
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderGallery();
    document.getElementById('backButton').addEventListener('click', navigateBack);
    document.getElementById('closeLightbox').addEventListener('click', closeLightbox);
    document.getElementById('prevImage').addEventListener('click', showPrevImage);
    document.getElementById('nextImage').addEventListener('click', showNextImage);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrevImage();
        if (e.key === 'ArrowRight') showNextImage();
    });
});
