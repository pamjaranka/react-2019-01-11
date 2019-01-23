export const formatDate = (date) => {
  if('string' === typeof date) {
    date = new Date(date);
  }
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}
