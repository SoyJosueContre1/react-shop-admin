const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`,
        users: `${API}/api/${VERSION}/auth/users`,
        categories: `${API}/api/${VERSION}/auth/categories`,
        files: `${API}/api/${VERSION}/auth/files`,
    },
    products: {
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}`
    },
    categories: {
        getCategories: (id) => `${API}/api/${VERSION}/categories/${id}`,
        getCategoriesProduct: (id) => `${API}/api/${VERSION}/categories/${id}/products`
    }
};