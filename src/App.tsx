import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { RecipeVault } from './components/RecipeVault';
import { MommaChat } from './components/MommaChat';
import { MommasPantry } from './components/MommasPantry';
import { RecipeDetail } from './components/RecipeDetail';
import { RecipeRoulette } from './components/RecipeRoulette';
import { UserProfile } from './components/UserProfile';
import { recipes, type Recipe } from './data/recipes';
import { products } from './data/products';

export type View = 'home' | 'vault' | 'pantry' | 'profile' | 'recipe' | 'roulette';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [completedRecipes, setCompletedRecipes] = useState<string[]>([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Load favorites and completed recipes from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('secret-sauce-favorites');
    const savedCompleted = localStorage.getItem('secret-sauce-completed');
    
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
    if (savedCompleted) {
      setCompletedRecipes(JSON.parse(savedCompleted));
    }
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('secret-sauce-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Save completed recipes to localStorage
  useEffect(() => {
    localStorage.setItem('secret-sauce-completed', JSON.stringify(completedRecipes));
  }, [completedRecipes]);

  const toggleFavorite = (recipeId: string) => {
    setFavorites(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId)
        : [...prev, recipeId]
    );
  };

  const markRecipeCompleted = (recipeId: string) => {
    if (!completedRecipes.includes(recipeId)) {
      setCompletedRecipes(prev => [...prev, recipeId]);
      // Show completion celebration
      if (typeof window !== 'undefined' && window.confetti) {
        window.confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleViewRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setCurrentView('recipe');
  };

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    if (view !== 'recipe') {
      setSelectedRecipe(null);
    }
  };

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilters = selectedFilters.length === 0 || 
                          selectedFilters.every(filter => 
                            recipe.category === filter || 
                            recipe.difficulty === filter ||
                            recipe.dietaryTags.includes(filter) ||
                            recipe.prepTime === filter
                          );
    
    return matchesSearch && matchesFilters;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navigation 
        currentView={currentView} 
        onNavigate={handleNavigate}
        completedRecipes={completedRecipes}
        favorites={favorites}
      />
      
      <main className="pt-16">
        {currentView === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <div className="container mx-auto px-4 py-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h2 className="text-2xl font-bold text-primary-900 mb-4">Featured Recipes</h2>
                  <div className="grid gap-4">
                    {recipes.slice(0, 3).map(recipe => (
                      <div 
                        key={recipe.id}
                        className="flex items-center gap-4 p-3 rounded-lg bg-amber-50 hover:bg-amber-100 cursor-pointer transition-colors"
                        onClick={() => handleViewRecipe(recipe)}
                      >
                        <img 
                          src={recipe.image} 
                          alt={recipe.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-primary-900">{recipe.title}</h3>
                          <p className="text-sm text-primary-600">{recipe.prepTime}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <h2 className="text-2xl font-bold text-primary-900 mb-4">Momma's Featured Sauces</h2>
                  <div className="grid gap-4">
                    {products.slice(0, 3).map(product => (
                      <div 
                        key={product.id}
                        className="flex items-center gap-4 p-3 rounded-lg bg-secondary-50 hover:bg-secondary-100 cursor-pointer transition-colors"
                        onClick={() => setCurrentView('pantry')}
                      >
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-semibold text-primary-900">{product.name}</h3>
                          <p className="text-sm text-primary-600">${product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        
        {currentView === 'vault' && (
          <RecipeVault 
            recipes={filteredRecipes}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedFilters={selectedFilters}
            onFiltersChange={setSelectedFilters}
            onViewRecipe={handleViewRecipe}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}
        
        {currentView === 'recipe' && selectedRecipe && (
          <RecipeDetail 
            recipe={selectedRecipe}
            onBack={() => setCurrentView('vault')}
            isFavorite={favorites.includes(selectedRecipe.id)}
            onToggleFavorite={() => toggleFavorite(selectedRecipe.id)}
            onMarkCompleted={() => markRecipeCompleted(selectedRecipe.id)}
            isCompleted={completedRecipes.includes(selectedRecipe.id)}
          />
        )}
        
        {currentView === 'pantry' && (
          <MommasPantry products={products} />
        )}
        
        {currentView === 'profile' && (
          <UserProfile 
            favorites={recipes.filter(r => favorites.includes(r.id))}
            completedRecipes={recipes.filter(r => completedRecipes.includes(r.id))}
            onViewRecipe={handleViewRecipe}
          />
        )}
        
        {currentView === 'roulette' && (
          <RecipeRoulette 
            recipes={recipes}
            onViewRecipe={handleViewRecipe}
          />
        )}
      </main>
      
      <MommaChat 
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
        recipes={recipes}
        onViewRecipe={handleViewRecipe}
      />
    </div>
  );
}

export default App;