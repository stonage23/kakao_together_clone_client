
export const handleCache = async (id, cacheObject, fetchData) => {
  if (cacheObject[id]) {
    return cacheObject[id];
  } else {
    try {
      return await fetchData();
      // TODO 예외처리
    } catch (error) {
      console.error('custom handleCache failed:', error);
    }
  }
};