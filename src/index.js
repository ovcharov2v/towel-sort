// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix || matrix.length == 0) return [];
    return matrix.reduce((res, el, index) => {
      return (index % 2) ? res = [...res, ...el.reverse()] : res = [...res, ...el]
    }, []);
}