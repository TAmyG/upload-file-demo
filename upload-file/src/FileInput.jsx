import React, { useEffect, useState } from 'react'
import { useUploadFileMutation } from './store/api';

export const FileInput = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [uploadFile, { error: uploadFileError }] = useUploadFileMutation();

  useEffect(() => {
    setError(uploadFileError);
  }, [uploadFileError])


  const types = ['image/png', 'image/jpeg', 'image/gif'];

  const handleChange = async (e) => {
    try {
      let selected = e.target.files[0];

      if (!selected || !types.includes(selected.type)) {
        console.log(selected, types.includes(selected.type));
        setFile(null);
        setError('Please select an image file (png, jpeg, or gif)');
        return;
      }

      setFile(selected);

      const formData = new FormData();
      console.log('-------------', typeof selected)
      formData.append('myFile', selected);
      await uploadFile(formData);
      setError('');
    } catch (error) {
      setFile(null);
      setError(error);
    }

  }

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
}
