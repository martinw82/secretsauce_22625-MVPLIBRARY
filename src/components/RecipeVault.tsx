import React from 'react';
import { Search, Filter, X, Clock, Star, Heart, ChefHat } from 'lucide-react';
import type { Recipe } from '../data/recipes';

interface RecipeVaultProps {
  recipes: Recipe[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedFilters: string[];
  onFiltersChange: (filters: string[]) => void;
  onViewRecipe: (recipe: Recipe) => void;
  favorites: string[];
  onToggleFavorite: (recipeId: string) => void;
}

const filterOptions = {
  category: ['Fast Food-Inspired', 'Global-Inspired', 'Community-Inspired'],
  difficulty: ['Easy', 'Medium', 'Hard'],
  prepTime: ['<15 min', '15-30 min', '>30 min'],
  dietary: ['Vegan', 'Gluten-Free', 'Dairy-Free']
};

export function RecipeVault({ 
  recipes, 
  searchQuery, 
  onSearchChange, 
  selectedFilters, 
  onFiltersChange, 
  onViewRecipe,
  favorites,
  onToggleFavorite 
}: RecipeVaultProps) {
  const [isFilterOpen, setIsFilterOpen] = React.useState(false);
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');

  const addFilter = (filter: string) => {
    if (!selectedFilters.includes(filter)) {
      onFiltersChange([...selectedFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    onFiltersChange(selectedFilters.filter(f => f !== filter));
  };

  const clearAllFilters = () => {
    onFiltersChange([]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Secret Sauce Vault</h1>
        <p className="text-lg text-primary-700 max-w-2xl mx-auto">
          Discover iconic copycat recipes and recreate your favorite flavors at home
        </p>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search recipes... (e.g., 'burger sauce', 'chicken')"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-primary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 px-4 py-3 bg-primary-100 hover:bg-primary-200 text-primary-900 rounded-lg transition-colors"
          >
            <Filter className="w-5 h-5" />
            Filters ({selectedFilters.length})
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-700'
              }`}
            >
              <div className="w-5 h-5 grid grid-cols-2 gap-1">
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
                <div className="bg-current rounded-sm"></div>
              </div>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-primary-600 text-white' : 'bg-primary-100 text-primary-700'
              }`}
            >
              <div className="w-5 h-5 flex flex-col gap-1">
                <div className="h-1 bg-current rounded-sm"></div>
                <div className="h-1 bg-current rounded-sm"></div>
                <div className="h-1 bg-current rounded-sm"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Active Filters */}
        {selectedFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-sm font-medium text-primary-700">Active filters:</span>
            {selectedFilters.map(filter => (
              <span
                key={filter}
                className="flex items-center gap-1 px-3 py-1 bg-primary-600 text-white text-sm rounded-full"
              >
                {filter}
                <button
                  onClick={() => removeFilter(filter)}
                  className="hover:bg-primary-700 rounded-full p-0.5"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))}
            <button
              onClick={clearAllFilters}
              className="text-sm text-primary-600 hover:text-primary-800 underline"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Filter Panel */}
        {isFilterOpen && (
          <div className="border-t border-primary-200 pt-4">
            <div className="grid md:grid-cols-4 gap-4">
              {Object.entries(filterOptions).map(([category, options]) => (
                <div key={category}>
                  <h3 className="font-semibold text-primary-900 mb-2 capitalize">
                    {category === 'dietary' ? 'Dietary' : category}
                  </h3>
                  <div className="space-y-1">
                    {options.map(option => (
                      <button
                        key={option}
                        onClick={() => 
                          selectedFilters.includes(option) 
                            ? removeFilter(option) 
                            : addFilter(option)
                        }
                        className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedFilters.includes(option)
                            ? 'bg-primary-600 text-white'
                            : 'hover:bg-primary-50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="mb-6">
        <p className="text-primary-700">
          Found <span className="font-semibold">{recipes.length}</span> recipes
        </p>
      </div>

      {/* Recipe Grid/List */}
      <div className={
        viewMode === 'grid' 
          ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
          : 'space-y-4'
      }>
        {recipes.map(recipe => (
          <div
            key={recipe.id}
            className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
              viewMode === 'list' ? 'flex' : ''
            }`}
            onClick={() => onViewRecipe(recipe)}
          >
            <div className={viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}>
              <img
                src={recipe.image}
                alt={recipe.title}
                className={`w-full object-cover ${
                  viewMode === 'list' ? 'h-full' : 'h-48'
                }`}
              />
            </div>
            
            <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary-900 mb-2 line-clamp-2">
                    {recipe.title}
                  </h3>
                  <p className="text-primary-600 text-sm line-clamp-2 mb-3">
                    {recipe.description}
                  </p>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleFavorite(recipe.id);
                  }}
                  className="ml-2 p-2 rounded-full hover:bg-primary-50 transition-colors"
                >
                  <Heart 
                    className={`w-5 h-5 ${
                      favorites.includes(recipe.id) 
                        ? 'fill-red-500 text-red-500' 
                        : 'text-primary-400'
                    }`} 
                  />
                </button>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-primary-600 mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {recipe.prepTime}
                </div>
                <div className="flex items-center gap-1">
                  <ChefHat className="w-4 h-4" />
                  {recipe.difficulty}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {recipe.tasteMatch}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {recipe.dietaryTags.slice(0, 2).map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-secondary-100 text-secondary-800 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {recipe.dietaryTags.length > 2 && (
                  <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                    +{recipe.dietaryTags.length - 2} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {recipes.length === 0 && (
        <div className="text-center py-12">
          <ChefHat className="w-16 h-16 text-primary-300 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-primary-800 mb-2">No recipes found</h3>
          <p className="text-primary-600 mb-4">
            Try adjusting your search terms or filters
          </p>
          <button
            onClick={() => {
              onSearchChange('');
              clearAllFilters();
            }}
            className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            Clear search and filters
          </button>
        </div>
      )}
    </div>
  );
}