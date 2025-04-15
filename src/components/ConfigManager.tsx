import React, { useState, useEffect } from 'react';
import { defaultConfig } from '../data/config';
import { BusinessConfig } from '../data/config';
import { uploadImage } from '../services/cloudinary';

interface ConfigManagerProps {
  updateConfig: (config: BusinessConfig) => void;
}

export default function ConfigManager({ updateConfig }: ConfigManagerProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(window.location.hostname === 'localhost');
  const [config, setConfig] = useState<BusinessConfig>(defaultConfig);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
  const [uploadStatus, setUploadStatus] = useState<Record<string, 'idle' | 'uploading' | 'success' | 'error'>>({
    logo: 'idle',
    hero: 'idle'
  });

  const handleConfigChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, path: string[]) => {
    const newConfig = { ...config };
    let current: any = newConfig;
    
    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]];
    }
    
    current[path[path.length - 1]] = e.target.value;
    setConfig(newConfig);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, imageType: 'logo' | 'hero') => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadStatus(prev => ({ ...prev, [imageType]: 'uploading' }));

    try {
      const imageUrl = await uploadImage(file, config.businessName, imageType);
      
      const newConfig = { ...config };
      if (imageType === 'logo') {
        newConfig.logo = imageUrl;
      } else if (imageType === 'hero') {
        newConfig.heroImage = imageUrl;
      }
      setConfig(newConfig);
      setUploadStatus(prev => ({ ...prev, [imageType]: 'success' }));
      
      // Reset status after 2 seconds
      setTimeout(() => {
        setUploadStatus(prev => ({ ...prev, [imageType]: 'idle' }));
      }, 2000);
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadStatus(prev => ({ ...prev, [imageType]: 'error' }));
      
      // Reset error status after 2 seconds
      setTimeout(() => {
        setUploadStatus(prev => ({ ...prev, [imageType]: 'idle' }));
      }, 2000);
    }
  };

  const handleSave = async () => {
    setSaveStatus('saving');
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      updateConfig(config);
      setSaveStatus('success');
      setTimeout(() => setSaveStatus('idle'), 2000);
    } catch (error) {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 2000);
    }
  };

  useEffect(() => {
    const savedConfig = localStorage.getItem('businessConfig');
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Configuration Manager
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handlePasswordSubmit}>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Access Configuration
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Business Configuration</h1>
          <button
            onClick={handleSave}
            disabled={saveStatus === 'saving'}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark disabled:opacity-50"
          >
            {saveStatus === 'saving' ? 'Saving...' : 'Save Changes'}
          </button>
        </div>

        {saveStatus === 'success' && (
          <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-md">
            Changes saved successfully!
          </div>
        )}

        {saveStatus === 'error' && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
            Error saving changes. Please try again.
          </div>
        )}

        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          {/* Images Section */}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Business Images</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Logo Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Logo</label>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {config.logo ? (
                      <img
                        src={config.logo}
                        alt="Logo preview"
                        className="h-20 w-20 object-contain"
                      />
                    ) : (
                      <div className="h-20 w-20 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">No logo</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'logo')}
                      disabled={uploadStatus.logo === 'uploading'}
                      className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-primary file:text-white
                        hover:file:bg-primary-dark
                        disabled:opacity-50"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Recommended size: 200x200px, PNG or JPG
                    </p>
                    {uploadStatus.logo === 'uploading' && (
                      <p className="mt-1 text-xs text-blue-600">Uploading...</p>
                    )}
                    {uploadStatus.logo === 'success' && (
                      <p className="mt-1 text-xs text-green-600">Upload successful!</p>
                    )}
                    {uploadStatus.logo === 'error' && (
                      <p className="mt-1 text-xs text-red-600">Upload failed. Please try again.</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Hero Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hero Image</label>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {config.heroImage ? (
                      <img
                        src={config.heroImage}
                        alt="Hero preview"
                        className="h-20 w-32 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="h-20 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">No image</span>
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, 'hero')}
                      disabled={uploadStatus.hero === 'uploading'}
                      className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-md file:border-0
                        file:text-sm file:font-semibold
                        file:bg-primary file:text-white
                        hover:file:bg-primary-dark
                        disabled:opacity-50"
                    />
                    <p className="mt-1 text-xs text-gray-500">
                      Recommended size: 1920x600px, JPG
                    </p>
                    {uploadStatus.hero === 'uploading' && (
                      <p className="mt-1 text-xs text-blue-600">Uploading...</p>
                    )}
                    {uploadStatus.hero === 'success' && (
                      <p className="mt-1 text-xs text-green-600">Upload successful!</p>
                    )}
                    {uploadStatus.hero === 'error' && (
                      <p className="mt-1 text-xs text-red-600">Upload failed. Please try again.</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Business Info Section */}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Business Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Business Name</label>
                <input
                  type="text"
                  value={config.businessName}
                  onChange={(e) => handleConfigChange(e, ['businessName'])}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Business Type</label>
                <input
                  type="text"
                  value={config.businessType}
                  onChange={(e) => handleConfigChange(e, ['businessType'])}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="text"
                  value={config.contactInfo.phone}
                  onChange={(e) => handleConfigChange(e, ['contactInfo', 'phone'])}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={config.contactInfo.email}
                  onChange={(e) => handleConfigChange(e, ['contactInfo', 'email'])}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  value={config.contactInfo.address}
                  onChange={(e) => handleConfigChange(e, ['contactInfo', 'address'])}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  value={config.contactInfo.city}
                  onChange={(e) => handleConfigChange(e, ['contactInfo', 'city'])}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  value={config.contactInfo.state}
                  onChange={(e) => handleConfigChange(e, ['contactInfo', 'state'])}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Zip Code</label>
                <input
                  type="text"
                  value={config.contactInfo.zipCode}
                  onChange={(e) => handleConfigChange(e, ['contactInfo', 'zipCode'])}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Service Areas Section */}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Service Areas</h2>
            <div className="space-y-4">
              {config.serviceAreas.map((area, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={area}
                    onChange={(e) => {
                      const newAreas = [...config.serviceAreas];
                      newAreas[index] = e.target.value;
                      setConfig({ ...config, serviceAreas: newAreas });
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  />
                  <button
                    onClick={() => {
                      const newAreas = config.serviceAreas.filter((_, i) => i !== index);
                      setConfig({ ...config, serviceAreas: newAreas });
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                onClick={() => {
                  setConfig({
                    ...config,
                    serviceAreas: [...config.serviceAreas, ''],
                  });
                }}
                className="text-primary hover:text-primary-dark"
              >
                Add Service Area
              </button>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Social Media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Facebook</label>
                <input
                  type="url"
                  value={config.socialMedia.facebook || ''}
                  onChange={(e) => handleConfigChange(e, ['socialMedia', 'facebook'])}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Instagram</label>
                <input
                  type="url"
                  value={config.socialMedia.instagram || ''}
                  onChange={(e) => handleConfigChange(e, ['socialMedia', 'instagram'])}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* SEO Section */}
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">SEO Information</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  value={config.seo.title}
                  onChange={(e) => handleConfigChange(e, ['seo', 'title'])}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  value={config.seo.description}
                  onChange={(e) => handleConfigChange(e, ['seo', 'description'])}
                  rows={3}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Keywords</label>
                <input
                  type="text"
                  value={config.seo.keywords.join(', ')}
                  onChange={(e) => {
                    const keywords = e.target.value.split(',').map(k => k.trim());
                    setConfig({
                      ...config,
                      seo: { ...config.seo, keywords },
                    });
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 