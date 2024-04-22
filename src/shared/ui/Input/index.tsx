import React from 'react';
import { Input as AntDInput, InputProps as AntDInputProps } from 'antd';
import { useFormContext, Controller } from 'react-hook-form';

interface InputProps {
  name: string;
  rules?: Record<string, any>;
}

export const Input: React.FC<InputProps & AntDInputProps> = ({ name, rules, placeholder }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field, fieldState }) => (
        <AntDInput
          {...field}
          placeholder={placeholder}
          status={fieldState.error ? 'error' : ''}
        />
      )}
    />
  );
};
