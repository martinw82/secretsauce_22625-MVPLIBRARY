import React, { useState } from 'react';
import { Dices, Sparkles, ArrowRight } from 'lucide-react';
import type { Recipe } from '../data/recipes';

interface RecipeRouletteProps {
  recipes: Recipe[];
  onViewRecipe: (recipe: Recipe) => void;
}

export function RecipeRoulette({ recipes, onViewRecipe }: RecipeRouletteProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [spinCount, setSpinCount] = useState(0);

  const spinWheel = () => {
    if (isSpinning) return;
    
    setIsSpinning(true);
    setSelectedRecipe(null);
    
    // Simulate spinning animation
    setTimeout(() => {
      const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
      setSelectedRecipe(randomRecipe);
      setIsSpinning(false);
      setSpinCount(prev => prev + 1);
      
      // Trigger confetti
      if (typeof window !== 'undefined' && window.confetti) {
        window.confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <Dices className="w-16 h-16 text-accent-500 mx-auto mb-4 animate-pulse-gentle" />
        <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
          Recipe Roulette
        </h1>
        <p className="text-xl text-primary-700 max-w-2xl mx-auto">
          Feeling adventurous? Let fate decide your next culinary adventure!
        </p>
      </div>

      {/* Roulette Wheel */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <div className="relative inline-block">
              <div className={`w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full bg-gradient-to-br from-primary-500 via-accent-500 to-secondary-500 flex items-center justify-center shadow-2xl transition-transform duration-2000 ${
                isSpinning ? 'animate-spin-slow' : ''
              }`}>
                <div className="w-48 h-48 md:w-60 md:h-60 bg-white rounded-full flex items-center justify-center shadow-inner">
                  {isSpinning ? (
                    <div className="text-center">
                      <Sparkles className="w-12 h-12 text-accent-500 mx-auto mb-2 animate-pulse" />
                      <p className="text-primary-700 font-semibold">Spinning...</p>
                    </div>
                  ) : selectedRecipe ? (
                    <div className="text-center p-4">
                      <img
                        src={selectedRecipe.image}
                        alt={selectedRecipe.title}
                        className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                      />
                      <p className="text-sm font-bold text-primary-900 line-clamp-2">
                        {selectedRecipe.title}
                      </p>
                    </div>
                  ) : (
                    <div className="text-center">
                      <Dices className="w-12 h-12 text-primary-400 mx-auto mb-2" />
                      <p className="text-primary-600 font-semibold">Ready to spin?</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Wheel Pointer */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-accent-500"></div>
              </div>
            </div>
          </div>

          {/* Spin Button */}
          <div className="text-center mb-8">
            <button
              onClick={spinWheel}
              disabled={isSpinning}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform shadow-lg ${
                isSpinning
                  ? 'bg-primary-300 text-primary-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white hover:scale-105 hover:shadow-xl'
              }`}
            >
              <Dices className={`w-6 h-6 ${isSpinning ? 'animate-spin' : ''}`} />
              {isSpinning ? 'Spinning...' : 'Spin the Wheel!'}
            </button>
          </div>

          {/* Stats */}
          <div className="text-center text-primary-600">
            <p>Spins today: <span className="font-bold text-primary-900">{spinCount}</span></p>
          </div>
        </div>
      </div>

      {/* Result Card */}
      {selectedRecipe && !isSpinning && (
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl p-1 shadow-2xl">
            <div className="bg-white rounded-2xl p-8">
              <div className="text-center mb-6">
                <Sparkles className="w-8 h-8 text-accent-500 mx-auto mb-3" />
                <h2 className="text-2xl font-bold text-primary-900 mb-2">
                  🎯 Your Recipe Destiny!
                </h2>
                <p className="text-primary-700">
                  The culinary stars have aligned for you...
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src={selectedRecipe.image}
                  alt={selectedRecipe.title}
                  className="w-48 h-48 md:w-32 md:h-32 rounded-xl object-cover shadow-lg"
                />
                
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-primary-900 mb-3">
                    {selectedRecipe.title}
                  </h3>
                  <p className="text-primary-700 mb-4">
                    {selectedRecipe.description}
                  </p>
                  
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-primary-600 mb-6">
                    <span className="flex items-center gap-1">
                      ⏱️ {selectedRecipe.prepTime}
                    </span>
                    <span className="flex items-center gap-1">
                      👨‍🍳 {selectedRecipe.difficulty}
                    </span>
                    <span className="flex items-center gap-1">
                      ⭐ {selectedRecipe.tasteMatch}/5
                    </span>
                  </div>
                  
                  <button
                    onClick={() => onViewRecipe(selectedRecipe)}
                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
                  >
                    Let's Cook This!
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recent Recipes */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-primary-900 text-center mb-8">
          🎲 Popular Roulette Picks
        </h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {recipes.slice(0, 6).map(recipe => (
            <div
              key={recipe.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              onClick={() => onViewRecipe(recipe)}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-primary-900 mb-2 line-clamp-2">
                  {recipe.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-primary-600">
                  <span>⏱️ {recipe.prepTime}</span>
                  <span>⭐ {recipe.tasteMatch}/5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="mt-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">🎯 Fun Roulette Facts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-3xl font-bold text-accent-100">73%</div>
            <p className="text-accent-100">of roulette picks become new favorites!</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-100">12</div>
            <p className="text-accent-100">delicious recipes to discover</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent-100">∞</div>
            <p className="text-accent-100">possibilities for culinary adventure</p>
          </div>
        </div>
      </div>
    </div>
  );
}