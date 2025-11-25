import { AddToCartButton } from '@features/toggle-cart/ui/AddToCartButton'

export const ProductCard = ({ product }) => {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow hover:-translate-y-1 transition-transform">
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
        Изображение товара
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium mb-2">{product.title}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold">{product.price} ₽</span>
          {product.oldPrice && (
            <span className="text-sm text-gray-500 line-through">
              {product.oldPrice} ₽
            </span>
          )}
        </div>
        <AddToCartButton />
      </div>
    </article>
  )
}