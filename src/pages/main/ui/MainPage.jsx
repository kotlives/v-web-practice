import { Header } from 'C:/Users/kotli/Универ/Веб/Практики/Практика 2/app/src/widgets/header/ui/Header'
import { ProductCard } from 'C:/Users/kotli/Универ/Веб/Практики/Практика 2/app/src/widgets/product-card/ui/ProductCard'
import { BottomNav } from 'C:/Users/kotli/Универ/Веб/Практики/Практика 2/app/src/widgets/bottom-nav/ui/BottomNav'
import { PageContainer } from 'C:/Users/kotli/Универ/Веб/Практики/Практика 2/app/src/shared/ui/containers/PageContainer'
import { useProductsStore } from 'C:/Users/kotli/Универ/Веб/Практики/Практика 2/app/src/shared/lib/stores/useProductsStore'

export const MainPage = () => {
  const { getFilteredProducts } = useProductsStore()
  const filteredProducts = getFilteredProducts()

  return (
    <PageContainer>
      <Header />
      
      <main className="pt-[68px] pb-20 px-6 max-w-[1512px] mx-auto min-h-screen">
        {filteredProducts.length === 0 ? (
          <div className="col-span-full text-center py-10 text-lg text-gray-500">
            Товары не найдены
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <BottomNav />
    </PageContainer>
  )
}

export default MainPage