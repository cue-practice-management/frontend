export function buildFormData(data: Record<string, any>, file?: File, fileField = 'file'): FormData {
  const formData = new FormData();

  Object.entries(data).forEach(([key, value]) => {
    if (value !== null && value !== undefined) {
      formData.append(key, value);
    }
  });

  if (file) {
    formData.append(fileField, file);
  }

  return formData;
}