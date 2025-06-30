import { useEffect } from 'react';

interface ScreenshotStateManagerProps {
  setUploadedFiles: (files: File[]) => void;
  setImageDataList: (dataList: string[]) => void;
  uploadedFiles: File[];
  imageDataList: string[];
}

export const ScreenshotStateManager = ({
  setUploadedFiles,
  setImageDataList,
  uploadedFiles,
  imageDataList
}: ScreenshotStateManagerProps) => {
  useEffect(() => {
    // This component manages screenshot state
    // Currently just a placeholder for future screenshot functionality
  }, [uploadedFiles, imageDataList]);

  return null; // This component doesn't render anything visible
}; 