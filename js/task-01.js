function calculateCategories() {
    const categoriesContainer = document.querySelector('ul#categories');
    const categories = Array.from(categoriesContainer.children);
    console.log('Number of categories:', categories.length);

    categories.forEach(category => {
        console.log('Category: ', category.querySelector('h2').innerText);
        console.log('Elements: ', Array.from(category.querySelectorAll('ul>li')).length);
    })
}

calculateCategories();
