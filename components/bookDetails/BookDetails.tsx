import { formFieldContainer, formStyle } from './BookDetails.style';
import { BookDetailsType } from './BookDetailsType';

type BookDetailsChangeProps = {
  onBookDetailsChange: (value: string | number, property: string) => void;
};

export function BookDetails({
  name,
  description,
  count,
  author,
  onBookDetailsChange,
}: BookDetailsType & BookDetailsChangeProps) {
  return (
    <form css={formStyle}>
      <FormField
        id={'bookName'}
        value={name}
        label="Title"
        placeHolder="Enter book title"
        onChange={(value: string) => onBookDetailsChange(value, 'name')}
      />
      <FormField
        id={'bookAuthor'}
        value={author}
        label="Author"
        placeHolder="Enter Author Name"
        onChange={(value: string) => onBookDetailsChange(value, 'author')}
      />
      <FormField
        id={'bookDescription'}
        value={description}
        label="Description"
        placeHolder="Enter book description"
        type="textarea"
        onChange={(value: string) => onBookDetailsChange(value, 'description')}
      />
      <FormField
        id={'bookCount'}
        value={`${count}`}
        label="Count"
        type="number"
        placeHolder="Enter book count"
        onChange={(value: string) =>
          onBookDetailsChange(parseInt(value, 10), 'count')
        }
      />
    </form>
  );
}

type FormFieldProps = {
  readonly id: string;
  readonly label: string;
  readonly value: string;
  readonly onChange: (value: string) => void;
  readonly placeHolder?: string;
  readonly type?: string;
};

const FormField = ({
  id,
  value,
  onChange,
  label,
  placeHolder,
  type = 'text',
}: FormFieldProps) => {
  return (
    <div css={formFieldContainer}>
      <label htmlFor={id}> {label}: </label>
      {type !== 'textarea' ? (
        <input
          value={value}
          type={type}
          id={id}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeHolder}
        />
      ) : (
        <textarea
          value={value}
          id={id}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeHolder}
          rows={5}
        />
      )}
    </div>
  );
};
