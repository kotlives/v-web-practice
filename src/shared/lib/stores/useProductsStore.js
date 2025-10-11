import { create } from 'zustand'
import { products } from 'C:/Users/kotli/Универ/Веб/Практики/Практика 2/app/src/entities/product'

export const useProductsStore = create((set, get) => ({
  products: [...products],
  searchQuery: '',
  activeNav: 'home',
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  setActiveNav: (nav) => set({ activeNav: nav }),
  
  getFilteredProducts: () => {
    const { products, searchQuery } = get()
    return products.filter(product => 
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }
}))