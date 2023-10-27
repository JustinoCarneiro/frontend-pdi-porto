
/**
 * 
 * @param {String} pathname 
 * @returns {String}
 */

export const formatPathname = (pathname) =>{
  let path = pathname.substring(1)
  return path.replace('/', ' > ').toUpperCase()
}

/**
 * 
 * @param {String} code 
 * @param {[]} terminals
 */
export const validateStatusTerminal = (code, terminals) => {
  const terminal = terminals.find((item) => item.code === code)
  return terminal;
}