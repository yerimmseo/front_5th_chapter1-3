export function deepEquals<T>(objA: T, objB: T): boolean {
  if (objA === objB) {
    return true;
  }

  // 기본 타입, null, undefined인 경우 비교
  if (
    typeof objA !== "object" ||
    objA === null ||
    objA === undefined ||
    typeof objB !== "object" ||
    objB === null ||
    objB === undefined
  ) {
    return objA === objB;
  }

  // 여기 도달하면 두 값이 객체임이 보장됨
  // 배열인 경우 비교
  if (Array.isArray(objA) && Array.isArray(objB)) {
    if (objA.length !== objB.length) {
      return false;
    }

    // 배열 안의 배열 비교
    for (let i = 0; i < objA.length; i++) {
      if (!deepEquals(objA[i], objB[i])) {
        return false;
      }
    }

    return true;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }

    if (!deepEquals(objA[key], objB[key])) {
      return false;
    }
  }

  return true;
}
