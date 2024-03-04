

export const getPrimaryColor = ()=>getComputedStyle(document.querySelector(':root')as any )?.getPropertyValue('--primary')
