export const shapes = {
  circle: 'rounded-full',
  square: 'rounded-xl'
};

export const handleOnChange = (onChange, e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onChange(reader.result);
    };
    reader.onerror = error => {
      console.log('Error: ', error);
    };
  }
};
