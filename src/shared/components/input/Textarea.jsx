export const Textarea = ({ className, placeholder, cols = 3, rows = 3 }) => {
  return (
    <>
      <textarea
        placeholder={placeholder}
        cols={cols}
        rows={rows}
        className={['e-textarea', className].filter(Boolean).join(' ')}
        name=""
        id=""
      ></textarea>
    </>
  );
};
