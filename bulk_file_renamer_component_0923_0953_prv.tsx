// 代码生成时间: 2025-09-23 09:53:57
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Define PropTypes for the component
const propTypes = {
  files: PropTypes.arrayOf(PropTypes.string).isRequired,
  renamePattern: PropTypes.string.isRequired,
  onComplete: PropTypes.func,
};

// Define the TypeScript type for the component props
type Props = {
  files: string[];
  renamePattern: string;
  onComplete?: () => void;
};

const BulkFileRenamer = ({ files, renamePattern, onComplete }: Props) => {
  // State to manage the renamed files
  const [renamedFiles, setRenamedFiles] = useState<string[]>(files);

  // Handles the rename operation
  const handleRename = () => {
    // Generate new filenames based on the provided pattern
    const newFiles = files.map((file, index) => {
      return `${renamePattern}${index + 1}-${file}`;
    });
    setRenamedFiles(newFiles);
    if (onComplete) onComplete();
  };

  return (
    <div>
      <h1>Bulk File Renamer</h1>
      <button onClick={handleRename}>Rename Files</button>
      <ul>
        {renamedFiles.map((file, index) => (
          <li key={index}>{file}</li>
        ))}
      </ul>
    </div>
  );
};

BulkFileRenamer.propTypes = propTypes;

export default BulkFileRenamer;
