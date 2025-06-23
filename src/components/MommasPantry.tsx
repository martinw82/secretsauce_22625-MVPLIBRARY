import React from 'react';
import { ShoppingBag, Star, Sparkles } from 'lucide-react';
import type { Product } from '../data/products';

interface MommasPantryProps {
  products: Product[];
}

export function MommasPantry({ products }: MommasPantryProps) {
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  const handleAddToCart = (product: Product) => {
    // Mock Shopify integration
    console.log('Adding to cart:', product);
    alert(`Added ${product.name} to cart! (This would integrate with Shopify in production)`);
  };

  const bundleProduct = {
    id: 'bundle-trio',
    name: 'Trio Taster Bundle',
    description: 'All three signature sauces at a special price. Perfect for exploring new flavors!',
    price: 24.99,
    originalPrice: 29.97,
    image: 'https://images.pexels.com/photos/4198024/pexels-photo-4198024.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
    isBundle: true
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="mb-6">
          <Sparkles className="w-16 h-16 text-accent-500 mx-auto mb-4 animate-pulse-gentle" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Momma's Pantry
          </h1>
          <p className="text-xl text-primary-700 max-w-2xl mx-auto">
            Artisanal sauces crafted with love and the perfect blend of secret ingredients
          </p>
        </div>
        
        <div className="bg-gradient-to-r from-accent-500 to-accent-600 text-white p-6 rounded-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-2">✨ From Momma's Kitchen to Yours</h2>
          <p className="text-accent-100">
            Each sauce is lovingly crafted in small batches using premium ingredients and time-tested recipes. 
            Because every great dish deserves an extraordinary sauce!
          </p>
        </div>
      </div>

      {/* Bundle Offer */}
      <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-2xl p-8 mb-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-accent-500 text-white px-4 py-2 rounded-bl-2xl font-bold text-lg">
          Save 17%
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">🎯 Trio Taster Bundle</h2>
            <p className="text-secondary-100 mb-6 text-lg">
              Can't decide? Try all three signature sauces and discover your favorite! 
              Perfect for the adventurous cook who wants to explore new flavors.
            </p>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="text-3xl font-bold">${bundleProduct.price}</div>
              <div className="text-xl text-secondary-200 line-through">${bundleProduct.originalPrice}</div>
              <div className="bg-accent-500 px-3 py-1 rounded-full text-sm font-bold">
                Save ${(bundleProduct.originalPrice - bundleProduct.price).toFixed(2)}
              </div>
            </div>
            
            <button
              onClick={() => handleAddToCart(bundleProduct)}
              className="bg-white text-secondary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-secondary-50 transition-colors shadow-lg"
            >
              🛒 Add Bundle to Cart
            </button>
          </div>
          
          <div className="relative">
            <img
              src={bundleProduct.image}
              alt="Trio Taster Bundle"
              className="w-full max-w-sm mx-auto rounded-xl shadow-2xl"
            />
            <div className="absolute -top-4 -right-4 bg-accent-500 text-white p-3 rounded-full animate-bounce-gentle">
              <Sparkles className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Individual Products */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-primary-900 text-center mb-8">
          Individual Sauces
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold">4.9</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-900 mb-3">
                  {product.name}
                </h3>
                
                <p className="text-primary-700 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl font-bold text-primary-900">
                    ${product.price}
                  </div>
                  <div className="text-sm text-primary-600">
                    16 oz bottle
                  </div>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-full flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </button>
                  
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-xl font-semibold transition-colors"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-primary-900 text-center mb-8">
          Why Choose Momma's Sauces?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-2">Premium Ingredients</h3>
            <p className="text-primary-700">
              Only the finest, natural ingredients make it into our sauces. No artificial preservatives or fillers.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👩‍🍳</span>
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-2">Small Batch Crafted</h3>
            <p className="text-primary-700">
              Each bottle is carefully crafted in small batches to ensure consistent quality and flavor.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">❤️</span>
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-2">Made with Love</h3>
            <p className="text-primary-700">
              Every sauce carries Momma's personal touch and decades of culinary expertise.
            </p>
          </div>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white p-2 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                {selectedProduct.name}
              </h2>
              
              <p className="text-primary-700 mb-6 text-lg leading-relaxed">
                {selectedProduct.description}
              </p>
              
              <div className="bg-amber-50 border-l-4 border-accent-500 p-6 mb-6">
                <h3 className="font-bold text-accent-900 mb-2">🍯 Flavor Profile</h3>
                <p className="text-accent-800">
                  This sauce delivers the perfect balance of tangy and sweet, with subtle hints of garlic and herbs 
                  that complement any dish without overpowering the natural flavors.
                </p>
              </div>
              
              <div className="flex items-center justify-between mb-6">
                <div className="text-4xl font-bold text-primary-900">
                  ${selectedProduct.price}
                </div>
                <div className="text-right">
                  <div className="text-sm text-primary-600">16 oz bottle</div>
                  <div className="text-sm text-primary-600">Ships nationwide</div>
                </div>
              </div>
              
              <button
                onClick={() => {
                  handleAddToCart(selectedProduct);
                  setSelectedProduct(null);
                }}
                className="w-full flex items-center justify-center gap-3 bg-primary-600 hover:bg-primary-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart - ${selectedProduct.price}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}