import React, { useState } from 'react';
import { Button, FileIcon, FileName, Input } from './styled';

// interface Props {}

export const FileInput: React.FC = () => {
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<FileList | null>(null);

  const handleFile = (a: any) => {
    setFile(a);
    if (file) {
      // console.log(a);
    }
  };

  const handleClick = () => {
    hiddenFileInput?.current?.click();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = event.target.files;
    handleFile(fileUploaded);
  };

  return (
    <>
      <Button onClick={handleClick}>
        <FileIcon />
        Выберите файл
      </Button>
      <Input type="file" ref={hiddenFileInput} onChange={e => handleChange(e)} />
      <FileName>{file && file[0].name}</FileName>
    </>
  );
};
