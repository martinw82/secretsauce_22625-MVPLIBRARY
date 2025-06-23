import React from 'react';
import { Menu, X, Book, ShoppingBag, User, Dices } from 'lucide-react';
import type { View } from '../App';

interface NavigationProps {
  currentView: View;
  onNavigate: (view: View) => void;
  completedRecipes: string[];
  favorites: string[];
}

export function Navigation({ currentView, onNavigate, completedRecipes, favorites }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: null },
    { id: 'vault', label: 'Recipe Vault', icon: Book },
    { id: 'roulette', label: 'Recipe Roulette', icon: Dices },
    { id: 'pantry', label: "Momma's Pantry", icon: ShoppingBag },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const handleNavigate = (view: View) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => handleNavigate('home')}
          >
            <img 
              src="/src/assets/momma-cartoon.png" 
              alt="Momma Marinade"
              className="w-10 h-10 rounded-full object-cover"
              onError={(e) => {
                // Fallback to a colored circle if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center hidden">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary-900">Secret Sauce</h1>
              <p className="text-xs text-primary-600 hidden sm:block">Your Culinary Confidante</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id as View)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                    currentView === item.id
                      ? 'bg-primary-100 text-primary-900'
                      : 'text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-700" />
            ) : (
              <Menu className="w-6 h-6 text-primary-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-primary-200">
            <div className="flex flex-col gap-2">
              {menuItems.map(item => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id as View)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      currentView === item.id
                        ? 'bg-primary-100 text-primary-900'
                        : 'text-primary-700 hover:bg-primary-50'
                    }`}
                  >
                    {Icon && <Icon className="w-5 h-5" />}
                    <span className="font-medium">{item.label}</span>
                  </button>
                );
              })}
            </div>
            
            {/* Stats for mobile */}
            <div className="mt-4 pt-4 border-t border-primary-200">
              <div className="flex justify-around text-center">
                <div>
                  <div className="text-lg font-bold text-primary-900">{favorites.length}</div>
                  <div className="text-xs text-primary-600">Favorites</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-primary-900">{completedRecipes.length}</div>
                  <div className="text-xs text-primary-600">Completed</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}