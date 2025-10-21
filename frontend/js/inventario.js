async function createCategory(data) {
    const response = await fetch('/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Error al crear categoría');
    return response.json();
}

async function getCategories() {
    const response = await fetch('/api/categories');
    if (!response.ok) throw new Error('Error al obtener categorías');
    return response.json();
}

async function updateCategory(id, data) {
    const response = await fetch(`/api/categories/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Error al actualizar categoría');
    return response.json();
}

async function createProduct(data) {
    const response = await fetch('/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Error al crear producto');
    return response.json();
}

async function getProducts() {
    const response = await fetch('/api/products');
    if (!response.ok) throw new Error('Error al obtener productos');
    return response.json();
}

async function updateProduct(id, data) {
    const response = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error('Error al actualizar producto');
    return response.json();
}