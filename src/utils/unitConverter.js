import Qty from "js-quantities";

export default (values, newValue) => {
  var added = false;
  const ret = [];
  const newQty = Qty.parse(`${newValue.qty} ${newValue.unit}`);
  values.forEach((item) => {
    if (!newQty) {
      if (item.unit === newValue.unit) {
        ret.push({ ...item, qty: item.qty + newValue.qty });
        added = true;
      } else {
        ret.push(item);
      }
    } else {
      const itemQty = Qty.parse(`${item.qty} ${item.unit}`);
      if (!itemQty) {
        ret.push(item);
      } else if (newQty.isCompatible(itemQty)) {
        const addedQty = newQty.add(itemQty);
        const stringQty = addedQty.toString().split(" ");
        ret.push({
          ...item,
          qty: parseFloat(stringQty[0]).toPrecision(2),
          unit: stringQty[1],
          pluralUnit: `${stringQty[1]}`,
        });
        added = true;
      }
    }
  });
  if (!added) {
    ret.push(newValue);
  }
  return ret;
};
