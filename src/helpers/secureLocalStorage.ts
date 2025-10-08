import SecureLS from 'secure-ls';

const ls = new SecureLS({
  encodingType: 'base64',
  encryptionSecret: import.meta.env.VITE_SECURE_KEY,
});

export function secureLocalStorage() {
  const setEncryptedItem = <T>(key: string, value: T) => {
    ls.set(key, value);
  };

  const getEncryptedItem = <T>(key: string): T | null => {
    try {
      return ls.get(key) as T;
    } catch {
      return null;
    }
  };

  const removeEncryptedItem = (key: string) => {
    ls.remove(key);
  };

  const clearAllEncryptedItem = () => {
    ls.removeAll();
  };

  return {
    setEncryptedItem,
    getEncryptedItem,
    removeEncryptedItem,
    clearAllEncryptedItem,
  };
}
