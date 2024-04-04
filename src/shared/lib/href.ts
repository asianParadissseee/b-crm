export enum hrefAttr {
  EMAIL = 'mailto',
  TELEPHONE = 'tel'
}

export const handleHref = (attr: string | hrefAttr, value: string): void => {
  const formattedValue = attr === hrefAttr.TELEPHONE ? value.replace(/\D/g, '') : value

  window.location.href = `${attr}:${formattedValue}`
}
