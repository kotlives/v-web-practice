import { useProductsStore } from '../../../shared/lib/stores/useProductsStore'

export const BottomNav = () => {
  const { activeNav, setActiveNav } = useProductsStore()

  const navItems = [
    { id: 'home', icon: '🏠', text: 'Главная' },
    { id: 'favorites', icon: '❤️', text: 'Избранное' },
    { id: 'cart', icon: '🛒', text: 'Корзина' }
  ]

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 py-2 z-50">
      <ul className="flex justify-around">
        {navItems.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => setActiveNav(item.id)}
              className={`flex flex-col items-center p-1 ${
                activeNav === item.id ? 'text-black font-bold' : 'text-gray-600'
              }`}
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-xs">{item.text}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}