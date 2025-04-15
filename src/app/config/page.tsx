import React from 'react';
import { getConfig, updateConfig } from '@/services/supabase';
import BusinessInfoForm from '@/components/BusinessInfoForm';
import ServiceManager from '@/components/ServiceManager';
import ImageSectionManager from '@/components/ImageSectionManager';
import { BusinessConfig } from '@/data/config';

export default async function ConfigPage() {
  const config = await getConfig();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Business Configuration</h1>
      
      <div className="space-y-8">
        <BusinessInfoForm config={config} updateConfig={updateConfig} />
        
        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <ServiceManager config={config} updateConfig={updateConfig} />
        </div>

        <div className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">Images</h2>
          <ImageSectionManager config={config} updateConfig={updateConfig} />
        </div>
      </div>
    </div>
  );
} 