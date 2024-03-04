export const mapTranslatedProperties = (
    arrayOfDetails :any,
    properties:any ,
    language_id  : '1'|'2' |1 |2
  ) => {
    
    if (!arrayOfDetails || !properties || !language_id) return "";
    if (Array.isArray(arrayOfDetails) && arrayOfDetails.length === 0) return "";
  
    const target = arrayOfDetails.find(
      (item:any) => item.locale == language_id
    );
    if (!target) {
      return "";
    }
  
    if (!Array.isArray(properties)) {
      return target[properties];
    }
  
    // [prop1, prop2, prop3, ....] is passed
    const ret:any = {};
    properties.forEach((prop:string) => {
      ret[prop] = target[prop];
    });
    return ret;
  };
  