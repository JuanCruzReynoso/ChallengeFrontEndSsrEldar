import React from 'react';
import { TextField } from '@mui/material';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder = "Buscar..." }) => {
  return (
    <TextField
      variant="outlined"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      sx={{
        width: { xs: '100%', sm: '40%' },
        marginBottom: { xs: '20px', sm:'0px' },
      }}
    />
  );
};

export default SearchBar;
