import React from 'react';
import { User, Heart, CheckCircle, Trophy, Star, Clock, ChefHat } from 'lucide-react';
import type { Recipe } from '../data/recipes';

interface UserProfileProps {
  favorites: Recipe[];
  completedRecipes: Recipe[];
  onViewRecipe: (recipe: Recipe) => void;
}

export function UserProfile({ favorites, completedRecipes, onViewRecipe }: UserProfileProps) {
  const achievements = [
    {
      id: 'first-recipe',
      name: 'First Steps',
      description: 'Completed your first recipe',
      icon: '👶',
      unlocked: completedRecipes.length >= 1
    },
    {
      id: 'sauce-lover',
      name: 'Sauce Lover',
      description: 'Saved 5 recipes to favorites',
      icon: '❤️',
      unlocked: favorites.length >= 5
    },
    {
      id: 'recipe-master',
      name: 'Recipe Master',
      description: 'Completed 5 recipes',
      icon: '🏆',
      unlocked: completedRecipes.length >= 5
    },
    {
      id: 'sauce-explorer',
      name: 'Sauce Explorer',
      description: 'Tried recipes from all 3 categories',
      icon: '🧭',
      unlocked: false // Would check if user has completed recipes from all categories
    },
    {
      id: 'chef-extraordinaire',
      name: 'Chef Extraordinaire',
      description: 'Completed 10 recipes',
      icon: '⭐',
      unlocked: completedRecipes.length >= 10
    },
    {
      id: 'flavor-fanatic',
      name: 'Flavor Fanatic',
      description: 'Saved 10 recipes to favorites',
      icon: '🔥',
      unlocked: favorites.length >= 10
    }
  ];

  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const totalCookingTime = completedRecipes.reduce((total, recipe) => {
    const time = parseInt(recipe.prepTime.match(/\d+/)?.[0] || '0');
    return total + time;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-primary-900 mb-4">Your Culinary Journey</h1>
        <p className="text-xl text-primary-700">
          Track your progress and celebrate your cooking achievements
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <Heart className="w-8 h-8 text-red-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-primary-900 mb-1">{favorites.length}</div>
          <div className="text-primary-600">Favorite Recipes</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-primary-900 mb-1">{completedRecipes.length}</div>
          <div className="text-primary-600">Completed Recipes</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <Trophy className="w-8 h-8 text-accent-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-primary-900 mb-1">{unlockedAchievements.length}</div>
          <div className="text-primary-600">Achievements</div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 text-center">
          <Clock className="w-8 h-8 text-secondary-500 mx-auto mb-3" />
          <div className="text-2xl font-bold text-primary-900 mb-1">{totalCookingTime}</div>
          <div className="text-primary-600">Minutes Cooking</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Achievements */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-accent-500" />
              Achievements
            </h2>
            
            <div className="space-y-4">
              {achievements.map(achievement => (
                <div
                  key={achievement.id}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    achievement.unlocked
                      ? 'bg-accent-50 border-accent-200'
                      : 'bg-gray-50 border-gray-200 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{achievement.icon}</span>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${
                        achievement.unlocked ? 'text-accent-900' : 'text-gray-600'
                      }`}>
                        {achievement.name}
                      </h3>
                      {achievement.unlocked && (
                        <div className="text-xs text-accent-600 font-medium">✓ Unlocked</div>
                      )}
                    </div>
                  </div>
                  <p className={`text-sm ${
                    achievement.unlocked ? 'text-accent-700' : 'text-gray-500'
                  }`}>
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Favorites & Completed */}
        <div className="lg:col-span-2 space-y-8">
          {/* Favorite Recipes */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
              <Heart className="w-6 h-6 text-red-500" />
              Favorite Recipes ({favorites.length})
            </h2>
            
            {favorites.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">
                {favorites.map(recipe => (
                  <div
                    key={recipe.id}
                    className="flex items-center gap-4 p-4 rounded-lg bg-red-50 hover:bg-red-100 cursor-pointer transition-colors"
                    onClick={() => onViewRecipe(recipe)}
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-900 line-clamp-1">
                        {recipe.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-primary-600 mt-1">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {recipe.prepTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          {recipe.tasteMatch}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-primary-600">
                <Heart className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No favorite recipes yet. Start exploring to find your favorites!</p>
              </div>
            )}
          </div>

          {/* Completed Recipes */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              Completed Recipes ({completedRecipes.length})
            </h2>
            
            {completedRecipes.length > 0 ? (
              <div className="grid md:grid-cols-2 gap-4">
                {completedRecipes.map(recipe => (
                  <div
                    key={recipe.id}
                    className="flex items-center gap-4 p-4 rounded-lg bg-green-50 hover:bg-green-100 cursor-pointer transition-colors"
                    onClick={() => onViewRecipe(recipe)}
                  >
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-primary-900 line-clamp-1">
                        {recipe.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-primary-600 mt-1">
                        <span className="flex items-center gap-1">
                          <ChefHat className="w-3 h-3" />
                          {recipe.difficulty}
                        </span>
                        <span className="text-green-600 font-medium">✓ Completed</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-primary-600">
                <CheckCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No completed recipes yet. Start cooking to track your progress!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Motivational Section */}
      <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Keep Cooking, Keep Growing! 🚀</h2>
        <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
          Every recipe you try brings you closer to becoming a master chef. 
          Your culinary journey is just beginning, and Momma Marinade is here to guide you every step of the way!
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-primary-100">
          <div className="text-center">
            <div className="text-lg font-bold">Next Goal</div>
            <div className="text-sm">
              {favorites.length < 5 ? `${5 - favorites.length} more favorites for Sauce Lover badge` :
               completedRecipes.length < 5 ? `${5 - completedRecipes.length} more recipes for Recipe Master badge` :
               "You're doing amazing! Keep exploring new recipes."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}