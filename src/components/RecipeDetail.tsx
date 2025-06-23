import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, Clock, ChefHat, Star, CheckCircle, Circle, Share2, ShoppingBag } from 'lucide-react';
import type { Recipe } from '../data/recipes';

interface RecipeDetailProps {
  recipe: Recipe;
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onMarkCompleted: () => void;
  isCompleted: boolean;
}

export function RecipeDetail({ 
  recipe, 
  onBack, 
  isFavorite, 
  onToggleFavorite, 
  onMarkCompleted,
  isCompleted 
}: RecipeDetailProps) {
  const [servings, setServings] = useState(1);
  const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);
  const [checkedSteps, setCheckedSteps] = useState<number[]>([]);
  const [userNotes, setUserNotes] = useState('');

  // Load saved state from localStorage
  useEffect(() => {
    const savedIngredients = localStorage.getItem(`ingredients-${recipe.id}`);
    const savedSteps = localStorage.getItem(`steps-${recipe.id}`);
    const savedNotes = localStorage.getItem(`notes-${recipe.id}`);
    
    if (savedIngredients) {
      setCheckedIngredients(JSON.parse(savedIngredients));
    }
    if (savedSteps) {
      setCheckedSteps(JSON.parse(savedSteps));
    }
    if (savedNotes) {
      setUserNotes(savedNotes);
    }
  }, [recipe.id]);

  // Save state to localStorage
  useEffect(() => {
    localStorage.setItem(`ingredients-${recipe.id}`, JSON.stringify(checkedIngredients));
  }, [checkedIngredients, recipe.id]);

  useEffect(() => {
    localStorage.setItem(`steps-${recipe.id}`, JSON.stringify(checkedSteps));
  }, [checkedSteps, recipe.id]);

  useEffect(() => {
    localStorage.setItem(`notes-${recipe.id}`, userNotes);
  }, [userNotes, recipe.id]);

  const toggleIngredient = (index: number) => {
    setCheckedIngredients(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleStep = (index: number) => {
    setCheckedSteps(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const progress = (checkedSteps.length / recipe.steps.length) * 100;
  const allStepsCompleted = checkedSteps.length === recipe.steps.length;

  const handleCompleteRecipe = () => {
    onMarkCompleted();
    // Trigger confetti if available
    if (typeof window !== 'undefined' && window.confetti) {
      window.confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: recipe.title,
      text: `Check out this amazing ${recipe.title} recipe from Secret Sauce!`,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Fallback to copying to clipboard
        navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
        alert('Recipe link copied to clipboard!');
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      alert('Recipe link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow hover:bg-white/30 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Vault
          </button>
          
          <div className="flex-1"></div>
          
          <button
            onClick={handleShare}
            className="p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow hover:bg-white/30 transition-all duration-300"
          >
            <Share2 className="w-5 h-5 text-primary-600" />
          </button>
          
          <button
            onClick={onToggleFavorite}
            className="p-3 bg-white/20 backdrop-blur-md border border-white/30 rounded-lg shadow hover:bg-white/30 transition-all duration-300"
          >
            <Heart 
              className={`w-5 h-5 ${
                isFavorite ? 'fill-red-500 text-red-500' : 'text-primary-600'
              }`} 
            />
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Recipe Header */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg overflow-hidden mb-8">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              
              <div className="p-6">
                <h1 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
                  {recipe.title}
                </h1>
                
                <p className="text-lg text-primary-700 mb-6">
                  {recipe.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary-600" />
                    <span className="text-primary-800">{recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ChefHat className="w-5 h-5 text-primary-600" />
                    <span className="text-primary-800">{recipe.difficulty}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="text-primary-800">Taste Match: {recipe.tasteMatch}/5</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {recipe.dietaryTags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary-100/80 backdrop-blur-sm text-secondary-800 text-sm rounded-full border border-secondary-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Story Behind the Sauce */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">Story Behind the Sauce</h2>
              <p className="text-primary-700 leading-relaxed">
                {recipe.story}
              </p>
            </div>

            {/* Ingredients */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary-900">Ingredients</h2>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-primary-600">Servings:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setServings(Math.max(1, servings - 1))}
                      className="w-8 h-8 rounded-full bg-primary-100/80 backdrop-blur-sm hover:bg-primary-200/80 flex items-center justify-center text-primary-800 font-bold border border-primary-200/50"
                    >
                      -
                    </button>
                    <span className="w-8 text-center font-semibold">{servings}</span>
                    <button
                      onClick={() => setServings(servings + 1)}
                      className="w-8 h-8 rounded-full bg-primary-100/80 backdrop-blur-sm hover:bg-primary-200/80 flex items-center justify-center text-primary-800 font-bold border border-primary-200/50"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-colors cursor-pointer ${
                      checkedIngredients.includes(index) 
                        ? 'bg-green-50/80 backdrop-blur-sm text-green-800 border border-green-200/50' 
                        : 'hover:bg-primary-50/80 backdrop-blur-sm border border-transparent'
                    }`}
                    onClick={() => toggleIngredient(index)}
                  >
                    {checkedIngredients.includes(index) ? (
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    ) : (
                      <Circle className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    )}
                    <span className={checkedIngredients.includes(index) ? 'line-through' : ''}>
                      {ingredient.replace(/^(\d+(?:\/\d+)?(?:\.\d+)?\s*(?:cup|tbsp|tsp|lb|oz|g|ml|L))\s/, 
                        (match) => servings === 1 ? match : 
                        `${(parseFloat(match) * servings).toString().replace(/\.?0+$/, '')} `
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Steps */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-primary-900">Instructions</h2>
                {!isCompleted && allStepsCompleted && (
                  <button
                    onClick={handleCompleteRecipe}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
                  >
                    Mark as Completed! 🎉
                  </button>
                )}
              </div>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-sm text-primary-600 mb-2">
                  <span>Progress</span>
                  <span>{checkedSteps.length}/{recipe.steps.length} steps</span>
                </div>
                <div className="w-full bg-primary-100/80 backdrop-blur-sm rounded-full h-2 border border-primary-200/50">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-4">
                {recipe.steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex gap-4 p-4 rounded-lg transition-colors cursor-pointer ${
                      checkedSteps.includes(index) 
                        ? 'bg-green-50/80 backdrop-blur-sm text-green-800 border border-green-200/50' 
                        : 'hover:bg-primary-50/80 backdrop-blur-sm border border-transparent'
                    }`}
                    onClick={() => toggleStep(index)}
                  >
                    <div className="flex-shrink-0">
                      {checkedSteps.includes(index) ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-primary-600 text-white flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                      )}
                    </div>
                    <p className={`flex-1 ${checkedSteps.includes(index) ? 'line-through' : ''}`}>
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Momma's Wisdom */}
            <div className="bg-accent-50/80 backdrop-blur-md border-l-4 border-accent-500 rounded-r-xl p-6 border border-accent-200/50">
              <h3 className="text-lg font-bold text-accent-900 mb-3">💡 Momma's Wisdom</h3>
              <p className="text-accent-800">
                {recipe.mommasWisdom}
              </p>
            </div>

            {/* Perfect Pairings */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-primary-900 mb-3">🍽️ Perfect Pairings</h3>
              <p className="text-primary-700 mb-4">
                {recipe.perfectPairings}
              </p>
            </div>

            {/* Buy Sauce CTA */}
            <div className="bg-gradient-to-br from-secondary-500/90 to-secondary-600/90 backdrop-blur-md rounded-2xl p-6 text-white border border-secondary-400/30">
              <h3 className="text-lg font-bold mb-3">✨ Level Up This Recipe</h3>
              <p className="mb-4 text-secondary-100">
                Try this recipe with our artisanal Tangy Drip sauce for the ultimate flavor experience!
              </p>
              <button className="w-full flex items-center justify-center gap-2 bg-white/90 backdrop-blur-sm text-secondary-700 px-4 py-3 rounded-lg font-semibold hover:bg-white transition-colors border border-white/50">
                <ShoppingBag className="w-5 h-5" />
                Shop Momma's Pantry
              </button>
            </div>

            {/* Your Notes */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-primary-900 mb-3">📝 Your Notes</h3>
              <textarea
                value={userNotes}
                onChange={(e) => setUserNotes(e.target.value)}
                placeholder="Add your personal notes about this recipe..."
                maxLength={500}
                className="w-full h-32 p-3 border border-primary-200/50 rounded-lg resize-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white/80 backdrop-blur-sm"
              />
              <div className="text-right text-xs text-primary-500 mt-1">
                {userNotes.length}/500
              </div>
            </div>

            {/* Similar Recipes */}
            <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-primary-900 mb-3">🔗 Similar To</h3>
              <div className="space-y-2">
                {recipe.similarTo.map((similar, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-3 rounded-lg hover:bg-primary-50/80 backdrop-blur-sm transition-colors text-primary-700 hover:text-primary-900 border border-transparent hover:border-primary-200/50"
                  >
                    {similar}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}