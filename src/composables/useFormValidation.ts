import { ref, computed } from 'vue';

export interface ValidationRule {
  (value: any): boolean | string;
}

export function useFormValidation() {
  const isValid = ref(false);

  // Common validation rules
  const rules = {
    required: (message = 'This field is required'): ValidationRule => {
      return (value: any) => !!value || message;
    },

    email: (message = 'Invalid email address'): ValidationRule => {
      return (value: string) => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(value) || message;
      };
    },

    minLength: (min: number, message?: string): ValidationRule => {
      return (value: string) => {
        const msg = message || `Minimum ${min} characters required`;
        return (value && value.length >= min) || msg;
      };
    },

    maxLength: (max: number, message?: string): ValidationRule => {
      return (value: string) => {
        const msg = message || `Maximum ${max} characters allowed`;
        return !value || value.length <= max || msg;
      };
    },

    numeric: (message = 'Must be a number'): ValidationRule => {
      return (value: any) => {
        return !value || !isNaN(Number(value)) || message;
      };
    },

    url: (message = 'Invalid URL'): ValidationRule => {
      return (value: string) => {
        try {
          new URL(value);
          return true;
        } catch {
          return message;
        }
      };
    },

    match: (compareValue: any, message = 'Values do not match'): ValidationRule => {
      return (value: any) => value === compareValue || message;
    }
  };

  return {
    isValid,
    rules
  };
}
