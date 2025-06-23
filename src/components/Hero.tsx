import React from 'react';
import { ArrowRight, Sparkles, Heart, Search, User, BookOpen, Star } from 'lucide-react';
import type { View } from '../App';

interface HeroProps {
  onNavigate: (view: View) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-200 via-orange-200 to-amber-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/30 animate-pulse-gentle"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-white/20 animate-bounce-gentle"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-white/25 animate-pulse-gentle"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 rounded-full bg-white/30 animate-bounce-gentle"></div>
      </div>
      
      <div className="relative container mx-auto px-4 py-8 min-h-screen flex flex-col">
        {/* Header with Secret Sauce title */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg">
            Secret Sauce
          </h1>
        </div>
        
        {/* Main content area with Momma Marinade */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-md w-full relative">
            {/* Momma Marinade illustration */}
            <div className="relative mb-8">
              <div className="w-80 h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/ChatGPT Image Jun 21, 2025, 07_48_11 PM.png"
                  alt="Momma Marinade - Your Culinary Confidante"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to gradient background if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="w-full h-full bg-gradient-to-br from-amber-600 to-orange-700 rounded-3xl flex items-center justify-center hidden">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Sparkles className="w-12 h-12" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Momma Marinade</h2>
                    <p className="text-amber-100">Your Culinary Confidante</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glass morphism action cards */}
            <div className="space-y-4">
              {/* Sign Up / Log In row */}
              <div className="grid grid-cols-2 gap-4">
                <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 text-white font-semibold text-lg hover:bg-white/30 transition-all duration-300 shadow-lg">
                  Sign Up
                </button>
                <button className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-4 text-white font-semibold text-lg hover:bg-white/30 transition-all duration-300 shadow-lg">
                  Log In
                </button>
              </div>
              
              {/* Discover Secret recipes */}
              <button 
                onClick={() => onNavigate('vault')}
                className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-left hover:bg-white/30 transition-all duration-300 shadow-lg group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <Search className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Discover Secret recipes</h3>
                </div>
                <p className="text-white/80 text-sm">
                  Find recipes for popular dishes, sauces, and baked goods
                </p>
              </button>
              
              {/* Save favorites */}
              <button 
                onClick={() => onNavigate('profile')}
                className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-left hover:bg-white/30 transition-all duration-300 shadow-lg group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <Heart className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Save favorites</h3>
                </div>
                <p className="text-white/80 text-sm">
                  Easily save and organize your most-loved recipes
                </p>
              </button>
              
              {/* Browse by Category */}
              <button 
                onClick={() => onNavigate('vault')}
                className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-left hover:bg-white/30 transition-all duration-300 shadow-lg group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <BookOpen className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Browse by Category</h3>
                </div>
                <p className="text-white/80 text-sm">
                  Explore Fast Food, Global, and Community-inspired recipes
                </p>
              </button>
              
              {/* Recipe Roulette */}
              <button 
                onClick={() => onNavigate('roulette')}
                className="w-full bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-left hover:bg-white/30 transition-all duration-300 shadow-lg group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <Star className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">Recipe Roulette</h3>
                </div>
                <p className="text-white/80 text-sm">
                  Let fate decide your next culinary adventure
                </p>
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom tagline */}
        <div className="text-center mt-8">
          <p className="text-white/90 text-lg font-medium">
            Flavor, Bottled and Boundless
          </p>
        </div>
      </div>
    </div>
  );
}