export const InputIcon = ({ icon }) => {
  return (
    <>
      <span className={['e-input-icon', icon].filter(Boolean).join(' ')}></span>
    </>
  );
};
