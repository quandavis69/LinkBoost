// LinkBoost - Main Application JavaScript

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-search');
    const productsGrid = document.getElementById('products-grid');
    const noResults = document.getElementById('no-results');
    const categoryBtns = document.querySelectorAll('.category-btn');

    // State
    let currentCategory = 'all';
    let searchQuery = '';

    // Initialize
    renderProducts();

    // Search Input Handler
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        toggleClearButton();
        renderProducts();
    });

    // Clear Search Button
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        toggleClearButton();
        searchInput.focus();
        renderProducts();
    });

    // Toggle Clear Button Visibility
    function toggleClearButton() {
        if (searchInput.value.length > 0) {
            clearBtn.classList.add('visible');
        } else {
            clearBtn.classList.remove('visible');
        }
    }

    // Category Filter Handlers
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update current category
            currentCategory = btn.dataset.category;
            renderProducts();
        });
    });

    // Filter Products
    function filterProducts() {
        return products.filter(product => {
            // Category filter
            const categoryMatch = currentCategory === 'all' || product.category === currentCategory;

            // Search filter
            const searchMatch = searchQuery === '' ||
                product.title.toLowerCase().includes(searchQuery) ||
                product.category.toLowerCase().includes(searchQuery);

            return categoryMatch && searchMatch;
        });
    }

    // Render Products
    function renderProducts() {
        const filteredProducts = filterProducts();

        // Clear grid
        productsGrid.innerHTML = '';

        // Show/hide no results message
        if (filteredProducts.length === 0) {
            noResults.classList.add('visible');
            productsGrid.style.display = 'none';
        } else {
            noResults.classList.remove('visible');
            productsGrid.style.display = '';

            // Render product cards
            filteredProducts.forEach((product, index) => {
                const card = createProductCard(product, index);
                productsGrid.appendChild(card);
            });
        }
    }

    // Create Product Card Element
    function createProductCard(product, index) {
        const card = document.createElement('a');
        card.href = product.link;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.05}s`;

        // Badge HTML
        let badgeHtml = '';
        if (product.badge) {
            const badgeLabels = {
                deal: 'Deal',
                new: 'New',
                trending: 'Trending'
            };
            badgeHtml = `<span class="product-badge badge-${product.badge}">${badgeLabels[product.badge]}</span>`;
        }

        // Category label
        const categoryLabels = {
            tech: 'Tech',
            home: 'Home',
            kitchen: 'Kitchen',
            lifestyle: 'Lifestyle'
        };

        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" loading="lazy">
            </div>
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <div class="product-meta">
                    ${badgeHtml}
                    <span class="product-category">${categoryLabels[product.category] || product.category}</span>
                </div>
            </div>
        `;

        return card;
    }

    // Keyboard Navigation for Search
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchQuery = '';
            toggleClearButton();
            searchInput.blur();
            renderProducts();
        }
    });

    // Handle image load errors
    productsGrid.addEventListener('error', (e) => {
        if (e.target.tagName === 'IMG') {
            e.target.src = 'https://via.placeholder.com/150?text=No+Image';
        }
    }, true);
});
