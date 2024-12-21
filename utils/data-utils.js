export const replaceMongoIdInObject = (object) => {
    const { _id, ...updatedObj } = { ...object, id: object._id.toString() };
  
    return updatedObj;
  };
  