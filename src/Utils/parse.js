import parse from 'html-react-parser';

const parseJSXToString = str => parse(str)
    .map((v) => (toString.call(v) === "[object Object]") ? v.props.children : v)
    .join("");


export { parseJSXToString };