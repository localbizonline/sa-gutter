import React, { useState, useEffect } from 'react';
import { Copy, Lock, Check } from 'lucide-react';
import SEOHead from './SEOHead';

interface ImageInfo {
  path: string;
  dimensions: { width: number; height: number };
}

export default function ImageGallery() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [images, setImages] = useState<ImageInfo[]>([]);
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '1234') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const copyToClipboard = (path: string) => {
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2000);
  };

  useEffect(() => {
    const loadImages = async () => {
      try {
        const imageModules = import.meta.glob('/public/images/**/*.(jpg|jpeg|png)');
        const imageInfoPromises = Object.keys(imageModules).map(async (path) => {
          const img = new Image();
          const cleanPath = path.replace('/public', '');
          
          return new Promise<ImageInfo>((resolve) => {
            img.onload = () => {
              resolve({
                path: cleanPath,
                dimensions: { width: img.width, height: img.height }
              });
            };
            img.src = cleanPath;
          });
        });

        const imageInfos = await Promise.all(imageInfoPromises);
        setImages(imageInfos);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    if (isAuthenticated) {
      loadImages();
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 py-16">
        <SEOHead
          title="Image Gallery | Password Protected"
          description="Protected image gallery for SA Gutter"
        />
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center justify-center mb-8">
            <Lock className="h-12 w-12 text-gray-700" />
          </div>
          <h1 className="text-2xl font-bold text-center mb-8">Protected Gallery</h1>
          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter password"
              />
              {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Access Gallery
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-16">
      <SEOHead
        title="Image Gallery | SA Gutter"
        description="Image gallery for SA Gutter"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Image Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={image.path}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">
                    {image.dimensions.width} x {image.dimensions.height}
                  </span>
                  <button
                    onClick={() => copyToClipboard(image.path)}
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    {copiedPath === image.path ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-gray-600 break-all">{image.path}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}