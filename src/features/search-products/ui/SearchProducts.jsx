import { useProductsStore } from '@shared/lib/stores/useProductsStore'

export const SearchProducts = () => {
  const { searchQuery, setSearchQuery } = useProductsStore()

  return (
    <div className="flex flex-grow max-w-[400px] mx-5">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск товаров..."
        className="w-full px-3 py-2 border border-gray-300 rounded-l-md outline-none"
      />
      <button className="px-4 py-2 bg-black text-white rounded-r-md">
        Найти
      </button>
    </div>
  )
}