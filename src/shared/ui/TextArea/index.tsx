import React, { useEffect, useState } from 'react';
import { Input as AntDInput} from 'antd';
import { useFormContext, Controller } from 'react-hook-form';
import { TextAreaProps as AntDTextAreaProps } from 'antd/es/input';

const {TextArea: AntDTextArea} = AntDInput

interface TextAreaProps {
  name: string;
  rules?: Record<string, any>;
  voiceTextInputActive?: boolean
}

export const TextArea: React.FC<TextAreaProps & AntDTextAreaProps> = ({ voiceTextInputActive, name, rules, placeholder, ...rest }) => {
  const { control } = useFormContext();

  return (
      <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState }) => (
              <AntDTextArea
                {...field}
                {...rest}
                placeholder={placeholder}
                status={fieldState.error ? 'error' : ''}
              />
            )}
          />
  );
};
