import React, { useRef, useState, KeyboardEvent, ClipboardEvent } from 'react';

interface OTPInputProps {
  length: number;
  onComplete?: (value: string) => void;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  className?: string;
}

export const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  onComplete,
  onChange,
  autoFocus = true,
  disabled = false,
  className = '',
}) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const focusInput = (index: number) => {
    if (inputRefs.current[index]) {
      inputRefs.current[index]?.focus();
    }
  };

  const handleChange = (index: number, value: string) => {
    if (disabled) return;

    const newValue = value.replace(/[^0-9]/g, '');
    if (newValue.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = newValue;
    setOtp(newOtp);

    // Call onChange with the current complete value
    const otpString = newOtp.join('');
    onChange?.(otpString);

    // Move to next input if value is entered
    if (newValue && index < length - 1) {
      focusInput(index + 1);
    }

    // Check if OTP is complete
    if (newOtp.every(val => val !== '') && onComplete) {
      onComplete(otpString);
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    if (e.key === 'Backspace') {
      e.preventDefault();
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
        onChange?.(newOtp.join(''));
      } else if (index > 0) {
        focusInput(index - 1);
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      e.preventDefault();
      focusInput(index - 1);
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      e.preventDefault();
      focusInput(index + 1);
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    if (disabled) return;

    e.preventDefault();
    const pasteData = e.clipboardData.getData('text').replace(/[^0-9]/g, '');
    const pastedArray = pasteData.split('').slice(0, length);

    const newOtp = [...otp];
    pastedArray.forEach((value, index) => {
      if (index < length) {
        newOtp[index] = value;
      }
    });

    setOtp(newOtp);
    onChange?.(newOtp.join(''));

    if (newOtp.every(val => val !== '') && onComplete) {
      onComplete(newOtp.join(''));
    }

    // Focus the next empty input or the last input
    const nextEmptyIndex = newOtp.findIndex(val => !val);
    focusInput(nextEmptyIndex !== -1 ? nextEmptyIndex : length - 1);
  };

  return (
    <div 
      className={`flex gap-3 sm:px-2 ${className}`}
      role="group"
      aria-label="OTP input"
    >
      {otp.map((value, index) => (
        <input
          key={index}
          ref={el => { inputRefs.current[index] = el; }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={value}
          onChange={e => handleChange(index, e.target.value)}
          onKeyDown={e => handleKeyDown(index, e)}
          onPaste={handlePaste}
          disabled={disabled}
          autoFocus={autoFocus && index === 0}
          className={`
            sm:w-12 sm:h-12 h-10 w-10 text-center sm:text-lg text-base font-semibold rounded-lg
            border-2 border-gray-300 focus:border-main-green/60 focus:ring-2 focus:ring-main-green/20
            outline-none transition-all duration-200
            disabled:bg-gray-100 bg-transparent disabled:cursor-not-allowed
          `}
          aria-label={`Digit ${index + 1}`}
        />
      ))}
    </div>
  );
};