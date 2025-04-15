import React, { useState } from 'react';
import { BusinessConfig } from '../data/config';
import { uploadImage } from '../services/cloudinary';

interface ImageSectionManagerProps {
  config: BusinessConfig;
  updateConfig: (config: BusinessConfig) => void;
}

export default function ImageSectionManager({ config, updateConfig }: ImageSectionManagerProps) {
  const [uploadStatus, setUploadStatus] = useState<Record<string, 'idle' | 'uploading' | 'success' | 'error'>>({});
  const [editingImage, setEditingImage] = useState<{ section: string; index: number } | null>(null);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, section: string, isGallery: boolean) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const statusKey = `${section}-${Date.now()}`;
    setUploadStatus(prev => ({ ...prev, [statusKey]: 'uploading' }));

    try {
      const imageUrl = await uploadImage(file, config.businessName, section);
      
      const newConfig = { ...config };
      const targetSection = isGallery ? newConfig.images.galleries[section] : newConfig.images.sections[section];
      
      if (targetSection) {
        targetSection.images.push({
          url: imageUrl,
          alt: `${config.businessName} - ${section}`,
          description: ''
        });
        
        updateConfig(newConfig);
        setUploadStatus(prev => ({ ...prev, [statusKey]: 'success' }));
        
        setTimeout(() => {
          setUploadStatus(prev => {
            const { [statusKey]: _, ...rest } = prev;
            return rest;
          });
        }, 2000);
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setUploadStatus(prev => ({ ...prev, [statusKey]: 'error' }));
      
      setTimeout(() => {
        setUploadStatus(prev => {
          const { [statusKey]: _, ...rest } = prev;
          return rest;
        });
      }, 2000);
    }
  };

  const handleImageDelete = (section: string, index: number, isGallery: boolean) => {
    const newConfig = { ...config };
    const targetSection = isGallery ? newConfig.images.galleries[section] : newConfig.images.sections[section];
    
    if (targetSection) {
      targetSection.images.splice(index, 1);
      updateConfig(newConfig);
    }
  };

  const handleImageEdit = (section: string, index: number, field: 'alt' | 'description', value: string, isGallery: boolean) => {
    const newConfig = { ...config };
    const targetSection = isGallery ? newConfig.images.galleries[section] : newConfig.images.sections[section];
    
    if (targetSection) {
      targetSection.images[index][field] = value;
      updateConfig(newConfig);
    }
  };

  const renderImageSection = (section: string, isGallery: boolean) => {
    const targetSection = isGallery ? config.images.galleries[section] : config.images.sections[section];
    if (!targetSection) return null;

    return (
      <div key={section} className="mb-8 p-4 border rounded-lg">
        <h3 className="text-xl font-semibold mb-4">{targetSection.name}</h3>
        <p className="text-gray-600 mb-4">{targetSection.description}</p>
        
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageUpload(e, section, isGallery)}
            className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-md file:border-0
              file:text-sm file:font-semibold
              file:bg-primary file:text-white
              hover:file:bg-primary-dark"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {targetSection.images.map((image, index) => (
            <div key={index} className="border rounded-lg p-4">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              {editingImage?.section === section && editingImage?.index === index ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={image.alt}
                    onChange={(e) => handleImageEdit(section, index, 'alt', e.target.value, isGallery)}
                    className="w-full p-2 border rounded"
                    placeholder="Alt text"
                  />
                  <textarea
                    value={image.description}
                    onChange={(e) => handleImageEdit(section, index, 'description', e.target.value, isGallery)}
                    className="w-full p-2 border rounded"
                    placeholder="Description"
                  />
                  <button
                    onClick={() => setEditingImage(null)}
                    className="w-full bg-primary text-white py-2 rounded"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <p className="text-sm font-medium">{image.alt}</p>
                  {image.description && (
                    <p className="text-sm text-gray-600">{image.description}</p>
                  )}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => setEditingImage({ section, index })}
                      className="text-primary hover:text-primary-dark"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleImageDelete(section, index, isGallery)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Galleries</h2>
        {Object.keys(config.images.galleries).map(section => 
          renderImageSection(section, true)
        )}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Section Images</h2>
        {Object.keys(config.images.sections).map(section => 
          renderImageSection(section, false)
        )}
      </div>
    </div>
  );
} 