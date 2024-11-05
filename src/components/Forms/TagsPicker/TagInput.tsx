import React, { KeyboardEvent, ChangeEvent } from 'react';

interface TagInputProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
  label?: string;
  inputClassName?: string;
  tagClassName?: string;
  tagLimit?: number;
}

const TagInput: React.FC<TagInputProps> = ({
  tags,
  setTags,
  inputValue,
  setInputValue,
  tagLimit = 10,
  placeholder = 'Escribe y presiona Enter...',
  label = 'Etiquetas',
  inputClassName = 'dark:bg-black w-full border rounded-lg my-2',
  tagClassName = 'bg-primary text-white px-2 py-1 m-1 rounded-full flex',
}) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === ',' || event.key === ' ') {
      event.preventDefault();
      addTag(inputValue.trim());
    }
  };

  const addTag = (value: string) => {
    if (value && !tags.includes(value) && tags.length < tagLimit) {
      setTags([...tags, value]);
      setInputValue('');
    }
  };

  const removeTag = (index: number) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <section className="w-full">
      <div>
        <label htmlFor="tags" className="mb-2 text-lg font-bold tw-full">
          {label}
        </label>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={inputClassName}
          />
        </div>
        {tags.length > 0 && (
          <div className="flex m-2 border rounded-lg p-5 flex-wrap">
            {tags.map((tag, index) => (
              <span key={index} className={tagClassName}>
                {tag}
                <button
                  onClick={() => removeTag(index)}
                  className="ml-1 text-white font-bold"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
      </div>
      <p
        className={`text-right ${tags.length == tagLimit ? 'text-error' : ''}`}
      >
        {tags.length} / {tagLimit}
      </p>
    </section>
  );
};

export { TagInput };
