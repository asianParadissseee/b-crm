export enum hrefAttr {
  EMAIL = 'mailto',
  TELEPHONE = 'tel'
}

export const handleHref = (attr: hrefAttr, value: string): void => {
  const formattedValue = attr === hrefAttr.TELEPHONE ? value.replace(/\D/g, '') : value

  window.location.href = `${attr}:${formattedValue}`
}
