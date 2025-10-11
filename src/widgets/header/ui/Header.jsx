import { SearchProducts } from 'C:/Users/kotli/Универ/Веб/Практики/Практика 2/app/src/features/search-products/ui/SearchProducts'

export const Header = () => {
  return (
    <header className="bg-white border-b-2 border-black fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-[1512px] mx-auto px-6 py-3 h-[68px] flex justify-between items-center">
        <div className="text-2xl font-bold">Магазин</div>
        <SearchProducts />
      </nav>
    </header>
  )
}