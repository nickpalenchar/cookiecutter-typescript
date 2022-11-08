
const greet = (name: string): string => {
  return `Hello, ${name}`;
}

console.log(greet('{{ cookiecutter.username }}'))

export { greet }