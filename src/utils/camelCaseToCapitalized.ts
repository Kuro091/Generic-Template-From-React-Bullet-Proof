export function camelCaseToCapitalized(str: string) {
  // Check if the string has any white spaces
  if (/\s/.test(str)) {
    return str;
  }

  // Insert space before each capital letter using a regular expression
  const capitalizedStr = str.replace(/([A-Z])/g, " $1");
  return capitalizedStr.charAt(0).toUpperCase() + capitalizedStr.slice(1);
}