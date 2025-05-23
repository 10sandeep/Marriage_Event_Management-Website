import { X } from 'lucide-react';
import { InvitationTemplate } from '../../types';

interface PreviewModalProps {
  template: InvitationTemplate | null;
  isOpen: boolean;
  onClose: () => void;
}

const PreviewModal = ({ template, isOpen, onClose }: PreviewModalProps) => {
  if (!isOpen || !template) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
            {template.name}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-auto p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <img 
                src={template.imageUrl} 
                alt={template.name}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Theme
                </h4>
                <p className="text-gray-900 dark:text-white">
                  {template.theme}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Description
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {template.description}
                </p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  Customization Options
                </h4>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Personalize names and details</li>
                  <li>Change fonts and colors</li>
                  <li>Add your own photos</li>
                  <li>Include event schedule</li>
                  <li>Embed RSVP functionality</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 border-t dark:border-gray-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 mr-3 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all duration-200"
          >
            Use This Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;